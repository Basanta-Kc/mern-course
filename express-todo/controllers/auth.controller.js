const User = require("../models/User");

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
  res.json({
    message: "User successfully signed in.",
    token: "tokennnnn",
  });
};

module.exports = {
  signIn,
  signUp,
};
