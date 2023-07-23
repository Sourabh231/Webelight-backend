const express = require('express');

const {getAllProducts, createProduct,updateProduct,deleteProduct,getProdctDetails} = require('../controllers/productController');

const router = express.Router();

router.get('/product',getAllProducts);

router.post('/product/new',createProduct);

router.put('/product/:id',updateProduct);

router.delete('/product/:id',deleteProduct);

router.get('/product/:id',getProdctDetails);

module.exports = router;