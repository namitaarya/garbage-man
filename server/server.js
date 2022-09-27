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
const JWT = require("./middleware/verifyJWT");

app.post("/register-user", register.registerUserPOST);
app.post ('/register-collector', register.registerCollectorPOST)
app.post("/login-user", login.loginUser);
app.get("/isAuthenticated", JWT.verifyJWT, (req, res) => {
  return res.json({ isLoggedIn: true, username: req.user.name, role: req.user.role, id: req.user.id });
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
