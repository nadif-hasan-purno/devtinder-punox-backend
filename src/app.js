const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.post("/user/login", (req, res, next) => {
  res.send("User login successful");
});

app.get("/user", userAuth, (req, res, next) => {
  res.send("User middleware checking authorization...");
});

app.get("/admin/getAllData", (req, res, next) => {
  res.send("All data retrieved successfully");
});

app.get("/admin/deleteUser", (req, res, next) => {
  // Logic to delete user from the database

  res.send("User deleted successfully");
});

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});

// Express can send as many responses as we want, but it will only send the first one.
// After that, it will ignore the rest of the responses.
// So, if we send a response in the first middleware function, the rest of the middleware functions will be ignored.
// If we don't send a response in the first middleware function, the request will hang.
// So, we need to make sure that we send a response in the last middleware function. (at the end of the chain)
// In this case, we are sending a response in the last middleware function, so the request will not hang.
