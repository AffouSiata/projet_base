const express = require('express');
const res = require('express/lib/response');
const controlle = require('../controller/utilisateurs');
const  connect  = require('../database/connexion');
const router =  express.Router();



router.get('/', controlle.selection);
router.get('/delete/:id', controlle.suppression);
// router.get('/edit/:id',(req,res)=>{
//     res.redirect(`/formulaire/${req.params.id}`,200)
// });
// router.post('/edit/:id', controlle.modifie);

module.exports = router;