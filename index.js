const express = require("express");
const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");

const app = express();
const PORT = process.env.PORT || 5000;

passport.use(new GoogleStrategy());

app.listen(PORT);
