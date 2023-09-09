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

const postAdmin = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("Se4ai");
    const collection = db.collection("Admins");

    const newAdmin = {
      _id: uuidv4(),
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      specialty: req.body.specialty,
      phone: req.body.phone,
      email: req.body.email,
      image: "", // Store the image ID or other relevant data here
    };

    const imageFilePath = req.file.path;
    const imageBuffer = fs.readFileSync(imageFilePath);

    const gfsBucket = grid(db, MongoClient);
    const uploadStream = gfsBucket.createWriteStream({
      filename: path.basename(imageFilePath),
      metadata: {
        adminId: newAdmin._id,
      },
    });

    uploadStream.end(imageBuffer);

    uploadStream.on("finish", async () => {
      newAdmin.image = uploadStream.id.toString();

      const result = await collection.insertOne(newAdmin);
      res
        .status(200)
        .json({ data: result, message: "New admin with image added successfully!" });
    });

    uploadStream.on("error", (err) => {
      console.error(err);
      res.status(500).json({ message: "Error adding admin" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving admin" });
  } finally {
    client.close();
  }
};

module.exports = { postAdmin };
