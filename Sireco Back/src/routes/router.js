import { Router } from "express";
import {listar, cargar, editar, buscarContribuyente, buscarCuil} from '../controller/autoControllers.js'

const router = Router();

router.get('/listar', listar);
router.post('/cargar/', cargar);
router.get('/buscar/:dni', buscarCuil);
router.put('/editar/:id', editar);




export default router;