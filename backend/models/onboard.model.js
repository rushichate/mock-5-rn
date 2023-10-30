const mongoose = require("mongoose")

const onboardSchema = mongoose.Schema({
    name:{type:String,required:true},
    imageUrl:{type:String,required:true},
    specialization:{type:String,required:true},
    experience:{type:String,required:true},
    location:{type:String,required:true},
    date:{type:String,required:true},
    slots:{type:Number,required:true},
    fee:{type:Number,required:true},
    email:{type:String,required:true}
},
{
    versionKey:false
})

const OnboardModel = mongoose.model("onboard",onboardSchema)

module.exports = {
    OnboardModel
}