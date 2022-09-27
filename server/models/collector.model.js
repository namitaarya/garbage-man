const mongoose = require("mongoose");

const Collector = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: "garbage-collector-data" }
);

const model = mongoose.model("CollectorData", Collector);

module.exports = model;
