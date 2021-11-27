import express from 'express'
import { Router } from 'express';
import getManyController from './controllers/getFlights.js'

let router = Router();

router.get('/', getManyController.run);

export default router;
