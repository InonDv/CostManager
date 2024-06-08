// Developers:
//1. Inon Davidov, id: 206375214
//2. Orel Shabat, id: 208353389

import mongoose from 'mongoose';

async function connectDB() {
	try {
		await mongoose.connect(process.env.DB_USER);
		console.log('MongoDB connected successfully');
	} catch (error) {
		console.log('Error', error.message);
	}
}

export default connectDB;
