const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Salam from the Dashboard!");
});

app.use("/hello", (req, res) => {
  res.send("Areeeeeeey Hellooooooooo!");
});

app.use("/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
