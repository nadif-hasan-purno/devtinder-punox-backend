const adminAuth = (req, res, next) => {
  console.log("Admin middleware checking authorization...");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz"; // Replace with actual authorization logic
  if (!isAdminAuthorized) {
    return res.status(401).send("Unauthorized access");
  } else {
    next();
  } // If authorized, proceed to the next middleware
};

const userAuth = (req, res, next) => {
  console.log("User middleware checking authorization...");
  const token = "xyzxxx";
  const isAdminAuthorized = token === "xyz"; // Replace with actual authorization logic
  if (!isAdminAuthorized) {
    return res.status(401).send("Unauthorized access");
  } else {
    next();
  } // If authorized, proceed to the next middleware
};

module.exports = { adminAuth, userAuth };
