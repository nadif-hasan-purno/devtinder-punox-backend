const express = require("express");

const app = express();

app.use("/user", (req, res, next) => {
  res.send("Blac Blauk BLasnk!");
});

// This will only handle GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "John", lastName: "Doe" });
});

// This will only handle POST call to /user
app.post("/user", (req, res) => {
  res.send("User created successfully!");
});

// This will only handle DELETE call to /user
app.delete("/user", (req, res) => {
  res.send("User deleted successfully!");
});

// This will match all the HTTP method API calls to/test
app.use("/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
