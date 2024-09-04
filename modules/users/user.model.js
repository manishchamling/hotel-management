const {Schema, model}= require("mongoose");

const userSchema= new Schema({
name: {type: String, required: true},
email:{type: String, required: true, unique: true},
password: {type: String, required: true},
image: String,
phone: String,
roles: {type: [String] , enum:["user", "admin"], default: ["user"] },
isActive: {type: Boolean, default: false, required: true},
token:  String,
},
{timestamps:true,});

module.exports = new model("User", userSchema);