const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // Use String as the type for _id
  username: { type: String, required: true },
  password: { type: String, required: true },
  Name: { type: String, required: true },
  Job: { type: String, required: true },
  University: { type: String, required: true },
  Image: { type: String, required: true },
  Website: { type: String },
  LinkedIn: { type: String },
  Twitter: { type: String },
  Email: { type: String, required: true },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
