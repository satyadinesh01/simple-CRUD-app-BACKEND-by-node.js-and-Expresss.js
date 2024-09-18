const express = require('express');
const product = require('../models/product.models');
const router = express.Router();
const {getProducts, getSingleProduct, createProduct, updateProduct, deleteProduct} = require('../controlllers/product.controller.js');

//find a product
router.get('/' , getProducts );

//find single product
router.get('/:id' ,getSingleProduct);

//create product
router.post('/', createProduct);

//update a product
router.put('/:id', updateProduct);

//delete a product
router.delete('/:id', deleteProduct);


module.exports = router;