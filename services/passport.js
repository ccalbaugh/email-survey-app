const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const { googleClientID, googleClientSecret } = require("../config/keys");

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken, refreshToken, profile);
    }
  )
);
