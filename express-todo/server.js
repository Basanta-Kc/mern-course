const express = require("express");
require("express-async-errors");
const connectDb = require("./config/db");
const todoRoutes = require("./routes/todo.route");
const todoViewRoutes = require("./routes/todo.view.route");
const authRoutes = require("./routes/auth.route");
const NotFoundError = require("./errors/not-found.error");
const CustomError = require("./errors/custom.error");

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDb();

app.use("/api/todos", todoRoutes);
app.use("/view/todo", todoViewRoutes);
app.use("/api/auth", authRoutes);

// app.all("*", async (req, res) => {
//   throw new NotFoundError("Not Found.");
//   res.status(404).json({
//     message: "Not found.",
//   });
// });

// app.use((err, req, res, next) => {
//   console.log(err instanceof CustomError);
//   if (err instanceof CustomError) {
//     res.status(err.statusCode).json({
//       message: err.serializeErrors(),
//     });
//     return;
//   }
//   if (err.message == "Invalid Credentials") {
//     res.status(401).json({
//       message: err.message,
//     });
//     return;
//   }
//   res.status(500).json({
//     message: "Internal server errror.",
//   });
// });

app.listen(3000, () => {
  console.log("Server Started on Port 3000");
});
