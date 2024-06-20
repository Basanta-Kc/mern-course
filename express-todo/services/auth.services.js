const User = require("../models/User");
const bcrypt = require("bcryptjs");

const signUp = async ({ firstName, lastName, email, password }) => {
  const userExist = await User.findOne({ email });

  // Create custom error calass and use that,
  if (userExist) {
    throw new Error("ALREADY_SIGNED_IN"); // 409
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
};

module.exports = {
  signUp,
};
