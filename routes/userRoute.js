const express = require('express');
const {registerController,getAlluser,loginController} = require('../controllers/userController');


const router = express.Router();

//GET all user
router.get('/all-user',getAlluser);

//CREATE USER || POST
router.post('/register',registerController);

//Login user || POST
router.post('/login',loginController);




module.exports = router;