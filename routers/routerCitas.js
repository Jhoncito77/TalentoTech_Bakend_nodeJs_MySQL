//importamos express
import express from 'express';
//importamos el metodo crud que requerimos del controlador
import { agregarCita } from '../controllers/citasController.js';
import { getCita } from '../controllers/citasController.js';
import { getAllCitas } from '../controllers/citasController.js';
import { editarCita } from '../controllers/citasController.js';
import { eliminarCita } from '../controllers/citasController.js';

//definimos router para cargarle las url de los crud a usar
const router = express.Router();

//definimos el tipo de solicitud al servidor y la url a emplear
router.post('/',agregarCita);
router.get('/:id',getCita);
router.get('/',getAllCitas);
router.put('/:id',editarCita);
router.delete('/:id',eliminarCita);

//exportamos el router
export default router;