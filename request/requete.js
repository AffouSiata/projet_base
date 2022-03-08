const { promiseImpl, resolveInclude } = require('ejs');
const  connect  = require('../database/connexion');




const data =class{
    static sel = ()=>{
        return new Promise((resolve,reject)=>
        connect.query('SELECT * FROM utilisateurs', function(error,resultat){
               
            if(error){
                console.log(error);
                reject(error)
                  
            }
            else{
                resolve(resultat)  
            }
        })
        )
        
    } 
    static insertion = (azerty)=>{
        return new Promise((resolve,reject)=>{
            let {nom,prenom,email,password,numero} = azerty;
            console.log("donneés",azerty);
     
            let requete = `INSERT INTO utilisateurs(nom,prenom,email,password,numero) VALUES(?,?,?,?,?);`;

            connect.query(requete,[nom,prenom,password,email,numero],function(error,resultat){

                if(error){
                    
                    reject(error)
                }
                else{
                   
                    resolve(resultat)
                    
                    
            
                }
            }) 
        })
    }
}
module.exports=data

 