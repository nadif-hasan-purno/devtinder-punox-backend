const express = require("express");
const { userAuth } = require("../middlewares/auth");


const requestRouter = express.Router();

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  try {
    const user = req.user;
    // Sending a connection request
    console.log("Sending connection request to user");

    res.send(user.firstName + "Connection request sent successfully");
  } catch (err) {
    res.status(400).send("Error sending connection request: " + err.message);
  }
});

module.exports = requestRouter;
