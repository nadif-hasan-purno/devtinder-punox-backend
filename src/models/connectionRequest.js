const mongoose = require("mongoose");

const connectionRequestSchema = new mongoose.Schema({
  fromUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // reference to the user collection
    required: true,
  },
  toUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ["ignored", "interested", "accepted", "rejected"],
      message: `{VALUE} is not a valid status type`,
    },
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// ConnectionRequest.find({fromUserId: 394025ksdjSD9dsd0sdf90090smd})

connectionRequestSchema.index({ fromUserId: 1, toUserId: 1 })

connectionRequestSchema.pre("save", async function (next) {
  const connectionRequest = this;
  // Check if the fromUserId and toUserId are the same
  if (connectionRequest.fromUserId.equals( connectionRequest.toUserId)) {
    throw new Error("Cannot send a connection request to yourself");
  }
  next();
})

const connectionRequestModel = new mongoose.model(
  "ConnectionRequest",
  connectionRequestSchema
);

module.exports = connectionRequestModel;
