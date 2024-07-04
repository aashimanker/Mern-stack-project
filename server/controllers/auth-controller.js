const User = require("../models/user-model")
const bcrypt = require("bcryptjs")


// home page logic

const home = async (req,res)=>{
    try {
        res.status(200).send("welcome to my home page")
    } catch (error) {
        console.log(error)
    }
}

//regsitration logic
const register = async(req,res) =>{
    try {
        const {username,email,phone,password} = req.body
        
        const userExist = await User.findOne({email})

        if (userExist){
            return res.status(400).json({msg:"email already exists"})
        }
        
        //hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password,saltRound)
       

        const userCreated = await User.create({username,email,phone,password})

        res.status(201).json({
            msg: "Registration successful", 
            token: await userCreated.generateToken(),
            userId:userCreated._id.toString()
        })
    } catch (error) {
        // res.status(400).send({msg:"page not found"})
        next(error)
    }
}

//user login ogic
const login = async(req,res)=>{
    try {
        //destructuring 
        const {email,password} = req.body

        //checking if email already exists in the db 
        //we can use the model created for registration logic to check for the user
        const userExist = await User.findOne({email})

        if (!userExist){
            return res.status(400).json({msg:"Invalid Credentials"})
        }

        //comapring the passwords 
        const user = await userExist.isValidPassword(password)

        if (user){
            return res.status(200).json({
                msg:"User successfully logged in",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            })
        }
        else{
            res.status(401).json({msg:"Invalid email or password"})
        }
        

    } catch (error) {
        res.status(400).send({msg:"page not found"})
    }
}


module.exports = {home,register,login};
