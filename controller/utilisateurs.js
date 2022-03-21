const express = require('express');
const  connect  = require('../database/connexion');
const router =  express.Router();
const { request,response } = require("express");
const data = require('../request/requete');
const { validationResult } = require('express-validator');





const controlle = class{
    static selection =(req=request,res=response)=>{
        if(req.session.user){
            data.sel().then(resultat =>{
                console.log("session",req.session.user );
                res.render('index',{resultat:resultat})
            })
            .catch(error =>{
              res.redirect('/error404')

            })
        }
        else{
            res.redirect('/login')
        }
        
    }
    static insertionGet = (req=request,res=response)=>{
        res.render('formulaire', {alert:null})
    }

    static insertionPost = (req=request,res=response)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty() ){
        // return res.status(422).jsonp(errors.array())
        const alert =errors.mapped() 
        console.log("erreur",alert);
        res.render('formulaire',{
            alert:alert  
        }) 
    }
    else{
        data.insertion(req.body).then( succes =>{
            res.redirect('/index')
        })
        .catch(error =>{
            res.render('formulaire', {alert:error})
            console.log(error);
        })
       
    }
        // console.log(req.body);

    }


    static connectionGet =(req=request,res=response)=>{
        if(req.session.user){
           return res.redirect('/index')
        }
    
        res.render('login')

    }
    static connectionPost = (req=request,res=response)=>{

                data.connection(req.body).then(succes=>{
                    let session ={
                        email:req.body.email,
                        password:req.body.password
                    }
                        req.session.user = session
                        console.log("ma session connecté",req.session.user);
                        res.redirect('/index')
                })
                .catch(error =>{
                    res.redirect('/error404')
                    console.log("erreur",error);
                })         
    }
        

    static maliste =(req=request,res=response)=>{
        // console.log("sessionAcc",req.session.user);
        res.render('acceuil')
    }

    static suppression = (req=request,res=response)=>{
        // console.log(req.body);
        data.suppression(req)
        res.redirect('/index')
    
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