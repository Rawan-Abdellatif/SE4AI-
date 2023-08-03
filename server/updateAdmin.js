const mongoose = require("mongoose");
const Admin = require("./userModel");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB using Mongoose
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const updateAdmin = async (req, res) => {
  const adminId = req.params.adminId;
  const updateData = req.body;

  try {
    // Check if the admin with the given ID exists
    const admin = await Admin.findById(adminId);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Check if the new username or name is available
    if (
      updateData.username &&
      (await Admin.exists({ username: updateData.username }))
    ) {
      return res.status(400).json({ message: "Username already exists" });
    }

    if (updateData.Name && (await Admin.exists({ Name: updateData.Name }))) {
      return res.status(400).json({ message: "Name already exists" });
    }

    // Update the admin in the 'Admins' collection based on the adminId
    const result = await Admin.updateOne(
      { _id: adminId },
      { $set: updateData }
    );

    // Check if the update was successful and any changes were made
    if (result.nModified === 0) {
      return res.status(200).json({ message: "No changes made to admin data" });
    }

    res.status(200).json({ message: "Admin updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating Admin" });
  }
};

module.exports = { updateAdmin };
