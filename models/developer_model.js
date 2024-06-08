// Developers:
//1. Inon Davidov, id: 206375214
//2. Orel Shabat, id: 208353389

import mongoose from 'mongoose';

const developerSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	firstname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
});

const Developer = mongoose.model('Developer', developerSchema);
export default Developer;
