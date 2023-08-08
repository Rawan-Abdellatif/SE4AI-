const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  Name: { type: String, required: true },
  Job: { type: String, required: true },
  University: { type: String, required: true },
  Image: { type: Buffer, required: true },
  Website: { type: String },
  LinkedIn: { type: String },
  Twitter: { type: String },
  Email: { type: String, required: true },
});

const memberSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  Name: { type: String, required: true },
  University: { type: String, required: true },
  Image: { type: Buffer, required: true },
  Website: { type: String },
  LinkedIn: { type: String },
  Twitter: { type: String },
  Email: { type: String, required: true },
});

const Admin = mongoose.model("Admin", adminSchema);
const Member = mongoose.model("Member", memberSchema);

module.exports = { Admin, Member };
