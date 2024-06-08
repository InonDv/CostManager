// Developers:
//1. Inon Davidov, id: 206375214
//2. Orel Shabat, id: 208353389

import Express from 'express';
import { getReport, newCostItem } from '../controllers/cost_controller.js';

const costRouter = Express.Router();

costRouter.post('/addcost', newCostItem);
costRouter.get('/report', getReport);

export default costRouter;
