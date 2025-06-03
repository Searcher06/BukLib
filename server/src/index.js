import express from "express"
import authRoutes from "../routes/auth.route.js"
import userRoutes from "../routes/user.route.js"
import bookRoutes from "../routes/books.route.js"
import borrowRoutes from "../routes/borrow.route.js"
import { logger } from "../middleware/logger.js"
const app = express()
app.use(logger)

// endpoints 
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/books",bookRoutes)
app.use("/api",borrowRoutes)

app.listen(8080,'0.0.0.0',()=>{
  console.log("Server up and running on port 8080 🌚💀")
})
