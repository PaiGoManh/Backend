const express = require('express');
const app = express();

const login = (req,res,next) =>{
    console.log("Login Success");
    next();
};

const register = (req,res,next) =>{
    console.log("Reegister Success");
    next();
}

app.get('/log',login,(req,res)=>{
    res.send("<h1>Hi Rahul</h1>")
})

app.get('/reg',register,(req,res)=>{
    res.send("<h1>Hi Rahul</h1>")
})

app.listen(3001);