import { Router } from 'express';
import flightRouter from './api/flight/router.js'

let rootRouter = Router();

rootRouter.use('/flights', flightRouter);

export default rootRouter;
