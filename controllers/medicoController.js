//importamos el modelo de medico
import Doctor from '../models/Medico.js'

//metodos CRUD
//metodo para agregar un doctor
export const agregarDoctor = async(req,res)=>{
    try{
        await Doctor.create(req.body);
        res.json({msg:'Doctor ingresado con exito'});
    }catch(err){
        res.json({msg:err.message});
    }
}

//metodo para mostrar un doctor, requiere el id por parametro url
export const getDoctor = async(req,res) =>{
    try{
        const doctor = await Doctor.findAll({
            where:{id:req.params.id}
        });
        res.json(doctor[0])
    }catch(err){
        res.json({msg: err.message})
    }
}

//metodo para mostrar todos los doctores
export const getAllDoctores = async(req,res)=>{
    try{
        const doctores = await Doctor.findAll();
        res.json(doctores);
    }catch(err){
        res.json({msg:err.message});
    }
}

//metodo para editar un doctor, requiere el id del doctor a editar
export const editarDoctor = async(req,res)=>{
    try{
        const doctor = await Doctor.update(req.body,{
            where:{id:req.params.id}
        });
        res.json('doctor actualizado exitosamente');
    }catch(err){
        res.json({msg:err.message});
    }
}

//metodo para eliminar una doctor
export const eliminarDoctor = async(req,res)=>{
    try{
        const doctor = await Doctor.destroy({where:{id:req.params.id}});
        res.json({msg:'Doctor eliminado con exito'})
    }catch(err){
        res.json({msg:err.message});
    }
}