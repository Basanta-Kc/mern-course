const mongoose = require("mongoose");

// Add more fields in users, position , bio
// signup
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const User = mongoose.model("Users", userSchema);
module.exports = User;
