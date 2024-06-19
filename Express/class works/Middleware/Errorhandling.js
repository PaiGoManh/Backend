const express = require('express');
const app = express();

const errorhandlemiddleware = (err,req,res,next) =>{
    console.error(err);
    const status = err.status || 500;
}