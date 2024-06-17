const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { signUpService } = require("../services/auth.services.js");
const UnAuthorizedError = require("../errors/un-authorized.js");

// Secret key for signing the token
const secretKey = "WIolrgLYgeOX8YfrFENHVEd3jWbasMAC";

const signUp = async (req, res) => {
  await signUpService(req.body);
  res.json({
    message: "User successfully signed up.",
  });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnAuthorizedError("Email or password is incorrect.");
  }

  // plain password, hashed password
  const validPassword = bcrypt.compareSync(password, user.password);

  if (!validPassword) {
    throw new UnAuthorizedError("Invalid Credentials.");
  }

  const token = jwt.sign({ id: user._id, email: user.email }, secretKey, {
    expiresIn: "1d",
  });

  res.json({
    message: "User successfully signed in.",
    token,
  });
};

module.exports = {
  signIn,
  signUp,
  secretKey,
};
