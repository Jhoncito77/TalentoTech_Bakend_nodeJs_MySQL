//importamos la configuracion de la base de datos
import DB from '../config/db.js';
import { DataTypes } from 'sequelize';

const Cita = DB.define('citas',{
    nombre_Medico:{
        type: DataTypes.STRING,
        allowNull:false
    },
    especialidad:{
        type: DataTypes.STRING,
        allowNull:false
    },
    fecha:{
        type: DataTypes.STRING,
        allowNull:false
    },
    duracion:{
        type: DataTypes.STRING,
        allowNull:false
    }
});

export default Cita;