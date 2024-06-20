const { body } = require("express-validator");
const validate = require("../middleware/validate.middleware");

const signUp = [
  body("email").isEmail().withMessage("Invalid email"),
  body("password").isStrongPassword(),
  body("firstname").isString({ min: 3 }),
  body("lastname").isString({ min: 5 }),
  validate,
];

const signIn = [
  body("email").isEmail().withMessage("Invalid email"),
  body("password").isStrongPassword(),
  validate,
];

module.exports = {
  signUp,
  signIn,
};
