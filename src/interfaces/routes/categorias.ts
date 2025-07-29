import { Router } from 'express';
import { CategoriaController } from '../controllers/CategoriaController';

const router = Router();

router.get('/', CategoriaController.listar);
export default router;
