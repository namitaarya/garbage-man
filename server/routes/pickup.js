const Pickup = require("../models/pickups.model");

exports.pickupRequestPOST = async (req, res) => {
  const pickupData = req.body;
  const d = pickupData.dateTime.split("T")[0];
  const t = pickupData.dateTime.split("T")[1];

  const dbPickup = new Pickup({
    userId: pickupData.id,
    longitude: pickupData.lng,
    latitude: pickupData.lat,k
    type: pickupData.type,
    quantity: pickupData.quantity,
    avatar: pickupData.imageurl,
    Date: d,
    Time: t,
  });
  dbPickup.save((err, response) => {
    if (err) console.log(err);
    res.json({ message: "Success", status: "ok" });
  });
};
