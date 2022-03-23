const jwt  = require ( 'jsonwebtoken' ) ;



const  authenticateJWT =class{

    static creetoken = (req)=>{
        if(req.email == "sa@gmail.com" && req.password =="sasa"){
            let token = jwt.sign({email : req.email},"anNvbnRva2Vu");  
            console.log(token);
            return token
        }
        else{
            console.log({message: "login ou password incorrect "})
        } 
    }

    static authen =(token)=>{
        console.log("validetoken",token);
        try  {
             
      
           const verification =   jwt.verify(token, "anNvbnRva2Vu") 
           console.log("token verifie",verification);
           return verification;
                  
          } catch {
             console.log("token invalid")
          }

    }
}
module.exports = authenticateJWT;