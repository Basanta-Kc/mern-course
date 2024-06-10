const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Secret key for signing the token
const secretKey = "WIolrgLYgeOX8YfrFENHVEd3jWbasMAC";


const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  await User.create({ firstName, lastName, email, password });
  res.json({
    message: "User successfully signed up.",
  });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) {
    res.json({
      message: "Invalid credentials.",
    });
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
  secretKey
};
