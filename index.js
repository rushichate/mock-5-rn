const express = require("express")
const cors = require("cors")
const { connection } = require("./backend/db")
const { doctorsRouter } = require("./backend/routes/doctors.route")
const { onboardRouter } = require("./backend/routes/onboard.route")
const { dashboardRouter } = require("./backend/routes/dashboard.route")
require("dotenv").config()
const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("Welcome to Doctors app")
})

app.use("/doctors",doctorsRouter)
app.use("/onboards",onboardRouter)
app.use("/dash",dashboardRouter)

app.listen(process.env.port,async()=>{
  try{
    await connection
    console.log("connected to db and server is running")
  }catch(error){
   console.log(error)
  }
})