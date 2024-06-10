const Todo = require("../models/Todo");
const jwt = require("jsonwebtoken")
const { secretKey } = require("./auth.controller");

const getTodos = async (req, res) => {
  const { token } = req.headers;

  try {
    const decoded = jwt.verify(token, secretKey);
    console.log(decoded);
  } catch (err) {
    console.log(err)
    res.status(401).json({
      message: "Unauthorized",
    });
    return;
  }

  const todos = await Todo.find();
  res.json({
    data: todos,
  });
};

const getTodo = async (req, res) => {
  const { id: _id } = req.params;
  const todo = await Todo.findOne({ _id });
  res.json({
    data: todo,
  });
};

const createTodo = async (req, res) => {
  const { title } = req.body;
  await Todo.create({ title });
  res.json({
    message: "Todo successfully added.",
  });
};

const deleteTodo = async (req, res) => {
  const { id: _id } = req.params;
  await Todo.deleteOne({ _id });
  res.json({
    message: "Todo deleted successfully.",
  });
};

const updateTodo = async (req, res) => {
  const { title } = req.body;
  const { id: _id } = req.params;
  await Todo.updateOne({ _id }, { title });
  res.json({
    message: "Todo edited successfully",
  });
};

module.exports = {
  getTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  createTodo,
};
