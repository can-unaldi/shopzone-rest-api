const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema= new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    price:{type: String, required: true},
    store:{type: mongoose.Types.ObjectId, required: true, ref: "Store"},
    owner:{type: mongoose.Types.ObjectId, required: true, ref: "User"}
});

module.exports=mongoose.model("Product",productSchema);