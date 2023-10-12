// get Student
"use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getStudent = async (req, res) => {
  const studentId = req.params.studentId;
  const client = new MongoClient(MONGO_URI, options);
  console.log(studentId);
  try {
    await client.connect();
    const db = client.db("se4ai");
    const Student = await db.collection("Students").findOne({ _id: studentId });
    if (!Student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "This is the Student", data: Student });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving student" });
  } finally {
    client.close();
  }
};

module.exports = { getStudent };
