// Developers:
//1. Inon Davidov, id: 206375214
//2. Orel Shabat, id: 208353389

import Express from 'express';
import {
	createDeveloper,
	getDevelopers,
} from '../controllers/developer_controller.js';

const developerRouter = Express.Router();

developerRouter.post('/createdeveloper', createDeveloper);
developerRouter.get('/about', getDevelopers);

export default developerRouter;
