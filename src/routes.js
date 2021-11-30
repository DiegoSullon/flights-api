import { Router } from 'express';
import flightRouter from './api/flight/router.js'
import airportRouter from './api/airport/router.js'
import planeRouter from './api/plane/router.js'
import seatRouter from './api/seat/router.js'
import tariffRouter from './api/tariff/router.js'
import bookingRouter from './api/booking/router.js'
import paymentRouter from './api/payment/router.js'
import passengerRouter from './api/passengers/router.js'

let rootRouter = Router();

rootRouter.use('/flight', flightRouter);
rootRouter.use('/airport', airportRouter);
rootRouter.use('/plane', planeRouter);
rootRouter.use('/seat', seatRouter);
rootRouter.use('/tariff', tariffRouter);
rootRouter.use('/booking', bookingRouter);
rootRouter.use('/payment', paymentRouter);
rootRouter.use('/passenger', passengerRouter);

export default rootRouter;
