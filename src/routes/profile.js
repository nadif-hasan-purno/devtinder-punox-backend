const express = require("express");
const { userAuth } = require("../middlewares/auth");


const profileRouter = express.Router();

// API - get user profile
profileRouter.get("/profile", userAuth, async (req, res) => {
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

module.exports = profileRouter;
