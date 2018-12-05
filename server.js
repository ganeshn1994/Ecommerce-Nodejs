var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');

mongoose.connect('', function(err){
    if(err){

    }else{
        console.log('Connected to database')
    }
})

app.use(morgan('dev'));

    app.get('/', function(req,res){
        var n = "Ganesh";
        res.json('My name is ' + n);
    });

    app.get('/second', function(req,res){
        var n = "Kaushik";
        res.json('My name is ' + n);
        });

    app.listen(4000, function (err){
    if(err) throw err;

    console.log("Server is running")
    
})