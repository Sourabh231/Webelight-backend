const productModel = require('../model/productModel');
const ApiFeature = require('../utils/apiFeature');
const ErrorHandler = require('../utils/errorHandler');


//Create Product || POST ----> Admin
exports.createProduct = async (req, res, next) => {

    try {
        const product = await productModel.create(req.body);

        res.status(200).send({
            sucess: true,
            product
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            sucess: false,
            message: 'Faliled to create product'
        });

    }
}


// Get All Product
exports.getAllProducts = async (req, res) => {
    try {

        const resultPerPage = 5;
        
        const apiFeature =  new ApiFeature(productModel.find(),req.query).
        search().filter().pagination(resultPerPage);
        
        const allProducts = await apiFeature.query;

        res.status(200).send({
            sucess: true,
            products: allProducts,
            productCount: allProducts.length
        });
    } catch (err) {
        res.status(500).send({
            sucess: false,
            message: 'Failed to retrieve products'
        });
    }
}

// Update a product

exports.updateProduct = async (req, res) => {
    let product = await productModel.findById(req.params.id);

    if (!product) {
        return res.status(500).send({
            sucess: false,
            message: 'product not found'
        })
    }

    product = await productModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).send({
        sucess: true,
        message: 'Product update is successful'
    })
}

exports.deleteProduct = async (req, res) => {
    try {
        let product = await productModel.findById(req.params.id);
        if (!product) {
            return res.status(500).send({
                sucess: false,
                message: 'Product not found'
            })
        }

        await productModel.deleteOne({ _id: req.params.id });

        res.status(200).send({
            sucess: true,
            message: 'Product Delete Sucessfully'
        })

    } catch (err) {
        console.log(err);
        res.status(200).send
    }
}

//Get Product Details
exports.getProdctDetails = async (req, res,next) => {
    try {

        const product = await productModel.findById(req.params.id);
         
        if(!product){
            return res.status(404).send({
                sucess:false,
                messagee:'Product not found'
            })
        }

        res.status(200).send({
            sucess:true,
            message:'Product get successfull',
            product
        })



        // if (!product) {
        //     return next(new ErrorHandler("Product Not Found", 404));
        // }

        // res.status(200).send({
        //     success: true,
        //     product
        // });
    } catch (err) {
        // Handle other errors
        //return next(new ErrorHandler("Internal Server Error",500)); // Pass the error to errorMiddleware
    }
}