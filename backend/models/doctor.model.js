const mongoose = require("mongoose")

 const doctorsSchema = mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
 },{
    versionKey:false
 })

 const DoctorsModel = mongoose.model("doctor",doctorsSchema)

 module.exports = {
    DoctorsModel
 }