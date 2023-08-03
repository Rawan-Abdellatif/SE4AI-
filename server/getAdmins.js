"use strict";
const mongoose = require("mongoose");
const Admin = require("./userModel");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const getAdmins = async (req, res) => {
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB database!");

    // Fetch all admins from the 'admins' collection using Admin.find()
    const admins = await Admin.find();

    // Close the connection to the database
    await mongoose.connection.close();

    console.log("Disconnected from MongoDB!");

    // Send the fetched admins as a response
    res.status(200).json({ message: "Admins list", data: admins });
  } catch (err) {
    console.error("Error retrieving admins:", err);
    res.status(500).json({ message: "Error retrieving admins" });
  }
};

module.exports = { getAdmins };
