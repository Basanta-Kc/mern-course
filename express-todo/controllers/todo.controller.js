const Todo = require("../models/Todo");

const getTodos = async (req, res) => {
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
