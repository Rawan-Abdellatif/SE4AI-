const mongoose = require("mongoose");
const Admin = require("./userModel");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB using Mongoose
const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB database!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the application if there's an error connecting to MongoDB
  }
};

// Get the default connection
const db = mongoose.connection;

// Event listener to handle connection errors
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Export the function to connect to the database
module.exports = { connectToDatabase };

const getAdmin = async (req, res) => {
  const adminId = req.params.adminId;
  console.log(adminId);
  try {
    const admin = await Admin.findById(adminId);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Convert the image data to Base64 before sending it to the frontend
    const adminWithBase64Image = {
      ...admin._doc,
      Image: admin.Image.toString("base64"),
    };

    res
      .status(200)
      .json({ message: "This is the Admin", data: adminWithBase64Image });
  } catch (err) {
    console.error("Error retrieving admin:", err);
    res.status(500).json({ message: "Error retrieving admin" });
  }
};

// Export the getAdmin function
module.exports = { getAdmin };
