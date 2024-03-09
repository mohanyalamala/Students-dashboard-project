const dotenv = require('dotenv')
const express = require("express");
const bodyParser = require('body-parser');
//const mongoose = require("mongoose");
dotenv.config()
const session = require('express-session');
const passport = require("passport");
const cors = require('cors');
const cookieParser = require('cookie-parser');
//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
const path = require('path');
const connectDB = require('./config/db');
const router = require('./routes/index');



const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(cookieParser())

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'YourSecretKey',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
    }
}));

//app.use(sessionMiddleware);
app.use(express.json({ limit: '10mb' }));
app.use(passport.initialize());
app.use(passport.session());

connectDB();

// app.get('', verifyUser, (req, res) => {
//     res.json({ message: 'Admin route accessed successfully' });
// });

app.get('/', (req, res) => {
    return res.send('Hello world')
});

// app.get('/dashboard', verifyUser, (req, res) => {
//     res.json("Success")
// })


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((user, done) => {
    done(null, user);
})


// app.get('/dashboard', verifyUser, (req, res) => {
//     // Assuming the user information is stored in req.user
//     const { username } = req.user;
//     res.json({ message: 'Success', username });
// });

app.use("/api", (req, res, next) => {
    console.log("Incoming request to /api:", req.method, req.url);
    next();
});
/*app.use("/api", User)
app.use("/api/user", varifyUser, User);*/
app.use("/api", router)


app.get("/logout", (req, res) => {
    req.logout();
    res.clearCookie('token'); // Clear the token cookie
    res.json({ success: true, message: "Logged out successfully" });
});

// 3: step heroku
if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));