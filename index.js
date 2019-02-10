const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const authRoutes = require("./routes/authRoutes");
const billingRoutes = require("./routes/billingRoutes");

const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

const app = express();
const PORT = process.env.PORT || 5000;

require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: THIRTY_DAYS,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);

app.listen(PORT);
