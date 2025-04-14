const { log } = require("console");

const express=require("express");

const app=express();
const {scrapeLogic} =require('./scrapeLogic');
const PORT=process.env.PORT || 4000;
app.get('/',(rep,res)=>{
    res.send("hola esto es una prueba de render puppeteer");
});
app.get('/lista',(rep,res)=>{
    scrapeLogic(res);
});

app.listen(PORT,()=>{
    console.log(`se esta ejecutando en http://localhost:${PORT}`);
    
});