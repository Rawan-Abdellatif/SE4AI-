// const mongoose = require("mongoose");
// const Admin = require("./userModel");
// require("dotenv").config();

// const MONGO_URI = process.env.MONGO_URI;

// // Connect to MongoDB using Mongoose
// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const deleteAdmin = async (req, res) => {
//   const adminId = req.params.adminId;

//   try {
//     // Check if the admin with the given ID exists
//     const admin = await Admin.findById(adminId);

//     if (!admin) {
//       return res.status(404).json({ message: "Admin not found" });
//     }

//     // Delete the admin from the 'Admins' collection based on the adminId
//     const result = await Admin.deleteOne({ _id: adminId });

//     // Check if the delete was successful
//     if (result.deletedCount === 1) {
//       res.status(200).json({ message: "Admin deleted successfully" });
//     } else {
//       res.status(500).json({ message: "Error deleting Admin" });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error deleting Admin" });
//   }
// };

// module.exports = { deleteAdmin };
