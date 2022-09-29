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

exports.getDestinations = async (req, res) => {
  const date = new Date();
  const dbData = await Pickup.find({ Date: "2022-09-29" });
  // const id = dbData.userId
  // console.log(dbData);
  var userData = [];
  dbData.map((user) => {
    User.findById(user.userId, (err, data) => {
      if (err) console.log(err);
      else {
        const userObj = {
          name: data.name,
          type: user.type,
          quantity: user.quantity,
        };
        userData.push(userObj);
      }
    });
  });
  // console.log(userData);
  res.json({ status: "ok", data: dbData, userData: userData });
};
