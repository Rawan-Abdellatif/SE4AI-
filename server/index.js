"use strict";
const morgan = require("morgan");

// import the needed node_modules.
// const morgan = require("morgan");
const express = require("express");
const cors = require('cors'); // Make sure to require the 'cors' module

const { getAdmins } = require("./getAdmins.js");
const { getAdmin } = require("./getAdmin.js");
// const { updateAdmin } = require("./updateAdmin");
const { postAdmin } = require("./postAdmin.js"); // Import your route handler
// const { deleteAdmin } = require("./deleteAdmin");
// const { adminLogin } = require("./adminLogin");
// Below are methods that are included in express(). We chain them for convenience.
// --------------------------------------------------------------------------------
const port = 9999;
const app = express();

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan app.use(morgan("tiny"));
  app.use(morgan("tiny")); // This line logs requests to the console
  app.use(express.json());
  app.use("/photos", express.static("photos")); // Corrected the middleware usage
app.use(cors());

// Get All Of Admins
app.get("/api/admins", getAdmins);
//Get Specific Admin
app.get("/api/admins/:adminId", getAdmin);
// Update(Edit)Admin information
// app.put("/api/admins/:adminId", updateAdmin);
// Add new Admin
app.post("/api/admins", postAdmin);
// Delete Admin
// app.delete("/api/admins/:adminId", deleteAdmin);
// Login Admin
// app.post("/api/admins/login", adminLogin);
app.get("/", (req, res) => {
  res.send("Welcome to the SE4AI Server!");
});

// Node spins up our server and sets it to listen on port 9999.
app.listen(port, () => console.log(`Listening on port ${port}`));
