const express = require('express');
const  connect  = require('../database/connexion');
const router =  express.Router();
const { request,response } = require("express");
const data = require('../request/requete');




const controlle = class{
    static selection =(req=request,res=response)=>{
        console.log("session sur index",req.session.user);
        // req.session.user = nom;
        data.sel().then(resultat =>{
            res.render('index',{resultat:resultat})
        })
        .catch(error =>{
            res.redirect('/error404')
        })
    }
    static insertionGet = (req=request,res=response)=>{
        res.render('formulaire')
    }

    static insertionPost = (req=request,res=response)=>{
        // console.log(req.body);
        data.insertion(req.body)
        res.redirect('/index')
    
    }
    static connectionGet =(req=request,res=response)=>{
        if(req.session.user){
            // console.log("loginsessi redirect");
            res.redirect('/index')

        }
        // console.log("sessionlog");
        res.render('login')

    }
    static connectionPost = (req=request,res=response)=>{
        let session ={
            email:req.body.email,
            password:req.body.password
        }
        req.session.user = session
        console.log("ma session connecté",req.session.user);

        // console.log(req.body);
        data.connection(req.body)
        res.redirect('/index')
    
    }
    static maliste =(req=request,res=response)=>{
        console.log("sessionAcc",req.session.user);
        res.render('acceuil')
    }

    static suppression = (req=request,res=response)=>{
        // console.log(req.body);
        data.suppression(req)
        res.redirect('/')
    
    }

    // static getOneController = async (req=request,res=response)=>{
    //     console.log("id: ",req.params.id);
    //     let result = await data.getOne(req.params.id)
    //     console.log("result",result);
    //     res.render('formulaire',{data: result})
    // }



    // static modifiepost =(req=request,res=response)=>{
    //     console.log(req.body);
    //     data.suppression(req)
    //     res.redirect('/')
    // }

  
    
}

module.exports = controlle;