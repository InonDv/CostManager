// Developers:
//1. Inon Davidov, id: 206375214
//2. Orel Shabat, id: 208353389

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/config.js';
import costRouter from './routes/cost_router.js';
import developerRouter from './routes/developer_router.js';
import userRouter from './routes/user_router.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use('/', costRouter, developerRouter, userRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
