const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home.controller");

router.get("/products", homeController.getProducts);
router.get("/products/all", homeController.getAllProducts);

module.exports = router;
