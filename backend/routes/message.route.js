const { Router } = require("express");
const Message = require("../model/message.model");
const authentication = require("../middleware/authentication");

const messageRouter = Router();

// Create a new message
messageRouter.post("/", async (req, res) => {
  try {
    const { name, email, message, phoneNumber } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "All required fields must be provided",
      });
    }

    const newMessage = new Message({ name, email, message, phoneNumber });
    await newMessage.save();

    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

// Get all messages (authenticated users only)
messageRouter.get("/", authentication, async (req, res) => {
  try {
    const messages = await Message.find({});
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    console.error("Error retrieving messages:", error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

module.exports = messageRouter;
