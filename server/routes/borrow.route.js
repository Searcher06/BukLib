import { Router } from "express"
const router = Router()

router.post("/borrow/:bookId",(req,res)=>{
  const id = req.params.bookId
  res.status(200).send(`Borrow book with ID ${id}`)
})

router.get("/borrowed",(req,res)=>{
  res.status(200).send("GET all my borrowed books")
})


router.post("/return/:bookId",(req,res)=>{
  res.status(200).send("return borrowed book")
})

export default router