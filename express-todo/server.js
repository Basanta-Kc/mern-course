const express = require("express");
const connectDb = require("./config/db");
const todoRoutes = require("./routes/todo.route");
const todoViewRoutes = require("./routes/todo.view.route")
const authRoutes = require("./routes/auth.route")

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDb();

app.use("/api/todos", todoRoutes);
app.use("/view/todo", todoViewRoutes)
app.use("/api/auth", authRoutes)

app.listen(3000, () => {
  console.log("Server Started on Port 3000");
});
