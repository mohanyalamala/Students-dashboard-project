const User = require("../model/user.model");


function generateUniqueUsername() {
    // Implement your logic to generate a unique username, such as appending a timestamp or using a UUID
    const timestamp = Date.now();
    const uniqueUsername = `user_${timestamp}`;

    return uniqueUsername;
}

const postProject = async(req, res) => {
    try {
        const Projects2 = req.body;
        const uniqueUsername = await generateUniqueUsername();

        const newUser = new User({
            skills: Projects2.skills,
            username: uniqueUsername, // Use the resolved value here
        });

        await newUser.save();
        res.json({ status: 'Success', data: newUser });
    } catch (error) {
        console.error('An error occurred during form submission', error);
        res.status(500).json({ status: 'Error', message: 'Internal Server Error' });
    }
};

module.exports = postProject;








// const User = require("../model/user.model");

// const postProject = async(req, res) => {
//     try {
//         const Projects2 = req.body;
//         const newUser = new User({
//             skills: Projects2.skills,
//             username: 'defaultUsername',
//         });
//         await newUser.save();
//         res.json({ status: 'Success', data: newUser });
//     } catch (error) {
//         console.error('An error occurred during form submission', error);
//         res.status(500).json({ status: 'Error', message: 'Internal Server Error' });
//     }
// }

// module.exports = postProject;