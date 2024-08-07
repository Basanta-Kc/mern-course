const Product = require("../models/Product");
const getProducts = async (req, res) => {
  const featuredProducts = await Product.find({
    isFeatured: true,
  }).limit(4);

  const latestProducts = await Product.find()
    .sort({
      createdAt: "desc",
    })
    .limit(4);
  res.json({
    featuredProducts,
    latestProducts,
  });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find();

  res.json({
    products,
  });
};

module.exports = {
  getProducts,
  getAllProducts,
};
