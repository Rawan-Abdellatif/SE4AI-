"use strict";
const morgan = require("morgan");

// import the needed node_modules.
// const morgan = require("morgan");
const express = require("express");
const cors = require('cors'); // Make sure to require the 'cors' module
const session = require("express-session");
const { getAdmins } = require("./getAdmins.js");
const { getAdmin } = require("./getAdmin.js");
const {getStudents}=require ("./getStudents.js")
const {getStudent} = require("./getStudent.js");
// const { postStudent } = require("./postStudent.js");
// const { updateAdmin } = require("./updateAdmin");
// const { postAdmin } = require("./postAdmin.js"); 
const { deleteAdmin } = require("./deleteAdmin");
const { adminLogin } = require("./adminLogin");
const { studentLogin } = require("./StudentLogin.js");

// Below are methods that are included in express(). We chain them for convenience.


// --------------------------------------------------------------------------------
const port = 9999;
const path = require('path'); // Add this line to import the path module

const app = express();
const sessionSecret = process.env.SESSION_SECRET;

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan app.use(morgan("tiny"));
  app.use(morgan("tiny")); // This line logs requests to the console
  app.use(express.json());
  // app.use('/server', express.static(path.join(__dirname, 'team', 'photos')));
  app.use(cors());
  app.use(
    session({
      secret: sessionSecret,
      resave: false,
      saveUninitialized: true,
    })
  );
  
// Get All Of Admins
app.get("/api/admins", getAdmins);
//Get Specific Admin
app.get("/api/admins/:adminId", getAdmin);
// Update(Edit)Admin information
// app.put("/api/admins/:adminId", updateAdmin);
// Add new Admin
// app.post("/api/admins", postAdmin);
// Delete Admin
app.delete("/api/admins/:adminId", deleteAdmin);
// Login Admin
app.post("/api/admins/login", adminLogin);
//// Get All Students
app.get("/api/students", getStudents);
///////Get Specific Student 
app.get("/api/students/:studentId", getStudent);
//////// Add new Student 
// app.post("/api/students", upload.single("img"), postStudent);
app.post("/api/students/login",studentLogin)
////////////////////////
app.get("/", (req, res) => {
  res.send("Welcome to the SE4AI Server!");
});



// Node spins up our server and sets it to listen on port 9999.
app.listen(port, () => console.log(`Listening on port ${port}`));
