require('dotenv').config()
const express = require("express")
const errorMiddleware = require('./middlewares/error-middleware')


const app = express()
const authRoute = require("./router/auth-router");
const contactRoute = require('./router/contact-router')
const connectDb = require("./utils/db")


app.use(express.json());

// Mount the router:To use the router in your express app , you can mount it at a specific url prefix
app.use("/api/auth",authRoute)
app.use("/api/form",contactRoute)


//Whenever we encounter an error , we call the next() funcyion which handsover the control to the middleware for throwing an error
app.use(errorMiddleware)

const PORT = 5000;

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Our server is running at ${PORT}`)
    })
})

