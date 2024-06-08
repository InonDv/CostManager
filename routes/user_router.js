// Developers:
//1. Inon Davidov, id: 206375214
//2. Orel Shabat, id: 208353389

import Express from 'express';
import { addNewUser } from '../controllers/user_controller.js';

const userRouter = Express.Router();

userRouter.post('/signup', addNewUser);

export default userRouter;
