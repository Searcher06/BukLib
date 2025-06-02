import express from "express"

const router = express.Router()

router.post("/register",(req,res)=>{
  res.status(200).send("register user")
})

router.post("/login",(req,res)=>{
  res.status(200).send("login user")
})




export default router