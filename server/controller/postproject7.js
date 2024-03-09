const express = require('express');
const path = require('path');
const multer = require('multer');
const User = require("../model/user.model");

function generateUniqueUsername() {
    // Implement your logic to generate a unique username, such as appending a timestamp or using a UUID
    const timestamp = Date.now();
    const uniqueUsername = `user_${timestamp}`;

    return uniqueUsername;
}

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // Upload files to the 'uploads' directory
        // cb(null, path.join(__dirname, 'uploads/'));
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        const filename = file.fieldname + '-' + uniqueSuffix + ext;
        cb(null, filename);
    }
});

const upload = multer({ storage: storage });

router.post('/postproject7', upload.single('fileInput'), async(req, res) => {
    try {
        // Access the uploaded file via req.file
        const { originalname, filename } = req.file;
        const uniqueUsername = await generateUniqueUsername();

        // Create a new instance of the User model with the file information
        const newUser = new User({
            fileInput: {
                originalname,
                filename,
                path: 'uploads/' + filename,
            },
            username: uniqueUsername,
        });

        // Save the data to the database
        await newUser.save();

        // Send a success response
        res.json({ status: 'Success', data: newUser });
    } catch (error) {
        console.error('An error occurred during /postproject7 form submission', error);
        res.status(500).json({ status: 'Error', message: 'Internal Server Error' });
    }
});

module.exports = router;