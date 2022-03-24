
const nodemailer = require("nodemailer");



function mail (envoie,token){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'koneafsa8@gmail.com',
          pass: 'Afsa2000#'
        }
      });
      let lien = `http://localhost:5000/login/${token}`
    let info =  transporter.sendMail({

        from:  'koneafsa8@gmail.com', 
        to: envoie.email, 
        subject: "Hello ✔", 
        text: "Hello world?",
        html: `<p>Hello world?</p> 
        <a href="${lien}" > confirmation de votre email</a>`
        ,
    } )
    transporter.sendMail(info, function(error, info){
      if (error) {
        console.log("erreur de mon mail",error);
      } else 
        console.log('Email sent: ' + info.response);
      }
    )};
  
module.exports =mail ;