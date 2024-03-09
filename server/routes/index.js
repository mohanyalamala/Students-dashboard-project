const express = require('express');
const router = express.Router();
const path = require('path');

const userSignup = require('../controller/userSignUp');
const userLogin = require('../controller/userLogin');
const GoogleLogin = require("../controller/googleLogin");
const postProject1Controller = require('../controller/postproject1');
const postProject2Controller = require('../controller/postproject2');
const postProject3Controller = require('../controller/postproject3');
const postProject4Controller = require('../controller/postproject4');
const postProject5Controller = require('../controller/postproject5');
const postProject6Controller = require('../controller/postproject6');
const postProject7Controller = require('../controller/postproject7');
const learningpathController = require('../controller/learningpath');
const userprofile = require('../controller/userProfile');
const verifyUser = require('../middlewares/verifyToken');


//router
router.use("/", GoogleLogin);


router.post('/signup', userSignup);

router.post('/login', userLogin);

/*app.get("/logout", (req, res) => {
    req.logout();
    res.json({ success: true, message: "Logged out successfully" });
});*/

router.post('/postproject1', postProject1Controller);
router.post('/postproject2', postProject2Controller);
router.post('/postproject3', postProject3Controller);
router.post('/postproject4', postProject4Controller);
router.post('/postproject5', postProject5Controller);
router.post('/postproject6', postProject6Controller);
router.use('/uploads', express.static(path.join(__dirname, 'uploads')));
router.post('/postproject7', postProject7Controller);
router.post('/learningpath/started', learningpathController);
router.post('/userprofile', verifyUser, userprofile);



module.exports = router