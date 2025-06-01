import express from "express"

const router = express.Router()

router.post("/api/auth/register",(req,res)=>{
  res.status(200).send("register user")
})