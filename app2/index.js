const express = require('express');
const mysql = require('mysql');

const app = express();

//configuration of mysql localserver
const config = {
    host:'localhost',
    user:'root',
    password:'',
    database:'dbmanage'
};

var mySqlConnection = mysql.createConnection(config);
 


app.get('/', function (req, res) {
  
    
    mySqlConnection.connect(function(err){
        if(err)
        {
            console.log("Error in code!");
            var error = {Error:err};
            res.send(error);
        }
        else{
            console.log("Connection is done!");
            
            var query = "select * from info";
            mySqlConnection.query(query,function(err,rec){
                if(err)
                {
                    var error = {Error:err};
                    res.send(error);
                    console.log("Error"+err);                    
                }
                else{
                    res.send(rec);
                }
            });

        }
    });


});
 
app.listen(3000,function(err){
    if(err)
    {
        console.log(`Error in code: ${err}`);
    }
    else{
        console.log("Application executed on localhost:3000");
    }
});