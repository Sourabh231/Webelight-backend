const express = require('express');

const {getAllProducts, createProduct,updateProduct,deleteProduct,getProdctDetails} = require('../controllers/productController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - price
 *         - category
 *         - stock
 *       properties:
 *         name:
 *           type: string
 *           description: "Product name"
 *         description:
 *           type: string
 *           description: "Product description"
 *         price:
 *           type: string
 *           description: "Product price"
 *         rating:
 *           type: number
 *           description: "Product rating (default: 0)"
 *         image:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               public_id:
 *                 type: string
 *                 description: "Image public ID"
 *               url:
 *                 type: string
 *                 description: "Image URL"
 *         category:
 *           type: string
 *           description: "Product category"
 *         stock:
 *           type: number
 *           description: "Product stock (default: 1)"
 *         numberOfReviews:
 *           type: number
 *           description: "Number of product reviews (default: 0)"
 *         reviews:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: "Reviewer's name"
 *               rating:
 *                 type: number
 *                 description: "Reviewer's rating"
 *               createdAt:
 *                 type: string
 *                 description: "Review creation date"
 *         createdAt:
 *           type: string
 *           description: "Product creation date (default: current date)"
 */



/**
 * @swagger
 * /api/v1/product:
 *   get:
 *     summary: Get all products
 *     tags: [products]
 *     responses:
 *       200:
 *         description: List of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/product/new:
 *   post:
 *     summary: Create a new product
 *     tags: [products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/product/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the product to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/product/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the product to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/product/{id}:
 *   get:
 *     summary: Get product details by ID
 *     tags: [products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the product to retrieve details for
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */

// ... The rest of the code remains unchanged.


router.get('/product',getAllProducts);

router.post('/product/new',createProduct);

router.put('/product/:id',updateProduct);

router.delete('/product/:id',deleteProduct);

router.get('/product/:id',getProdctDetails);

module.exports = router;