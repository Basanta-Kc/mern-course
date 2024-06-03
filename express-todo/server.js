const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// Database Connection
mongoose.connect("mongodb://localhost:27017/mern-todo").then(() => {
  console.log("MongodDb Connected.");
});

const todoSchema = new mongoose.Schema({
  title: String,
});

const Todo = mongoose.model("Todos", todoSchema);

app.get("/", (req, res) => {
  Todo.find().then((todos) => {
    res.render("index", { todos, search: null });
  });
});

app.post("/todo", (req, res) => {
  Todo.create({ title: req.body.todo })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

app.post("/todo/delete/:id", (req, res) => {
  const id = req.params.id;
  Todo.deleteOne({ _id: id }).then(() => {
    res.redirect("/");
  });
});

app.get("/todo/edit/:id", (req, res) => {
  const id = req.params.id;
  Todo.findOne({ _id: id }).then((todo) => {
    res.render("edit", {
      id,
      todo,
    });
  });
});

app.post("/todo/edit/:id", (req, res) => {
  Todo.updateOne({_id: req.params.id}, { title: req.body.todo }).then(() => {
    res.redirect("/");
  })
});



app.listen(3000, () => {
  console.log("Server Started on Port 3000");
});
