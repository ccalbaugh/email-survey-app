const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const authRoutes = require("./routes/authRoutes");

require("./services/passport");
require("./models/User");

mongoose.connect(keys.mongoURI);

const app = express();
const PORT = process.env.PORT || 5000;

authRoutes(app);

app.listen(PORT);
