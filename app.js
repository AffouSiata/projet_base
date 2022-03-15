const express = require("express");
const app =express();
const db = require('./database/connexion');
const index  = require('./route/index');
const routeforme = require('./route/formulaire')
const  session  =  require ( 'express-session' );







db.connect((error)=>{
    if(error){
        console.log("echec de connexion",error);
        
    }
    else{
        console.log("connexion reussi");

        app.use(session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: true,
            cookie: { maxAge: 60000 }  
        }))
        app.set('views','./views');
        app.set('view engine','ejs')

        app.use(express.json());
        app.use(express.urlencoded({ extended: true }))
        app.use('/public',express.static('public'));


        

        app.use('/', index);
        app.use('/formulaire', routeforme);
       

        
    
    }
});



app.listen(5000,()=>console.log(`listening  on port 5000`));