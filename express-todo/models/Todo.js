const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
});

const Todo = mongoose.model("Todos", todoSchema);
module.exports = Todo;
