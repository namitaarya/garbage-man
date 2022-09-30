const jwt = require("jsonwebtoken");

exports.verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.json({
          isLoggedIn: false,
          message: "Failed to Authenticate",
        });
      }
      req.user = {};
      req.user.id = decoded.id;
      req.user.name = decoded.name;
      req.user.role = decoded.role;
      next();
    });
  } else {
    res.json({ message: "Incorrect Token Given", isLoggedIn: false });
  }
};
