import { Router } from 'express';
import getAll from './controllers/getAll.js'

let router = Router();

router.get('/', getAll.run);

export default router;
