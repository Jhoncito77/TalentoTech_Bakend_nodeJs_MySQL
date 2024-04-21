import { Sequelize } from "sequelize";
//                        nombreDB,usuario,contraseña  
const DB = new Sequelize('citasbd','root','wgs82n83q1',{
    host:'localhost',
    dialect:'mysql'
})

export default DB;