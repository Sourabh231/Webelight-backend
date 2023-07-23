const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Product Name'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please Enter Product Description']
    },
    price: {
        type: String,
        required: [true, 'Please Enter Price Details']
    },
    rating: {
        type: Number,
        default: 0
    },
    image: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category:{
        type:String,
        required:[true,'Please Enter Product Category',]
    },
    stock:{
        type:Number,
        required:[true,'Please Enter product stock'],
        maxlength:[4,'Stock can not exceed 4 characters'],
        default:1
    },
    numberOfReviews:{
      type:Number,
      default:0
    },

    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            createdAt:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const productModel = mongoose.model('product',productSchema);
module.exports = productModel;