const express = require('express');
const res = require('express/lib/response');
const controlle = require('../controller/utilisateurs');
const  connect  = require('../database/connexion');
const router =  express.Router();





router.get('/',controlle.maliste)
router.get('/index', controlle.selection);

router.get('/login',controlle.connectionGet) 
router.post('/login',controlle.connectionPost) 




router.get('/delete/:id', controlle.suppression);



module.exports = router;