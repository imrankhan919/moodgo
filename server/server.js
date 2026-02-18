import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import connectDB from "./config/dbConfg.js"

dotenv.config()

// DB CONNECTION
connectDB()


const PORT = process.env.PORT || 5000

const app = express()


// Default Route
app.get("/", (req, res) => {
    res.json({
        message: "WELCOME TO MOODGO API"
    })
})


app.listen(PORT, () => console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgBlue.white))