const Product = require("./models/Product");
const User = require("./models/User");
const { signUp } = require("./services/auth.services");
const connectDb = require("./config/db");

connectDb();

async function seedData() {
  await User.deleteMany();
  await Product.deleteMany();

  await signUp({
    firstName: "Super",
    lastName: "Admin",
    email: "admin@gmail.com",
    password: "Admin123",
  });

  const { _id: user } = await User.findOne({ email: "admin@gmail.com" });

  await Product.insertMany([
    {
      name: "Watch",
      image: "uploads/watch.png",
      isFeatured: true,
      price: 100,
      quantity: 10,
      user,
    },
    {
      name: "Shoes",
      image: "uploads/watch.png",
      isFeatured: true,
      price: 100,
      quantity: 10,
      user,
    },
    {
      name: "Bag",
      image: "uploads/watch.png",
      isFeatured: true,
      price: 100,
      quantity: 10,
      user,
    },
    {
      name: "Cap",
      image: "uploads/watch.png",
      isFeatured: true,
      price: 30,
      quantity: 10,
      user,
    },
  ]);

  console.log("Data seeded succesfully.");
}

seedData();
