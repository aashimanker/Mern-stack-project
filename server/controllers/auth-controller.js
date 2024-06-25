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
        console.log(req.body)
        res.status(200).send({msg:req.body})
    } catch (error) {
        res.status(400).send({msg:"page not found"})
    }
}

module.exports = {home,register};
