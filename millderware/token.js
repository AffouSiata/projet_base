const jwt  = require ( 'jsonwebtoken' ) ;



const  authenticateJWT =class{

    static creetoken = (req)=>{
        let users ={
            email:req.email,
            password:req.password
        }
       
            let token = jwt.sign(users,"anNvbnRva2Vu");  
            console.log(token);
            return token
        
        
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