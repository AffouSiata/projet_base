const express = require('express');
const controlle = require('../controller/utilisateurs');
const  connect  = require('../database/connexion');
const router =  express.Router();



router.get('/', controlle.selection)

module.exports = router;