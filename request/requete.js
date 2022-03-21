const { promiseImpl, resolveInclude } = require('ejs');
const req = require('express/lib/request');
const res = require('express/lib/response');
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
            let requete = `INSERT INTO utilisateurs(nom,prenom,password,email,numero) VALUES(?,?,?,?,?);`;
            let verification  = `SELECT * FROM utilisateurs WHERE email=?`;
            connect.query(verification,[email],function(error,resultats){
                if(!resultats){
                    connect.query(requete,[nom,prenom,password,email,numero],function(error,resultat){
                        if(error)
                        { 
                            reject(error)
                        }
                        else{
                            resolve(resultat)
                        }
                    }) 
                }
                else{
                   
                   reject({message:"email existe déja"}) ;
                   
                }
            })

           
        })
    }



    static connection = (nnn)=>{
       return new Promise((resolve,reject)=>{
           let  {email,password}=nnn
        connect.query('SELECT * FROM utilisateurs WHERE email=? and password=? ', [email,password],function(error,resultat){
            //    console.log(resultat);
               if(resultat)
                {
                    resolve(resultat)   
                  
                 
                }
                else{
                    
                    reject(error)
                }       
            })
       })
    }

    static suppression = (req)=>{

        const id = req.params.id;
        connect.query('DELETE FROM utilisateurs WHERE id=?' , [id],(error,resultat)=>{
            // res.redirect('/index')
            if(error){
                    
                return error
            }
            else{
               
                return resultat 
                
            }
        }) 
    }



    static getOne =(id)=>{
        return new Promise((resolve,reject)=>{

            connect.query('SELECT * FROM utilisateurs WHERE id = ?',[id],(error,resultat)=>{
                if(error){
                    reject(error)
                } else{
                    resolve(resultat)

                }

            })
        })


    }


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
}
module.exports=data

