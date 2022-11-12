const mongoose = require('mongoose'); //Manejo de mongo
require('dotenv').config();

const url = process.env.MONGODB_URL

mongoose.connect(url)
    .then( ()=>{
        console.log('Base de datos conectada')
    })
    .catch( (err)=>{
        console.log(err)
    })
    // .then( db => console.log('Base de datos conectada'))
    // .catch( err => console.log(err));