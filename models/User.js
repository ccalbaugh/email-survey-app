const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  credits: { type: Number, default: 0 },
  googleId: String
});

model("users", userSchema);
