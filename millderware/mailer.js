const req = require("express/lib/request");
const res = require("express/lib/response");
const nodemailer = require("nodemailer");
const { getMaxListeners } = require("../database/connexion");


function mail (){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'affousiatao59@gmail.com',
          pass: 'azerty'
        }
      });
      
      var mailOptions = {
        from: 'affousiatao59@gmail.com',
        to: 'myfriend@yahoo.com',
        subject: 'Envoi de-mails à laide de Node.js',
        text: 'Cétait facile!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports =mail ;