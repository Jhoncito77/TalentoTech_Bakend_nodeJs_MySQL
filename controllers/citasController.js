//importamos el modelo de Cita
import Cita from '../models/Cita.js'

//metodos CRUD
//metodo para agregar una cita
export const agregarCita = async(req,res)=>{
    try{
        await Cita.create(req.body);
        res.json({msg:'cita agendada con exito'});
    }catch(err){
        res.json({msg:err.message});
    }
}

//metodo para mostrar una cita, requiere el id por parametro url
export const getCita = async(req,res) =>{
    try{
        const cita = await Cita.findAll({
            where:{id:req.params.id}
        });
        res.json(cita[0])
    }catch(err){
        res.json({msg: err.message})
    }
}

//metodo para mostrar todas las citas
export const getAllCitas = async(req,res)=>{
    try{
        const citas = await Cita.findAll();
        res.json(citas);
    }catch(err){
        res.json({msg:err.message});
    }
}

//metodo para editar una cita, requiere el id de la cita a editar
export const editarCita = async(req,res)=>{
    try{
        const cita = await Cita.update(req.body,{
            where:{id:req.params.id}
        });
        res.json('Cita actualizada exitosamente');
    }catch(err){
        res.json({msg:err.message});
    }
}

//metodo para eliminar una cita
export const eliminarCita = async(req,res)=>{
    try{
        const cita = await Cita.destroy({where:{id:req.params.id}});
        res.json({msg:'Cita eliminada con exito'})
    }catch(err){
        res.json({msg:err.message});
    }
}