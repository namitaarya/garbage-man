require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 1337;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const register = require("./routes/register");
const login = require("./routes/login");
const pickup = require("./routes/pickup");
const JWT = require("./middleware/verifyJWT");

app.post("/api/register-user", register.registerUserPOST);
app.post("/api/register-collector", register.registerCollectorPOST);
app.post("/api/login-user", login.loginUser);
app.post("/api/request-pickup", pickup.pickupRequestPOST);
app.get("/api/get-destinations", pickup.getDestinations);
app.get("/api/isAuthenticated", JWT.verifyJWT, (req, res) => {
  return res.json({
    isLoggedIn: true,
    username: req.user.name,
    role: req.user.role,
    id: req.user.id,
  });
});
app.get("/api/prev-pickup/:userId", pickup.userPrevPickupGET);

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
 }

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
