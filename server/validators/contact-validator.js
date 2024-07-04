const z = require('zod')

const contactSchema = z.object({
    username: z
    .string({required_error:"Username is required"})
    .trim()
    .min(3,{message:"Username should be atleast 3 characters"})
    .max(255,{message:"Username should not exceed 255 characters"}),

    email: z
    .string({required_error:"Email is required"})
    .trim()
    .min(3,{message:"Emal should be atleast 3 characters"})
    .max(255,{message:"Email should not exceed 255 characters"}),

    message: z
    .string({required_error:"Message is required"})
    .min(20,{message:"Message should be minimum of 20 characters"})
    .max(255,{message:"Message should not exceed 255 characters"})

})

module.exports = contactSchema