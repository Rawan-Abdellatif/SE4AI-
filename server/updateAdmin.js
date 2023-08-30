// const mongoose = require("mongoose");
// const Admin = require("./userModel");
// require("dotenv").config();

// const MONGO_URI = process.env.MONGO_URI;

// // Connect to MongoDB using Mongoose
// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const updateAdmin = async (req, res) => {
//   const adminId = req.params.adminId;
//   const updateData = req.body;

//   try {
//     // Check if the admin with the given ID exists
//     const admin = await Admin.findById(adminId);

//     if (!admin) {
//       return res.status(404).json({ message: "Admin not found" });
//     }

//     // Handle image update separately
//     if (req.file) {
//       // Assuming you are using multer or a similar library to handle file uploads
//       // Convert the image data to a Buffer and save it to the admin document
//       updateData.Image = req.file.buffer;
//     }

//     // Check if the new username is valid and not already taken
//     if (updateData.username) {
//       if (updateData.username === admin.username) {
//         // Username is the same, continue with the update
//       } else {
//         // Check if the new username is available
//         const existingAdmin = await Admin.findOne({
//           username: updateData.username,
//         });

//         if (existingAdmin && existingAdmin._id.toString() !== adminId) {
//           return res
//             .status(400)
//             .json({ message: "Username already taken. Try another username." });
//         }
//       }
//     }

//     // Check if the new password is the same as the existing password
//     const isPasswordChanged =
//       updateData.password && updateData.password !== admin.password;

//     // Update the admin in the 'Admins' collection based on the adminId
//     const result = await Admin.updateOne(
//       { _id: adminId },
//       { $set: updateData }
//     );

//     // Check if the update was successful
//     if (result.nModified >= 0 || isPasswordChanged) {
//       console.log("New Name:", updateData.name);
//       console.log("nModified:", result.nModified);
//       console.log("Update Data:", updateData);

//       return res.status(200).json({ message: "Admin updated successfully" });
//     }

//     res.status(200).json({ message: "No changes made to admin data" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error updating Admin" });
//   }
// };

// module.exports = { updateAdmin };
