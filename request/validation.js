const {check, validationResult } = require("express-validator");

exports.valide =

[
    check('nom') .not().isEmpty().withMessage('le nom ne peut pas,être vide')
    .isLength({
        min:3,max:20
    }).withMessage('le nom doit comporter au moins 3 caractères')
    .isAlpha().withMessage('le nom ne peut pas contenir de chiffres ou de caractères spéciaux '),
    
    check('prenom') .not().isEmpty().withMessage('le prenom ne peut pas,être vide')
    .isLength({
        min:5,max:30
    }).withMessage('le prenom doit comporter au moins 5 caractères')
    .isAlpha().withMessage('le prenom ne peut pas contenir de chiffres ou de caractères spéciaux '),


    check('email','email nest pas valide')
    .isEmail()
    .normalizeEmail(),

    check('numero') .not().isEmpty().withMessage('le numero doit avoir 10 chiffres')
    .isLength({
       max:10,
        validation: 'min',
        arguments: 8,
        inverted: true,
        message: 'maximum 8 chars in CAPS please'
    })
    
]
exports.message = (req,res)=>{
    
}
 