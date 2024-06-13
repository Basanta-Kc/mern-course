const User = require("../models/User");
const bcrypt = require("bcryptjs");

const signUpService = async ({ firstName, lastName, email, password }) => {
  const userExist = await User.findOne({ email });

  if (userExist) {
    throw new Error("ALREADY_SIGNED_IN");
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
  signUpService,
};
