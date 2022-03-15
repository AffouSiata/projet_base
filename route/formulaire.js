const express = require('express');
const controlle = require('../controller/utilisateurs');
const  connect  = require('../database/connexion');
//  const { valide,message } = require('../request/validation');
const router =  express.Router();








// router.get('edit/:id',controlle.getOneController)  
router.post('edit/:id',(req,res)=>{
    console.log(req.body);
}) 




module.exports = router;