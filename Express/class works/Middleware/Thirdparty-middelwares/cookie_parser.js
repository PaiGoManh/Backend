const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());

app.get('/setcookie',(req,res)=>{
    res.cookie("username","Rahul",{maxAge:6000, httpOnly:true});
    res.send("Cookie set succesfully");
});

app.get('/getcookie',(req,res)=>{
    const username=req.cookie.username;
    console.log(`Welcome {username}`);
})

app.listen(3001)