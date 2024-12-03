import mongoose from "mongoose";
const { Schema } = mongoose;

const product_schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    images:Array
});

const product_model=mongoose.model('Product_Details',product_schema);
export default product_model;