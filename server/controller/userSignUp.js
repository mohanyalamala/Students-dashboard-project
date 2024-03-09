const User = require("../model/user.model");
const bcrypt = require('bcryptjs');

async function userSignUp(req, res) {
    try {
        const { name, username, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username is already registered. Please choose another Username.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const newUser = await User.create({ name, username, password: hashedPassword });

        res.json({ status: 'Success', user: newUser });
        /*} catch (error) {
            console.error('Error during signup:', error);
            res.status(500).json({ error: 'Internal server error' });
        }*/
    } catch (error) {
        if (error.name === 'MongoServerError' && error.code === 11000) {
            // Duplicate key error (username already exists)
            return res.status(400).json({ error: 'Username is already registered. Please choose another Username.' });
        }

        console.error('Error during signup:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = userSignUp;