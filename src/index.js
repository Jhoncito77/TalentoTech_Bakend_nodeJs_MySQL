// importamos las dependencias instaladas
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
// importamos la configuracion de la base de datos
import DB from '../config/db.js'
//importamos el router
import routerCitas from '../routers/routerCitas.js';
import routerDoctor from '../routers/routerDoctor.js';

//se define variable app para trabajar con express, usamos cors y usamos express.json
const app = express();
app.use(cors());
app.use(express.json());

// definimos las url que se emplearan para modificar la base de datos
app.use('/citas',routerCitas);
app.use('/doctores',routerDoctor);

// acceso a la BD
try{
    await DB.authenticate();
    console.log("conectado a la base de datos");
}catch(err){
    console.log('error al conectar',err);
}

// enviar mensaje al navegador
app.get('/',(req,res)=>{
    res.send("Hola mundo")
});

app.listen(5000,()=>{
    console.log('servidor activo en http://localhost:5000/');
})