"use strict";
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid"); // Import uuidv4 from the "uuid" library
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const client = new MongoClient(MONGO_URI, options);

const postAdmin = async (req, res) => {

  try {
    // Extract relevant information from the request body
    const {
      username,
      password,
      Name,
      Job,
      University,
      Image, // Assuming Image is a valid Buffer containing image data
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

    // Connect to the MongoDB server
    await client.connect();

    // Access the database and collection
    const db = client.db("se4ai");
    const collection = db.collection("Admins");

    // Check if the username or name already exists in the database
    const existingAdmin = await collection.findOne({
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
    const newAdmin = {
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
    };

    // Insert the new admin document into the collection
    const result = await collection.insertOne(newAdmin);

    // Send success message with status code 201 Created
    res
      .status(201)
      .json({ data: result.ops[0], message: "Admin added successfully" });
  } catch (err) {
    console.error(err);
    // Send an error message if any other error occurred
    res.status(500).json({ message: "Error adding Admin" });
  } finally {
    // Close the MongoClient connection
    client.close();
  }
};

module.exports = { postAdmin };
