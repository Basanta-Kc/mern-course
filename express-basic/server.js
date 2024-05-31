const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const todos = [];

app.get("/", (req, res) => {
  console.log(todos);
  res.render("index", { todos });
});

app.post("/todo", (req, res) => {
  todos.push(req.body.todo);
  res.redirect("/");
});

// app.get("/login", (req, res) => {
//   res.send("login page");
// });

// app.get("/details/:username", (req, res) => {
//   console.log(req.params);
//   console.log(req.query);
//   res.send([{ name: "basanta", age: "10" }]);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
