const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const todos = [];

app.get("/", (req, res) => {
  if (req.query.search) {
    const filteredTodos = todos.filter((todo) =>
      todo.includes(req.query.search)
    );
    res.render("index", {
      todos: filteredTodos,
      search: req.query.search,
    });
  }
  res.render("index", { todos, search: null });
});

app.post("/todo", (req, res) => {
  todos.push(req.body.todo);
  res.redirect("/");
});

app.post("/todo/delete/:index", (req, res) => {
  todos.splice(req.params.index, 1);
  res.redirect("/");
});

app.get("/todo/edit/:index", (req, res) => {
  const index = req.params.index;
  res.render("edit", {
    index,
    todo: todos[index],
  });
});

app.post("/todo/edit/:index", (req, res) => {
  todos[req.params.index] = req.body.todo;
  res.redirect("/");
});

app.get("/:username", (req, res) => {
  res.send(req.params.username + " " + req.query.value);
});

app.listen(3000, () => {
  console.log("Server Started on Port 3000");
});
