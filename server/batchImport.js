const fs = require("fs");
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;

const Admin = require("./data/Admin.json");
console.log("admins:", Admin);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);

const addAdmin = async () => {
  try {
    await client.connect();
    const db = client.db("se4ai");
    console.log("Connected to MongoDB!");

    const AdminsWithId = Admin.map((admin) => {
      const imagePath = `${__dirname}/${admin.Image}`;
      const imageBuffer = fs.readFileSync(imagePath);
      const imageBase64 = imageBuffer.toString("base64");

      return {
        ...admin,
        _id: uuidv4(),
        ImageBase64: imageBase64,
      };
    });

    const result = await db.collection("Admins").insertMany(AdminsWithId);

    console.log(`Successfully added ${result.insertedCount} Admins to MongoDB`);
  } catch (err) {
    console.log("Error:", err);
  } finally {
    await client.close();
    console.log("Disconnected from MongoDB!");
  }
};

addAdmin();
