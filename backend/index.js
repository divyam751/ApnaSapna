const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
const userRouter = require("./routes/user.route");
const messageRouter = require("./routes/message.route");
require("dotenv").config();
const morgan = require("morgan");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev")); // Logging middleware

// Routes
app.get("/", (req, res) => {
  res.send("home route");
});

app.use("/api/user", userRouter);
app.use("/api/message", messageRouter);

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Start server
const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB Successfully");
  } catch (error) {
    console.error("Error connecting to DB:", error.message);
    process.exit(1); // Exit process with failure code
  }
  console.log(`Server is running on port ${PORT}`);
});
