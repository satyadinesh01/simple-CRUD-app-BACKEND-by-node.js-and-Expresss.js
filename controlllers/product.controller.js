const Product = require('../models/product.models.js');


//get all the products
const getProducts = async (req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({Message: error.Message});

    }
}


// get single product
const getSingleProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({Message: error.Message});

    }
}


//create a product or products
const createProduct= async(req,res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({Message: error.Message});
    }
}


//update a product
const updateProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id , req.body);

        if(!product){
            res.status(404).json({Message: " product not found"});
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json({updatedProduct})

    } catch (error) {
        res.status(500).json({Message: error.Message});

    }
}



//delete a product
const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteProduct = await Product.findByIdAndDelete(id);

        if(!deleteProduct){
            res.status(404).json({Message: " product not found"});
        }
        res.status(200).json({message: " Product deleted successfully"});

    } catch (error) {
        res.status(500).json({Message: error.Message});

    }
}

module.exports = {
    getProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
}