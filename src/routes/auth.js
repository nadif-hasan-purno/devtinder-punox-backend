const express = require("express");
const { validateSignUpData } = require("../utils/validation");
const User = require("../models/user");
const authRouter = express.Router();
const bcrypt = require("bcrypt");

authRouter.post("/signup", async (req, res) => {
  try {
    // Validation of data
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    // Encrypt the password
    const passwordHash = await bcrypt.hashSync(password, 10);
    // req.body.password = passwordHash;

    // Creating a new instance of the User model
    // and passing the userObject to it
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    const savedUser = await user.save();
    const token = await savedUser.getJWT();

    // Add the token to cookie and send the response back to the user
    res.cookie("token", token, {
      expires: new Date(Date.now() + 8 * 3600000),
    });

    res.json({ message: "User added successfully", data: savedUser });
  } catch (err) {
    res.status(400).send("Error adding user: " + err.message);
  }
});

// API - Login user
authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
      const token = await user.getJWT();

      // Add the token to cookie and send the response back to the user
      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });

      res.send(user);
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res.status(400).send("Error logging in: " + err.message);
  }
});

// API - Logout user
authRouter.post("/logout", async (req, res) => {
  try {
    // Clear the cookie
    res.cookie("token", null, {
      expires: new Date(Date.now()),
    });

    res.send("Logout successful");
  } catch (err) {
    res.status(400).send("Error logging out: " + err.message);
  }
});

module.exports = authRouter;
