import express from "express"
const router = express.Router()

router.get("/api/users/me",(req,res)=>{
  res.status(200).send("my profile")
})

export default router