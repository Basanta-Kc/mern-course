const mongoose = require("mongoose");
// Database Connection
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mern-todo");
    console.log("MongodDb Connected.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
