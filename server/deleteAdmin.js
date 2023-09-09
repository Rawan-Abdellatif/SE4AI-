"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const client = new MongoClient(MONGO_URI);




const deleteAdmin = async (req, res) => {
  const adminId = req.params.adminId;

  try {
    await client.connect();
    const db = client.db("se4ai");
    const collection = db.collection("Admins");

    // Check if the admin with the given ID exists
    const admin = await collection.findOne({ _id: adminId });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Delete the admin from the 'Admins' collection based on the adminId
    const result = await collection.deleteOne({ _id: adminId });

    // Check if the delete was successful
    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Admin deleted successfully" });
    } else {
      res.status(500).json({ message: "Error deleting Admin" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting Admin" });
  } finally {
    client.close();
  }
};

module.exports = { deleteAdmin };
