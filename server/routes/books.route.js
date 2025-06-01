import {Router} from "express"
const router = Router()

router.get("/api/books",(req,res)=>{
  res.status(200).send("GET all books")
})

// Admins only
router.post("/api/books",(req,res)=>{
  res.status(200).send("Add books")
})

router.put("/api/books/:id",(req,res)=>{
  res.status(200).send("edit book")
})

router.delete("/api/books/:id",(req,res)=>{
  res.status(200).send("delete book")
})
// -------------------------------------------
export default router