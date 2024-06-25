const mongoose = require("mongoose")
const URI = "mongodb://127.0.0.1:27017/mern_admin"

const connectDb = async()=>{
    try {
        await mongoose.connect(URI)
        console.log("connection succeded to database")
    } catch (error) {
        console.log("database connection failed")
        process.exit(0)
    }
}

module.exports = connectDb;