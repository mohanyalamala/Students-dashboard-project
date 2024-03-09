const mongoose = require("mongoose")
const findOrCreate = require("mongoose-findorcreate");
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    //username: String,
    username: { type: String, unique: true },
    name: String,
    password: String,
    googleId: String,
    displayName: String,
    //email: String,
    image: String,
    secret: String,
    // postprojects: {
    //     type: String,
    //     default: "visitor",
    // },
    postprojects: { type: Number },
    userdata: String,
    title1: String,
    textarea: String,
    skills: String,
    skills1: String,
    skills2: String,
    skills3: String,
    skills4: String,
    type: String,
    Type: String,
    fileInput: {
        path: String, // Store the file path here
        originalname: String,
    },
    role: {
        type: String,
        default: "visitor",
    },
    userdata: String,
    role1: String, // Add this line
    role2: String, // Add this line
    role3: String, // Add this line
}, { timestamps: true });

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("user", userSchema);
userSchema.plugin(findOrCreate);
module.exports = User;