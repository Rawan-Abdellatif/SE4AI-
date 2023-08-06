const mongoose = require("mongoose");
const UserModel = require("./userModel");
const userData = require("./userData");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

// Load MongoDB URI from the .env file
const MONGO_URI = process.env.MONGO_URI;

// Function to generate unique IDs for each document using uuidv4
function addUniqueIdsToUserData(userData) {
  return userData.map((admin) => ({
    ...admin,
    _id: uuidv4(),
  }));
}

// Function to check for duplicate usernames in the userData array
function hasDuplicateUsernames(userData) {
  const usernames = userData.map((admin) => admin.username);
  return new Set(usernames).size !== userData.length;
}

// Function to insert admin data into the database
async function insertAdminData() {
  try {
    // Check for duplicate usernames in userData
    if (hasDuplicateUsernames(userData)) {
      console.error("Duplicate usernames found in the userData array.");
      return;
    }

    // Connect to MongoDB using Mongoose
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB database!");

    // Generate unique IDs for the admin data
    const adminDataWithIds = addUniqueIdsToUserData(userData);

    // Insert the admin data into the 'admins' collection using UserModel.insertMany()
    await UserModel.insertMany(adminDataWithIds);

    console.log("Data inserted successfully!");

    // Close the connection to the database
    await mongoose.connection.close();

    console.log("Disconnected from MongoDB!");
  } catch (err) {
    console.error("Error inserting data:", err);
  }
}

// Call the function to insert admin data
insertAdminData();
