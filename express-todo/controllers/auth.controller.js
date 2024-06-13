const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Secret key for signing the token
const secretKey = "WIolrgLYgeOX8YfrFENHVEd3jWbasMAC";

const signUp = async (req, res) => {
  let { firstName, lastName, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(409).json({
      message: "You have already signed up. Please login.",
    });
    return;
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  await User.create({ firstName, lastName, email, password: hashedPassword });
  res.json({
    message: "User successfully signed up.",
  });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    res.json({
      message: "Invalid credentials.",
    });
    return;
  }

  const validPassword = bcrypt.compareSync(password, user.password);

  if (!validPassword) {
    res.json({
      message: "Invalid credentials.",
    });
    return;
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
