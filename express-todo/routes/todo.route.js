const express = require("express");
const router = express.Router();
const {
  getTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  createTodo,
} = require("../controllers/todo.controller");

router.get("/", getTodos);
router.get("/:id", getTodo);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id", updateTodo);

module.exports = router;
