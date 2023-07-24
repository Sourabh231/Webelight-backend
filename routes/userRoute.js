const express = require('express');
const { registerController, getAlluser, loginController } = require('../controllers/userController');


const router = express.Router();

//routes
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - cpassword
 *       properties:
 *         id:
 *           type: string
 *           description: The Auto-generated id of user collection
 *         name:
 *           type: string
 *           description: user name
 *         email:
 *           type: string
 *           description: user email address
 *         password:
 *           type: string
 *           description: user password 
 *         cpassword:
 *           type: string
 *           description: user cpassword
 */


/**
 * @swagger
 * tags:
 *   name: auth
 *   description: authentication apis
 */

/**
 * @swagger
 * /api/v1/user/register:
 *   post:
 *     summary: register new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: user created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: internal server error
 */




/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: user email address
 *         password:
 *           type: string
 *           description: user password 
 */


/**
 * @swagger
 * /api/v1/user/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Login successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   description: Access token for authentication
 *       401:
 *         description: Unauthorized - invalid credentials
 *       500:
 *         description: Internal server error
 */



//GET all user
router.get('/all-user', getAlluser);

//CREATE USER || POST
router.post('/register', registerController);

//Login user || POST
router.post('/login', loginController);




module.exports = router;