const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  // Creating a new instance of the User model
  // and passing the userObject to it
  const user = new User({
    firstName: "Wasa",
    lastName: "Roacher",
    emailId: "wasa@roacher.com",
    password: "password22344",
  });

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(500).send("Error adding user: " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(7777, () => {
      console.log("Server is running on port 7777");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
