const express = require('express');
const app = express();

const log = (req, res,next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(log);

app.get('/custom_url',(req,res) => {
    res.send("Hello World!")
});

app.get('/new_url',(req,res)=>{
    res.send("Hello New Route")
});

app.listen(3003, ()=>{
    console.log("Server running on the port")
});