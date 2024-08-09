const mongoose = require("mongoose");

// Message schema and model
const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    phoneNumber: { type: String, required: true },
  },
  { timestamps: true }
);

const MessageModel = mongoose.model("Message", messageSchema);

module.exports = MessageModel;
