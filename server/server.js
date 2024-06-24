const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to my home page")
})

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`Our server is running at ${PORT}`)
})