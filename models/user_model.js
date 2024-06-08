// Developers:
//1. Inon Davidov, id: 206375214
//2. Orel Shabat, id: 208353389

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: [true, 'Insert ID!'],
		unique: [true, 'ID already exists!'],
	},
	first_name: {
		type: String,
		required: [true, 'Insert first name!'],
	},
	last_name: {
		type: String,
		required: [true, 'Insert last name!'],
	},
	birthday: {
		type: String,
		required: [true, 'Insert birthday!'],
	},
});

const User = mongoose.model('Users', userSchema);
export default User;
