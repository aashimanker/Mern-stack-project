// await schema.parseAsync(req.body) is the line where you use zod to validate the request body against the defined schema 

//given any zod schema , you can call its '.parse' method to check 'data' is valid, If it is, a value is returned with full type information otherwise an error is thrown. 

const validate = (schema) => async (req,res,next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (error) {
        // console.log(error)
        const status = 422
        const extraDetails = error.errors[0].message

        const message = "Fill the input properly"
        const err = {
            status,message,extraDetails
        }
        // res.status(400).json({msg:message})
        next(err)
    }
}


module.exports = validate