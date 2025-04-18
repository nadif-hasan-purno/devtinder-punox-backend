const express = require("express");

const app = express();

// app.use("/route", rH, [rH2, rH3], rH4, rH5);
// Router Handler functions can be wrapped in an array and passed as middleware functions
// This will work as well

app.use(
  "/user",
  (req, res, next) => {
    // This is a Router Handler
    console.log("Handling the User Route Handler 1");
    // Call the next middleware function in the stack
    next();

    // if we don't send a response, the request will hang
    // res.send("User Route Handler 1");
  },
  (req, res, next) => {
    // This is a Router Handler
    console.log("Handling the User Route Handler 2");
    next();
    // Call the next middleware function in the stack
    // if we don't send a response, the request will hang
    // res.send("User Route Handler 2");
  },
  (req, res, next) => {
    // This is a Router Handler
    console.log("Handling the User Route Handler 3");
    // if we don't send a response, the request will hang
    // res.send("User Route Handler 3");
    next();
  },
  (req, res, next) => {
    // This is a Router Handler
    console.log("Handling the User Route Handler 4");
    // if we don't send a response, the request will hang
    // res.send("User Route Handler 4");
    next();
  },
  (req, res, next) => {
    // This is a Router Handler
    console.log("Handling the User Route Handler 5");
    // if we don't send a response, the request will hang
    res.send("User Route Handler 5");
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
