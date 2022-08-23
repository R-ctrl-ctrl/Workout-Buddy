const express = require('express')
require('dotenv').config()
const workoutRoutes = require('./routes.js/workouts')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())



// // middleware
// app.use((req,res,next)=>{
//     console.log(req.path,req.method)
//     next()
// })


app.use('/api/workouts', workoutRoutes)

// Connect to db
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Listening on port 4000")
    })
}).catch((Err)=>{console.log(err)})


