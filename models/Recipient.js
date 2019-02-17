const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;
