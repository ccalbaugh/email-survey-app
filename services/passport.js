const passport = require("passport");
const mongoose = require("mongoose");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const { googleClientID, googleClientSecret } = require("../config/keys");

const User = mongoose.model("users");

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
      } else {
        new User({ googleId: profile.id }).save();
      }
    }
  )
);
