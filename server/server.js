const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 1337;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const register = require("./routes/register")

app.post('/register', register.registerPOST);


app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
