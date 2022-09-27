const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Collector = require("../models/collector.model");

exports.loginUser = async (req, res) => {
  let role = "citizen";
  let user = await User.findOne({
    email: req.body.email.toLowerCase(),
  });

  if (!user) {
    role = "collector";
    user = await Collector.findOne({
      email: req.body.email.toLowerCase(),
    });
  }

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
        role: role
      },
      process.env.SECRET,
      {
        expiresIn: 86400,
      }
    );
    console.log(token);
    return res.json({ status: "ok", user: token, role: role });
  } else {
    return res.json({ status: "error", user: false });
  }
};
