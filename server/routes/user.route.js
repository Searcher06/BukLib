import express from "express"

const router = express.Router()

router.post("/api/auth/register",(req,res)=>{
  res.status(200).send("register user")
})

router.post("/api/auth/login",(req,res)=>{
  res.status(200).send("login user")
})

router.get("/api/users/me",(req,res)=>{
  res.status(200).send("my profile")
})


export default router