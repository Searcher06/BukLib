import express from "express"
import userRoutes from "../routes/user.route.js"
import bookRoutes from "../routes/books.route.js"
const app = express()

app.use("/",userRoutes)
app.use("/",bookRoutes)

app.listen(8080,'0.0.0.0',()=>{
  console.log("Server up and running on port 8080")
})
