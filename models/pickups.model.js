const mongoose = require("mongoose");

const Pickup = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    longitude: { type: String, required: true },
    latitude: { type: String, required: true },
    Date: { type: String, required: true },
    Time: { type: String, required: true },
    type: { type: String, required: true },
    quantity: { type: Number, required: true },
    avatar: {type: String, required: true}
  },
  {
    collection: "pickup-data",
  }
);

const model = mongoose.model('PickupData', Pickup)

module.exports = model
