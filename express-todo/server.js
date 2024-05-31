const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const todos = [];

app.get("/", (req, res) => {
  res.render("index", { todos });
});

app.post("/todo", (req, res) => {
  todos.push(req.body.todo);
  res.redirect("/");
});

app.post("/todo/delete/:index", (req, res) => {
  todos.splice(req.params.index, 1);
  res.redirect("/");
});

app.get("/:username", (req, res) => {
  res.send(req.params.username + " " + req.query.value);
});

app.listen(3000, () => {
  console.log("Server Started on Port 3000");
});
