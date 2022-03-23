const express = require('express');
const controlle = require('../controller/utilisateurs');
const  connect  = require('../database/connexion');
const { valide } = require('../millderware/validation');
const router =  express.Router();
// const { verifie } = require("../milldeware/verifie");







router.get('/',controlle.insertionGet) 

router.post('/', valide,controlle.insertionPost) 



// router.get('edit/:id',controlle.getOneController)  
router.post('edit/:id',(req,res)=>{
    console.log(req.body);
}) 




module.exports = router;