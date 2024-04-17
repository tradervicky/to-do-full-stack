const mongoose = require('mongoose')
 const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number
 })

 const userModel = mongoose.model("crud-data", userSchema, "crud-data")

 module.exports= userModel