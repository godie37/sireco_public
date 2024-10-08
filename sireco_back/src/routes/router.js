import { Router } from "express";
import {listar, cargar, editar, buscarContribuyente, buscarCuil} from '../controller/autController.js'

const router = Router();
router.get('/ping', (req, res) => {
  res.send('PONG');
})

router.get('/listar', listar);
router.post('/cargar/', cargar);
router.get('/buscar/:dni', buscarCuil);
router.put('/editar/:id', editar);




export default router;