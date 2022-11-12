const mongoose = require('mongoose'); //Manejo de mongo
require('dotenv').config();

const url = [mongodb+srv://notas:Notas.2022@cluster0.knrspwn.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url)
    .then( ()=>{
        console.log('Se conecto la base de Datos')
    })
    .catch( (err)=>{
        console.log(err)
    })
    // .then( db => console.log('Base de datos conectada'))
    // .catch( err => console.log(err));
