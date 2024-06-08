// Developers:
//1. Inon Davidov, id: 206375214
//2. Orel Shabat, id: 208353389

import Developer from '../models/developer_model.js';

async function createDeveloper(req, res) {
	try {
		const newDeveloper = new Developer(req.body);
		await newDeveloper.save();
		res.status(201).json(newDeveloper);
	} catch (error) {
		res.status(409).json({
			message: 'Conflict occurred while creating developer',
			error: error.message,
		});
	}
}

async function getDevelopers(req, res) {
	try {
		const developers = await Developer.find().select('-_id -__v');
		if (!developers) {
			return res.status(404).send({
				message: 'Could not find developers',
			});
		}
		res.status(200).send(developers);
	} catch (error) {
		res.status(500).send({
			message: 'fetch failed',
			error: error.message,
		});
	}
}

export { getDevelopers, createDeveloper };
