import {Router} from "express"
const router = Router()

router.get("/",(req,res)=>{
  res.status(200).send("GET all books")
})

// Admins only
router.post("/",(req,res)=>{
  res.status(200).send("Add books")
})

router.put("/:id",(req,res)=>{
  res.status(200).send("edit book")
})

router.delete("/:id",(req,res)=>{
  res.status(200).send("delete book")
})
// -------------------------------------------
export default router