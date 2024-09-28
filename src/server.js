const express = require('express');
const path = require('path');

//inicializacion
const app = express();

//configuracion
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname,'views'))

//Middlewares
app.use(express.urlencoded({extended:false}));

//Global Variables


//routes
app.get('/', (req,res) =>{
    res.send('PREGUNTADOS');
});

//Static files
app.use(express.static(path.join(__dirname,'public')));

module.exports = app;
