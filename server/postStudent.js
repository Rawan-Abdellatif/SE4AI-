"use strict";
const { MongoClient } = require("mongodb");
const fs = require("fs");
const grid = require("gridfs-stream");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const postStudent = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("Se4ai");
    const collection = db.collection("Students");

    // Validate and sanitize user input
    const { username, password, name, University, img, website, linkedin, twitter, email } = req.body;
    if (!username || !password || !name || !University || !img) {
      throw new Error("Required fields are missing.");
    }

    const newStudent = {
      _id: uuidv4(),
      username,
      password,
      name,
      University,
      img,
      website,
      linkedin,
      twitter,
      email,
      image: "", // Store the image ID or other relevant data here
    };

    const imageFilePath = req.file.path;
    const imageBuffer = fs.readFileSync(imageFilePath);

    const gfsBucket = grid(db, MongoClient);
    const uploadStream = gfsBucket.createWriteStream({
      filename: path.basename(imageFilePath),
      metadata: {
        studentId: newStudent._id,
      },
    });

    uploadStream.end(imageBuffer);

    uploadStream.on("finish", async () => {
      newStudent.image = uploadStream.id.toString();

      const result = await collection.insertOne(newStudent);
      // Return the newly created student object
      res.status(200).json({ data: newStudent, message: "New student with image added successfully!" });
    });

    uploadStream.on("error", (err) => {
      console.error(err);
      res.status(500).json({ message: "Error uploading image" });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding student" });
  } finally {
    client.close();
  }
};

module.exports = { postStudent };
