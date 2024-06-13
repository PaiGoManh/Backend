const express = require('express');
const app = express();

const router = express.Router();

router.get('/1',(req,res)=>{
    res.send("<h1'>Rahul</h1>")
})

router.get('/2',(req,res)=>{
    res.send("<h1>Maneesh</h1>")
})

router.get('/3',(req,res)=>{
    res.send("<h1>Maneesha</h1>")
})

router.get('/4',(req,res)=>{
    res.send("<h1>Swetha</h1>")
})


app.use('/kba/students',router);

app.listen(3001,()=>{
    console.log("Successfully running in 3001");
})