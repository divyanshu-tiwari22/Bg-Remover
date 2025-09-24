import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';


//App config
const PORT = process.env.PORT || 4000 // if port is not initialized in the .env file, we use 4000
const app = express();
await connectDB();

// Initialise Middlewares
app.use(express.json());
app.use(cors());
// when we use the import wala syntax in backend, we change the type from commonjs to module

// API routes
app.get("/", (req, res) => res.send("API Working"))
app.use("/api/user", userRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))