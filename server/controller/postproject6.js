const User = require("../model/user.model");


function generateUniqueUsername() {
    // Implement your logic to generate a unique username, such as appending a timestamp or using a UUID
    const timestamp = Date.now();
    const uniqueUsername = `user_${timestamp}`;

    return uniqueUsername;
}

const postProject = async(req, res) => {
    try {
        const { skills4, type, Type } = req.body;
        const uniqueUsername = await generateUniqueUsername();

        // Validate data
        if (!skills4 || !type || !Type) {
            return res.status(400).json({ status: 'Error', message: 'Invalid data format' });
        }

        const newUser = new User({
            skills4,
            type,
            Type,
            username: uniqueUsername,

        });

        await newUser.save();

        res.json({ status: 'Success', data: newUser });
    } catch (error) {
        console.error('An error occurred during Postproject6 form submission', error);
        res.status(500).json({ status: 'Error', message: 'Internal Server Error' });
    }
}

module.exports = postProject;