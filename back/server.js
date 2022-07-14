import express from "express";
import morgan from "morgan";
import dotenv from "dotenv"
import {connectDb} from "./config/database.js";
import {notFound, errHandler} from "./middleware/errMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import exerciseRoutes from "./routes/exerciseRoutes.js";
import workoutRoutes from "./routes/workoutRoutes.js";


dotenv.config()

connectDb()
const PORT = process.env.PORT || 5000
const app = express()

if(process.env.NODE_ENV === "DEVELOPMENT"){
    app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/exercises', exerciseRoutes)
app.use('/api/workouts',workoutRoutes)
app.use(errHandler)
app.use(notFound)

app.listen(PORT, ()=>{
    console.log('Start server...')
})