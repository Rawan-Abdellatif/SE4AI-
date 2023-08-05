const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Admin = require("./userModel");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(MONGO_URI, options);

    // Find the admin with the provided username in the "Admins" collection
    const admin = await Admin.findOne({ username });

    if (admin) {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const passwordHash = await bcrypt.hash(password, salt);
      const match = await bcrypt.compare(admin.password, passwordHash);

      if (match) {
        // If the credentials are correct, create a JWT token and return it
        const token = jwt.sign({ username }, process.env.JWT_SECRET);

        return res.status(200).json({
          message: "Sign-in successful",
          data: { token: token, adminId: admin._id },
        });
      }
    }
    // If the credentials are incorrect or the doctor doesn't exist, return an error message
    return res.status(401).json({ message: "Invalid username or password" });
  } finally {
    // Close the connection to the database
    await mongoose.connection.close();
  }
};

module.exports = { adminLogin };
