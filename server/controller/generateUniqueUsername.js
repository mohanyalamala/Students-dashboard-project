// Import necessary modules
const User = require("../model/user.model");

const generateRandomUsername = async() => {
    // Simulate asynchronous logic, replace this with your actual logic
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("user123"); // Replace with your actual username generation logic
        }, 1000); // Simulating async operation
    });
};

// Function to generate a unique username
const generateUniqueUsername = async() => {
    let uniqueUsername;
    let existingUser;
    do {
        // Generate a random username (you can implement your logic here)
        uniqueUsername = generateRandomUsername();
        // Check if the username already exists in the database
        existingUser = await User.findOne({ username: uniqueUsername });
    } while (existingUser);

    return uniqueUsername;
};

module.exports = generateUniqueUsername;