import { Router } from 'express';
import getAll from './controllers/getAll.js'
import getByAirportAirline from './controllers/getByAirportAirline.js'

let router = Router();

router.get('/', getAll.run);
router.get('/booking', getByAirportAirline.run);

export default router;
