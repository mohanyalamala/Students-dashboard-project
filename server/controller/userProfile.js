const User = require("../model/user.model");

const userProfile = async(req, res) => {
    try {
        const username = req.user.username; // Assuming the username is stored in the user object

        const user = await User.aggregate([
            { $match: { username: username } }, // Match the user by username
            {
                $project: {
                    _id: 0,
                    postprojectsCount: { $size: { $ifNull: ["$postprojects", []] } }
                }
            }
        ]);

        if (user.length > 0) {
            const postprojectsCount = user[0].postprojectsCount;
            res.json({ status: 'Success', postprojectsCount });
        } else {
            res.status(404).json({ status: 'Error', message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ status: 'Error', message: 'Internal Server Error' });
    }
};

module.exports = userProfile;







// const User = require('../model/user.model');

// const userProfile = async(req, res) => {
//     try {
//         const { username } = req;
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(404).json({ error: 'User not found' });
//         }
//         res.json({ status: 'Success', user: { username: user.username, displayName: user.displayName } });
//     } catch (error) {
//         console.error('Error fetching user profile:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// module.exports = userProfile;