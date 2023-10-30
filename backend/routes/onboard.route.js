const express = require("express")
const { verify } = require("../middleware/auth")
const { OnboardModel } = require("../models/onboard.model")
const onboardRouter = express.Router()

onboardRouter.post("/appointments",verify,async(req,res)=>{
    const { name,imageUrl,specialization,experience,location,date,slots,fee,email} = req.body
    try{
       const newOnboard = new OnboardModel({name,imageUrl,specialization,experience,location,date,slots,fee,email})
       await newOnboard.save()
       res.status(200).json("Onboard Successful")
    }catch(error){
      res.status(400).json({message:error})
    }
})




module.exports = {
    onboardRouter
}