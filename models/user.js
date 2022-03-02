const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const Schema = mongoose.Schema;

const userSchema= new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true, minlength: 6},
    type:{type: Boolean, required: true},
    stores: [{type: mongoose.Types.ObjectId, ref: "Store"}],
    favorites: [{type: mongoose.Types.ObjectId, ref: "Product"}],
});

userSchema.plugin(uniqueValidator);

module.exports=mongoose.model("User",userSchema);