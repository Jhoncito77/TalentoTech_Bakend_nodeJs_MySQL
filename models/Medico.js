//importamos la configuracion de la base de datos
import DB from '../config/db.js';
import { DataTypes } from 'sequelize';

const Doctor = DB.define('medicos',{
    nombre:{
        type: DataTypes.STRING,
        allowNull:false
    },
    telefono:{
        type: DataTypes.STRING,
        allowNull:false
    },
    direccion:{
        type: DataTypes.STRING,
        allowNull:false
    },
    especialidad:{
        type: DataTypes.STRING,
        allowNull:false
    }
});

export default Doctor;
