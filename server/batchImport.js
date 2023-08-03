const mongoose = require("mongoose");
const User = require("./userModel");
const userData = require("./userData");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const addAdmin = async () => {
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB database!");

    // Generate a unique ID for each document using uuidv4
    const AdminsWithId = userData.map((admin) => ({
      ...admin,
      _id: uuidv4(),
    }));

    // Insert the Admins into the 'users' collection using User.insertMany()
    await User.insertMany(AdminsWithId);

    console.log("Data inserted successfully!");

    // Close the connection to the database
    await mongoose.connection.close();

    console.log("Disconnected from MongoDB!");
  } catch (err) {
    console.error("Error inserting data:", err);
  }
};

addAdmin();
