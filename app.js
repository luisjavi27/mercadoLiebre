const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const app = express();
const port=process.env.PORT;
const publicPath = path.join(__dirname, './public');

app.use(express.static(publicPath));

app.listen(port|| 3000, ()=>{
    console.log('Servidor funcionando en puerto:  ', port||3000);
    });
    

app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'));
});

app.get("/login",(req, res) => {
    res.sendFile(path.join(__dirname,'./views/login.html'));
});

app.get("/registro",(req, res) => {
    res.sendFile(path.join(__dirname,'./views/registro.html'));
});