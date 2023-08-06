"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const port = 9999;
const app = express();
const { getAdmins } = require("./getAdmins");
const { getAdmin } = require("./getAdmin");
const { updateAdmin } = require("./updateAdmin");
const { postAdmin } = require("./postAdmin");
const { deleteAdmin } = require("./deleteAdmin");
const { adminLogin } = require("./adminLogin");
// Below are methods that are included in express(). We chain them for convenience.
// --------------------------------------------------------------------------------
app
  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"));
app.use(express.json());
app.use("/photos", express.static("photos")); // Corrected the middleware usage

// Get All Of Admins
app.get("/api/admins", getAdmins);
//Get Specific Admin
app.get("/api/admins/:adminId", getAdmin);
// Update(Edit)Admin information
app.put("/api/admins/:adminId", updateAdmin);
// Add new Admin
app.post("/api/admins", postAdmin);
// Delete Admin
app.delete("/api/admins/:adminId", deleteAdmin);
// Login Admin
app.post("/api/admins/login", adminLogin);
// Node spins up our server and sets it to listen on port 9999.
app.listen(port, () => console.log(`Listening on port ${port}`));
