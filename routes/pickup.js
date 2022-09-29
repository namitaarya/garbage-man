const Pickup = require("../models/pickups.model");
const User = require("../models/user.model");

exports.pickupRequestPOST = async (req, res) => {
  const pickupData = req.body;
  const d = pickupData.dateTime.split("T")[0];
  const t = pickupData.dateTime.split("T")[1];

  const dbPickup = new Pickup({
    userId: pickupData.id,
    longitude: pickupData.lng,
    latitude: pickupData.lat,
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

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

exports.getDestinations = async (req, res) => {
  const date = new Date();
  const dbData = await Pickup.find({ Date: "2022-09-29" });
  const result = await Promise.all(
    dbData.map(async (user) => {
      await delay(10);
      const u = await User.findById(user.userId);
      const userObj = {
        name: u.name,
        type: user.type,
        quantity: user.quantity,
      };
      return userObj;
    })
  );

  res.json({ status: "ok", data: dbData, userData: result });
};

exports.userPrevPickupGET = async (req, res) => {
  const userId = req.params.userId
  const prevPick = await Pickup.find({userId: userId})
  res.json({ status: "ok", prev: prevPick });
};
