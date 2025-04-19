const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
      "mongodb+srv://dopehypedpunox:D7GBkrX7j9qDyyIF@nodelearnings.ts4ptvt.mongodb.net/devTinder"
    );
};

module.exports = connectDB;

