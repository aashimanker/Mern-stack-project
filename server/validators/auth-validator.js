const z = require('zod');

//creating an object schema 
const signupSchema = z.object({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be atleast 3 characters"})
    .max(255,{message:"Name must not be more than 255 characters"}),

    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be at leat 3 characters"})
    .max(255,{message:"Email ust not exceed 255 characters"}),

    phone: z
    .string({required_error:"Phone number is required"})
    .trim()
    .min(10,{message:"Phone number must be at least 10 characters"})
    .max(20,{message:"Phone number must not exceed 20 characters"}),

    password: z
    .string({required_error:"Password is required"})
    .min(7,{message:"Password must be atleast 7 characters"})
    .max(1024,{message:"Password cannot be more than 1024 characters"})

})

const loginSchema = z.object({
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be at least 3 characters"})
    .max(255,{message:"Email must not exceed 255 characters"}),

    password: z
    .string({required_error:"Password is required"})
    .min(7,{message:"Password must be atleast 7 characters"})
    .max(1024,{message:"Password must not exceed 1024 characters"})
})

module.exports = {signupSchema,loginSchema};