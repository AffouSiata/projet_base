const express = require("express");
const app =express();
const db = require('./database/connexion');
const index  = require('./route/index');
const routeforme = require('./route/formulaire')
const {check,validationResult}= require('express-validator')
const  session  =  require ( 'express-session' );

app.set('views','./views');
app.set('view engine','ejs')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/public',express.static('public'));


// app.post('/formulaire',[
//     check('nom')
//     .not().isEmpty().withMessage('le nom ne peut pas,être vide')
//     .isLength({
//         min:3
//     }).withMessage('le nom doit comporter au moins 3 caractères')
//     .isAlpha().withMessage('le nom ne peut pas contenir de chiffres ou de caractères spéciaux ')
// ])


// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//   secret: 'keyboard cat',
//   resave: true,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))


//   app.get("/", function(req, res){
       
//     // req.session.key = value
//     req.session.name = 'GeeksforGeeks'
//     return res.send("Session Set")
// })
   
// app.get("/formuliare", function(req, res){
   
//     var name = req.session.name
//     return res.send(name)
   
// })

// app.post('/formulaire')


db.connect((error)=>{
    if(error){
        console.log("echec de connexion",error);
    }
    else{
        console.log("connexion reussi");
        app.use('/', index);
        app.use('/formulaire', routeforme);
        
    
    }
});


app.listen(5000,()=>console.log(`listening  on port 5000`));