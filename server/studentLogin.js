const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const studentLogin = async (req, res) => {
  const { username, password } = req.body;
  const client = new MongoClient(MONGO_URI,options);

  try {
    // Connect to MongoDB using MongoClient
    await client.connect();
  const db = client.db("se4ai");
    
    // Find the student with the provided username in the "Admins" collection
    const userdata = await db.collection("Students").findOne({ username,password });
console.log("userdata",userdata)
    if (userdata) {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const passwordHash = await bcrypt.hash(password, salt);
      const match = await bcrypt.compare(userdata.password, passwordHash);
      console.log("Password match:", match);

      if (match) {
        // If the credentials are correct, create a JWT token with an expiration time
        const token = jwt.sign({ username }, process.env.JWT_SECRET, {
       expiresIn: "30m", // 30 minutes session duration
        });

        return res.status(200).json({
          message: "Sign-in student successful",
          data: { token: token, studentId: userdata._id },
        });
      }
    }

    // If the credentials are incorrect or the student doesn't exist, return an error message
    return res.status(401).json({ message: "Invalid username or password" });
  } catch (error) {
    // Handle any errors that occur during the login process
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  } finally {
    // Close the connection to the database after the login process is complete
    if (client.isConnected()) {
      client.close();
    }
  }
};

module.exports = { studentLogin };
