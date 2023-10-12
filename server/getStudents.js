"use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getStudents = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("se4ai");
    const students = await db.collection("Students").find().toArray();
    res.status(200).json({ data: students });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving Students " });
  } finally {
    client.close();
  }
};

module.exports = { getStudents };