const express = require("express");
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const LocalStrategy = require("passport-local").Strategy;
const User = require("../model/user.model");


const app = express(); // Create an Express app instance

// Local strategy
passport.use(new LocalStrategy(
    function(username, password, done) {
        // Replace the following logic with your actual authentication logic
        if (username === 'user' && password === 'password') {
            return done(null, { id: 1, username: 'user' });
        } else {
            return done(null, false, { message: 'Invalid username or password' });
        }
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    // Replace this with your logic to fetch a user from the database by ID
    const user = { id: 1, username: 'user' };
    done(null, user);
});

// Passport Local Strategy using Mongoose User model
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Google OAuth2 strategy
passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "/auth/google/server",
        scope: ["profile", "email"]
    },
    async(accessToken, refreshToken, profile, done) => {
        console.log("profile", profile)
        try {
            let user = await User.findOne({ googleId: profile.id });

            if (!user) {
                const username = profile.emails[0].value;

                // Check if the username already exists
                const existingUser = await User.findOne({ username });

                if (existingUser) {
                    return done(null, existingUser);
                }
                user = new User({
                    googleId: profile.id,
                    displayName: profile.displayName,
                    username: username,
                    image: profile.photos[0].value
                });

                await user.save();
            }

            return done(null, user)
        } catch (error) {
            return done(error, null)
        }
    }
));

app.get("/auth/google",
    passport.authenticate('google', { scope: ["profile", "email"] }));

app.get("/auth/google/server", passport.authenticate("google", {
    successRedirect: "http://localhost:3000/dashboard",
    failureRedirect: "http://localhost:3000/login",
    failureFlash: true,
}));

// Export the configured passport object
module.exports = app;