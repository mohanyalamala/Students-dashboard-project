const User = require("../model/user.model");

function generateUniqueUsername() {
    // Implement your logic to generate a unique username, such as appending a timestamp or using a UUID
    const timestamp = Date.now();
    const uniqueUsername = `user_${timestamp}`;

    return uniqueUsername;
}

const postProject = async(req, res) => {
    try {
        const Projects3 = req.body;
        const uniqueUsername = await generateUniqueUsername();

        const newUser = new User({
            skills1: Projects3.skills1,
            username: uniqueUsername,
        });

        // Save the data to the database
        await newUser.save();

        // Send a success response
        res.json({ status: 'Success', data: newUser });
    } catch (error) {
        console.error('An error occurred during form submission', error);
        res.status(500).json({ status: 'Error', message: 'Internal Server Error', error: error.message });
    }
}

module.exports = postProject;