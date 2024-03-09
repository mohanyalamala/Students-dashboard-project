const User = require("../model/user.model");


function generateUniqueUsername() {
    // Implement your logic to generate a unique username, such as appending a timestamp or using a UUID
    const timestamp = Date.now();
    const uniqueUsername = `user_${timestamp}`;

    return uniqueUsername;
}

const postProject = async(req, res) => {
    try {
        const Projects = req.body;
        const uniqueUsername = await generateUniqueUsername();

        // Create a new instance of the User model with the form data
        const user = new User({
            title1: Projects.title1,
            textarea: Projects.textarea,
            //username: 'defaultUsername',
            username: uniqueUsername,
        });

        // Save the data to the database
        await user.save();

        await User.updateOne({ username: user.username }, { $inc: { postprojects: 1 } });
        // Send a success response
        res.json({ status: 'Success', data: user });
    } catch (error) {
        console.error('An error occurred during form submission', error);
        res.status(500).json({ status: 'Error', message: 'Internal Server Error' });
    }
};

module.exports = postProject;