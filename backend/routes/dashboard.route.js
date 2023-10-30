const express  = require("express")
const { verify } = require("../middleware/auth")
const { OnboardModel } = require("../models/onboard.model")
const dashboardRouter = express.Router()

dashboardRouter.get("/doctors",verify,async(req,res)=>{
    try{
        const data = await OnboardModel.find()
        res.status(200).json(data)

    }catch(error){
        res.status(400).json({message:error})
    }
})

module.exports = {
    dashboardRouter
}