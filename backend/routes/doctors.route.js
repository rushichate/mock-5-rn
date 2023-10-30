const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { DoctorsModel } = require("../models/doctor.model");
const doctorsRouter = express.Router()


doctorsRouter.post("/signiup",async(req,res)=>{
    const {email,password} = req.body;
    try{
       const isEmailPresent = await DoctorsModel.findOne({email})
       if(isEmailPresent){
        return res.status(200).json({message:"Email is already present"})
       }
       const hashPassword = bcrypt.hashSync(password,4)
       const newDoctor = new DoctorsModel({...req.body,password:hashPassword})
       await newDoctor.save()
       res.status(200).json({message:"Account created"})

    }catch(error){
        res.status(400).json(error.message)
    }
})

doctorsRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    try{
        const isEmailValid = await DoctorsModel.findOne({email})
        if(!isEmailValid){
            res.status(200).json({message:"Invalid email"})
        }

        const isPasswordCorrect = bcrypt.compareSync(password,isEmailValid.password)
        if(!isPasswordCorrect){
            res.status(200).json({message:"Wront Credentials"})
        }

        const token = jwt.sign({email:isEmailValid.email},"masai",{expiresIn:"10m"})
        res.status(200).json({message:"Login success"})
    }catch(error){
        res.status(400).json(error.message)
    }
})

module.exports = {
    doctorsRouter
}