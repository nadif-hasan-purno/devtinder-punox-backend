const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    lastName: {
      type: String,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email address:" + value);
        }

        /* const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Old way of validating email
        if (!emailRegex.test(value)) {
          throw new Error("Invalid email format");
        } */
      },
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Password is not strong enough");
        }
      },
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female"].includes(value)) {
          throw new Error("Invalid gender");
        }
      },
    },
    address: {
      type: String,
    },
    photoUrl: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/8188/8188359.png",
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Invalid Photo URL:" + value);
        }
      },
    },
    bio: {
      type: String,
      default: "Default bio of the user",
    },
    skills: {
      type: [String], // Array of strings
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
