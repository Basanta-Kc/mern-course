const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/todo", (req, res) => {
  console.log(req.body.todo);
  res.send("ok");
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
