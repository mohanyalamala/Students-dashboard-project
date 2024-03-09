const updateUserProfile = async(req, res) => {
    try {
        const { profilePicture } = req.body;
        const updatedUser = await userModel.findByIdAndUpdate(
            req.userId, { $set: { profilePic: profilePicture } }, { new: true }
        );
        res.status(200).json({
            success: true,
            message: "Profile picture updated successfully",
            data: updatedUser,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};