const mongoose = require("mongoose");
// Database Connection
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("MongodDb Connected.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
