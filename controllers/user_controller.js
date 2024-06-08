// Developers:
//1. Inon Davidov, id: 206375214
//2. Orel Shabat, id: 208353389

import User from '../models/user_model.js';

async function addNewUser(req, res) {
	try {
		const newUser = new User(req.body);
		await newUser.save().then((user) => {
			return res.status(201).json(user);
		});
	} catch (error) {
		return res.status(400).json({ error: error });
	}
}

export { addNewUser };
