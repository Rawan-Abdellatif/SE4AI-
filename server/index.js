"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const port = 9999;
const app = express();
const { getAdmins } = require("./getAdmins");
const { getAdmin } = require("./getAdmin");
// Below are methods that are included in express(). We chain them for convenience.
// --------------------------------------------------------------------------------
app
  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"));
app.use(express.json());

// Get All Of Admins
app.get("/api/admins", getAdmins);
//Get Specific Admin
app.get("/api/admins/:adminId", getAdmin);
// Node spins up our server and sets it to listen on port 8888.
app.listen(port, () => console.log(`Listening on port $(port)`));
