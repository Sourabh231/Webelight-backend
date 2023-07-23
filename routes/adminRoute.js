const express = require('express');
const {getAlladminuser,adminregisterController,adminloginController} = require('../controllers/adminController');

const router = express.Router();


//GET all user of admin
router.get('/adminalluser',getAlladminuser);

//Admin CREATE user || POST
router.post('/adminregister',adminregisterController);


//Login user || POST
router.post('/adminloginController',adminloginController);

module.exports = router;