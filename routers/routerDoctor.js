//importamos express
import express from 'express';
//importamos el metodo crud que requerimos del controlador
import { agregarDoctor } from '../controllers/medicoController.js';
import { getDoctor } from '../controllers/medicoController.js';
import { getAllDoctores } from '../controllers/medicoController.js';
import { editarDoctor } from '../controllers/medicoController.js';
import { eliminarDoctor } from '../controllers/medicoController.js';

//definimos router para cargarle las url de los crud a usar
const router = express.Router();

//definimos el tipo de solicitud al servidor y la url a emplear
router.post('/',agregarDoctor);
router.get('/:id',getDoctor);
router.get('/',getAllDoctores);
router.put('/:id',editarDoctor);
router.delete('/:id',eliminarDoctor);

//exportamos el router
export default router;