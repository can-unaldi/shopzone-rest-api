const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storeSchema= new Schema({
    title: {type: String, required: true},
    description : {type: String, required: true, unique:true},
    image: {type: String, required: true, minlength: 6},
    owner: {type: mongoose.Types.ObjectId, required: true, ref: "User"},
    products: [{type: mongoose.Types.ObjectId, required: true, ref: "Product"}]
});

module.exports=mongoose.model("Store",storeSchema);