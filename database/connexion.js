let mysql = require('mysql');
let connect = mysql.createConnection({
   host:'192.168.64.2',
   user: 'Affou',
   password:'12345',
   database:'test'


   // host:'127.0.0.1',
   // user: 'siata',
   // password:'00000',
   // database:'test'
});

module.exports=connect;