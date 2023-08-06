const fs = require("fs");

// Function to read an image file and convert it to a buffer
function imageToBuffer(filePath) {
  try {
    const image = fs.readFileSync(filePath);
    return Buffer.from(image);
  } catch (error) {
    console.error("Error reading image:", error);
    return null;
  }
}

const userData = [
  {
    username: "DrEmadShehab", // Unique username for the admin
    password: "Dr.Emad Shehab",
    Name: "Dr.Emad Shehab",
    Job: "Director",
    University: "Concordia University",
    Image: imageToBuffer("./photos/Dr-Emad-Shihab.jpg"),
    Website: "https://das.encs.concordia.ca/members/emad-shihab/",
    LinkedIn: "https://www.linkedin.com/in/emad-shihab-8099523/",
    Twitter: "https://twitter.com/EmadShihab",
    Email: "emad.shihab@concordia.ca",
  },
  {
    username: "LoriAkiyama", // Unique username for the admin
    password: "Lori Akiyama",
    Name: "Lori Akiyama",
    Job: "Program Coordinator",
    University: "Concordia University",
    Image: imageToBuffer("./photos/Lori-Akiyama.jpg"),
    LinkedIn: "https://www.linkedin.com/in/lori-akiyama/",
    Email: "lori.akiyama@concordia.ca",
  },
];

module.exports = userData;
