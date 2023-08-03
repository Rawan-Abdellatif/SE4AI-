"use strict";
const mongoose = require("mongoose");
const Admin = require("./userModel");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB using Mongoose
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event listener to handle connection errors
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Event listener to handle successful connection
db.once("open", () => {
  console.log("Connected to MongoDB database!");
});

const getAdmin = async (req, res) => {
  const adminId = req.params.adminId;
  console.log(adminId);
  try {
    const admin = await Admin.findById(adminId);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ message: "This is the Admin", data: admin });
  } catch (err) {
    console.error("Error retrieving admin:", err);
    res.status(500).json({ message: "Error retrieving admin" });
  }
};

module.exports = { getAdmin };
