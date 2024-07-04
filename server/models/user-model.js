const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//used for registration & login
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    phone:{
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    },
    isAdmin:{
        type: Boolean,
        default:false
    }
})
//secure the password
userSchema.pre('save',async function(){
    const user = this;

    if (!user.isModified('password')){
        next()
    }

    try {
        //hash the password
        const saltRound = await bcrypt.genSalt(10)
        const hash_password = await bcrypt.hash(user.password,saltRound)
        user.password = hash_password
    } catch (error) {
        next(error)
    }
})

//to work with json webtoken
userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin //payload
        },
        process.env.JWT_SECRET_KEY, //signature
        {
            expiresIn:'30d'
        }
    )
    } catch (error) {
        console.log(error)
    }
}

//to compare the passwords in the login function,using bcrypt 
userSchema.methods.isValidPassword = async function(password){
    try{
        const user = await bcrypt.compare(password,this.password)
        if (user){
            return true
        }
        else{
            return false
        }
    }
    catch(error){
        console.log(error)
    }
}
//define the model or collection name

const User = mongoose.model("User",userSchema)

module.exports = User