
const home = async (req, res) => {
    try{
        res.status(200).send("welcome to  conroller home page");

    } catch(error) {
       res.status(400).send({msg:"page not found"})
    }
};

const register = async (req, res) =>{
    res.status(200).send("welcome to controller registration page");
}
module.exports = {home, register};