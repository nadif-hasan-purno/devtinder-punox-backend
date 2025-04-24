const express = require("express");
const { userAuth } = require("../middlewares/auth");
const {
  validateEditProfileData,
  validatePasswordData,
} = require("../utils/validation");
const bcrypt = require("bcrypt");

const profileRouter = express.Router();

// API - get user profile
profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      throw new Error("User not found");
    }

    res.send(user);
  } catch (err) {
    res.status(400).send("Error logging in: " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid Edit Request");
    }

    const loggedInUser = req.user;

    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

    await loggedInUser.save();

    res.json({
      message: `${loggedInUser.firstName}, your Profile updated successfully`,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(400).send("Error editing profile: " + err.message);
  }
});

// API - /profile/edit/password
profileRouter.patch("/profile/edit/password", userAuth, async (req, res) => {
  try {
    if (!validatePasswordData(req)) {
      throw new Error("Invalid Password Request");
    }

    const loggedInUser = req.user;

    // Encrypt the password
    const passwordHash = await bcrypt.hashSync(req.body.newPassword, 10);
    loggedInUser.password = passwordHash;

    await loggedInUser.save();

    res.json({
      message: `${loggedInUser.firstName}, your Password updated successfully`,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(400).send("Error updating password: " + err.message);
  }
});

module.exports = profileRouter;
