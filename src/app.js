const express = require("express");

const app = express();

app.use("/", (err, req, res, next) => {
  if (err) {
    // Log the error to the console
    // Can get some alerts from here and get more information about the error
    res.status(500).send("Something went wrong!");
  }
});

app.get("/getUserData", (req, res) => {
  // try {
  // Logic to get user data from the database
  throw new Error("sfdfsdf");
  res.send("User data Sent");
  // } catch (err) {
  // res.status(500).send("Some error occurred while getting user data!");
  // }
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
