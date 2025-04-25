const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      index: true,
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
      enum: {
        values: ["male", "female"],
        message: `{VALUE} is not valid gender type`,
      },
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

userSchema.methods.getJWT = async function () {
  const user = this; // "this" keyword only works with normal functions, not arrow functions
  const token = await jwt.sign({ _id: user._id }, "DEV@RANDO#88#@RANDOM#KEY", {
    expiresIn: "7d",
  });

  return token;
};

userSchema.methods.validatePassword = async function (passwordInputByUser) {
  const user = this;
  const passwordHash = user.password;

  const isPasswordValid = await bcrypt.compare(
    passwordInputByUser,
    passwordHash
  );
  return isPasswordValid;
};

module.exports = mongoose.model("User", userSchema);
