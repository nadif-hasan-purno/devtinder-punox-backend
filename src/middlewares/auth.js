const jwt = require("jsonwebtoken");
const User = require("../models/user");

/* const adminAuth = (req, res, next) => {
  console.log("Admin middleware checking authorization...");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz"; // Replace with actual authorization logic
  if (!isAdminAuthorized) {
    return res.status(401).send("Unauthorized access");
  } else {
    next();
  } // If authorized, proceed to the next middleware
}; */

const userAuth = async (req, res, next) => {
  // Read the token from the request cookies

  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).send("Please Login friend!");
    }

    const decodedObj = await jwt.verify(token, "DEV@RANDO#88#@RANDOM#KEY");

    const { _id } = decodedObj;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }

    req.user = user; // Attach the user object to the request for later use
    next();
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }

  // Find the user

  /* 
  console.log("User middleware checking authorization...");
  const token = "xyzxxx";
  const isAdminAuthorized = token === "xyz"; // Replace with actual authorization logic
  if (!isAdminAuthorized) {
    return res.status(401).send("Unauthorized access");
  } else {
    next();
  } // If authorized, proceed to the next middleware */
};

module.exports = { userAuth };
