var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');

var app = express();

app.listen(3000, function() {
  console.log('Server Started on Port 3000...');

  var conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "mf!Developer1",
    database: "adwords"
  });

  conn.connect(function(err) {
    if(err) throw err;
    conn.query("SELECT * FROM adproducts", function(err, result, fields) {
      if(err) throw err;
      console.log(result);
    });
  });

});
