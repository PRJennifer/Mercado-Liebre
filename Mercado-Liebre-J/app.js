const express = require('express');
const path = require('path');
const app = express();
const publicpath = path.resolve(__dirname,'./public');
app.use( express.static(publicpath));
//app.use( express.static(__dirname, './public'));

app.listen(process.env.PORT || 3030, ()=>{
    console.log('servidor corriendo en el puerto 3030')
});

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})
app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})
app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})
app.post('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})