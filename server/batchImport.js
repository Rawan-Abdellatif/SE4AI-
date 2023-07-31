const admins = require("./data/Admin.json");
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// creates a new client
const client = new MongoClient(MONGO_URI, options);

// Add Admin
const addAdmin = async () => {
  try {
    // connect to the client
    await client.connect();

    // connect to the database
    const db = client.db("se4ai");
    console.log("Connected to MongoDB!");

    // generate a unique ID for the Admins and add it to the document
    const AdminsWithId = admins.map((admin) => ({
      ...admin,
      _id: uuidv4(),
    }));

    // insert the Admins into the 'Admins' collection
    const result = await db.collection("Admins").insertMany(AdminsWithId);

    // On success, send a response
    console.log(`Successfully added ${result} Admins to MongoDB`);
  } catch (err) {
    // on failure/error, send an error response
    console.log("Error:", err);
    //res.status(500).json({ status: 500, data: req.body, message: err.message });
  } finally {
    // close the connection to the database server
    await client.close();
    console.log("Disconnected from MongoDB!");
  }
};
addAdmin();
// module.exports = { addAdmin };
