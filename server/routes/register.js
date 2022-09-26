const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

exports.registerPOST = async (req, res) => {
  const user = req.body;

  const username = await User.findOne({ name: user.name });
  const email = await User.findOne({ email: user.email });

  if (username || email) {
    res.json({ message: "Username or Email has already been taken" });
  } else {
    user.password = await bcrypt.hash(req.body.password, 10);

    const dbUser = new User({
      name: user.name.toLowerCase(),
      email: user.email.toLowerCase(),
      password: user.password,
      contact: user.contact,
    });

    dbUser.save();
    res.json({ message: "Success" });
  }
};
