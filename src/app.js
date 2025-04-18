const express = require("express");

const app = express();

// GET /user => middleware chain => response (request/route handler)

// app.use("/route", rH, [rH2, rH3], rH4, rH5);
// Router Handler functions can be wrapped in an array and passed as middleware functions
// This will work as well

app.use("/", (req, res, next) => {
  console.log("Middleware 1");
  // res.send("Hello from Middleware 1");
  next(); // Call the next middleware function in the stack
});

app.get(
  "/user",
  (req, res, next) => {
    console.log("Middleware 2");
    res.send("Hello from Middleware 2");
    next(); // Call the next middleware function in the stack
  },
  (req, res, next) => {
    console.log("Middleware 3");
    // res.send("Hello from Middleware 3");
  }
);

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});

// Express can send as many responses as we want, but it will only send the first one.
// After that, it will ignore the rest of the responses.
// So, if we send a response in the first middleware function, the rest of the middleware functions will be ignored.
// If we don't send a response in the first middleware function, the request will hang.
// So, we need to make sure that we send a response in the last middleware function. (at the end of the chain)
// In this case, we are sending a response in the last middleware function, so the request will not hang.
