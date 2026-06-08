console.log("SERVER STARTED");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

console.log("DEBUG MONGO_URL:", process.env.MONGO_URL);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
console.log("Connecting to MongoDB...");

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected ✅");
  })
  .catch((err) => {
    console.log("MongoDB Error ❌", err);
  });

// Contact Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", ContactSchema);

// API route
app.post("/api/contact", async (req, res) => {
  try {
    const data = new Contact(req.body);
    await data.save();
    res.json({ success: true, message: "Message saved successfully!" });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

const cors = require("cors");
app.use(cors());
app.use(express.json());
const PORT = 5000; 

res.json({ success: true, message: "Message stored successfully!" });

app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
}); 

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
