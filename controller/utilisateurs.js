const express = require('express');
const  connect  = require('../database/connexion');
const router =  express.Router();
const { request,response } = require("express");
const data = require('../request/requete');




const controlle = class{
    static selection =(req=request,res=response)=>{
        data.sel().then(resultat =>{
            res.render('../views/index',{resultat})
        })
        .catch(error =>{
            res.redirect('/error404')
        })
    }
    static insertionGet = (req=request,res=response)=>{
        res.render('formulaire')
    }

    static insertionPost = (req=request,res=response)=>{
        console.log(req.body);
        data.insertion(req.body)
        res.redirect('/')
    
    }
    static suppression = (req=request,res=response)=>{
        console.log(req.body);
        data.suppression(req)
        res.redirect('/')
    
    }
    static getOneController = async (req=request,res=response)=>{
        // console.log("id: ",req.params.id);
        let result = await data.getOne(req.params.id)
        // console.log("result",result);
        res.render('formulaire',{data: result})
    }
    // static modifiepost =(req=request,res=response)=>{
    //     console.log(req.body);
    //     data.suppression(req)
    //     res.redirect('/')
    // }

  
    
}

module.exports = controlle;