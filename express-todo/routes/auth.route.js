const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const { signIn, signUp } = require("../controllers/auth.controller");
const validate = require("../middleware/validate.middleware");

const signInValidator = [
  body("email").isEmail().withMessage("Invalid email"),
  body("password").isStrongPassword(),
  validate,
];

router.post("/sign-in", signInValidator, signIn);

const signUpValidator = [
  body("email").isEmail().withMessage("Invalid email"),
  body("password").isStrongPassword(),
  body("firstname").isString({ min: 3 }),
  body("lastname").isString({ min: 5 }),
  validate,
];
router.post("/sign-up", signUpValidator, signUp);

module.exports = router;
