import { Router } from 'express';
import getManyController from './controllers/getFlights.js'
import postOneController from './controllers/postFlights.js'

let router = Router();

router.get('/', getManyController.run);
router.post('/upload', postOneController.run);

export default router;
