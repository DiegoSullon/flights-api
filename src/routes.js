import { Router } from 'express';
import flightRouter from './api/flight/router.js'
import airportRouter from './api/airport/router.js'

let rootRouter = Router();

rootRouter.use('/flight', flightRouter);
rootRouter.use('/airport', airportRouter);

export default rootRouter;
