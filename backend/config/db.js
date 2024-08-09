const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_URL;

const connection = mongoose.connect(url);

connection
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure code
  });

module.exports = connection;
