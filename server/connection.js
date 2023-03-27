const mysql = require('mysql');

const conn  = mysql.createConnection({

       host : "127.0.0.1",
       user : "root",
       database : "fullstack-project-db"

});



conn.connect();


module.exports = conn;






