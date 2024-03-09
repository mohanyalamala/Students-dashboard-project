const User = require("../model/user.model");

const learningpath = async(req, res) => {
    try {
        const formData = req.body;

        // Create a new instance of the User model with the form data
        const newUser = new User({
            role1: formData.role1,
            role2: formData.role2,
            role3: formData.role3,
        });

        // Save the data to the database
        await newUser.save();

        // Send a success response
        res.json({ status: 'Success', data: newUser });
    } catch (error) {
        console.error('An error occurred during form submission', error);
        res.status(500).json({ status: 'Error', message: 'Internal Server Error' });
    }
}
module.exports = learningpath;