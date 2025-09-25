import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'

// App Config 
const Port = process.env.PORT || 4000
const app = express()
await connectDB()

// Initialise middlewares
app.use(express.json())
app.use(cors())

// API routes
app.get('/', (req, res) => {
  console.log("API working")
  res.send("API working")
})

app.listen(Port, () => console.log("Server running on port " + Port))