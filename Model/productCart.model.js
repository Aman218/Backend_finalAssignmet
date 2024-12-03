import mongoose from "mongoose";
const { Schema } = mongoose;

const productCart_schema = new Schema({
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
    productId:{
        type:String,
        required:true
    }
});

const productCart_model=mongoose.model('ProductCart_Details',productCart_schema);
export default productCart_model;