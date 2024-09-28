const mongoose = require('mongoose')

const MONGODB_URL = 'mongodb://127.0.0.1:27017/preguntados';

mongoose.connect(MONGODB_URL)
.then(db=>console.log('base de datos conectada con exito'))
.catch(err=>console.log(err));