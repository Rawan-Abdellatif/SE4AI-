const mongoose = require("mongoose");
const Admin = require("./userModel");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB using Mongoose
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const postAdmin = async (req, res) => {
  try {
    // Extract relevant information from the request body
    const {
      username,
      password,
      Name,
      Job,
      University,
      Image,
      Website,
      LinkedIn,
      Twitter,
      Email,
    } = req.body;

    // Perform validation checks on the username and password
    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required fields.",
      });
    }

    // Check if the username or name already exists in the database
    const existingAdmin = await Admin.findOne({
      $or: [{ username }, { Name }],
    });
    if (existingAdmin) {
      // If the username or name already exists, respond with an error message
      return res.status(409).json({
        message:
          "Username or name already exists. Please choose a different username or name.",
      });
    }

    // Create a new admin object with the provided information and custom _id
    const newAdmin = new Admin({
      _id: uuidv4(), // Generate a unique ID for the new admin
      username,
      password,
      Name,
      Job,
      University,
      Image,
      Website,
      LinkedIn,
      Twitter,
      Email,
    });

    // Save the new admin to the database
    const savedAdmin = await newAdmin.save();

    // Send success message with status code 201 Created
    res
      .status(201)
      .json({ data: savedAdmin, message: "Admin added successfully" });
  } catch (err) {
    console.error(err);
    // Send an error message if any other error occurred
    res.status(500).json({ message: "Error adding Admin" });
  }
};

module.exports = { postAdmin };
