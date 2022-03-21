const { jwt } = require("jsonwebtoken");





exports.token = (req,res)=>{
   if(req.body == "affousiatao59gmail.com" && req.body.passord == "azerty") {
        let token = jwt.sign()
   }
   else{
       res.statis(404).json({message: "login ou password incorrect "})
   }
    
}