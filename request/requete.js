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

//   static modifiepost =(req,res)=>{
//     const id = req.body.id;
//     let {nom,prenom,email,password,numero} = req.body
//     connect.query('UPDATE utilisateurs SET ? WHERE id = ?',[{nom:nom,prenom:prenom,password:password,email:email,nnumero:numero},id],(error,resultat)=>{
//         if(error){
                    
//             return error
//         }
//         else{
           
//             return resultat 
            
//         }

//     })

//   }
           
}
module.exports=data

// update = (req, res)=>{
//     const id = req.body.id;
//     const user = req.body.user;
//     const rol = req.body.rol;
//     conexion.query('UPDATE users SET ? WHERE id = ?',[{user:user, rol:rol}, id], (error, results)=>{
//         if(error){
//             console.log(error);
//         }else{           
//             res.redirect('/');         
//         }
// });
// };


// app.update('edit/:id')



// router.get('/delete/:id', (req, res) => {
//     const id = req.params.id;
//     conexion.query('DELETE FROM users WHERE id = ?',[id], (error, results)=>{
//         if(error){
//             console.log(error);
//         }else{           
//             res.redirect('/');         
//         }
//     })
// });


// router.get('/edit/:id', (req,res)=>{    
//     const id = req.params.id;
//     conexion.query('SELECT * FROM users WHERE id=?',[id] , (error, results) => {
//         if (error) {
//             throw error;
//         }else{            
//             res.render('edit.ejs', {user:results[0]});            
//         }        
//     });
// });