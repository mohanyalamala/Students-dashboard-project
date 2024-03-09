const User = require("../model/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

async function userSignin(req, res) {
    const { username, password } = req.body;
    User.findOne({ username: username })
        .then(user => {
            if (!user) {
                return res.status(401).json("Invalid Email id.");
            }

            bcrypt.compare(password, user.password, (err, response) => {
                if (err) {
                    console.error('Error comparing passwords:', err);
                    return res.status(500).json("An unexpected error occurred");
                }
                if (response) {
                    const token = jwt.sign({ username: user.username, role: user.role },
                        //"jwt-secret-key", { expiresIn: '1d' });
                        process.env.JWT_SECRET, { expiresIn: '1d' });
                    res.cookie('token', token, {
                        httpOnly: true,
                        sameSite: 'strict',
                    });
                    return res.json({ Status: "Success", role: user.role });
                } else {
                    return res.status(401).json("Invalid password");
                }
            });
        })
        .catch(error => {
            console.error('Error finding user:', error);
            res.status(500).json("An unexpected error occurred");
        });
}

module.exports = userSignin;