// Developers:
//1. Inon Davidov, id: 206375214
//2. Orel Shabat, id: 208353389

import User from '../models/user_model.js';
import costItem from '../models/cost_model.js';
import categories from '../categories.js';

async function newCostItem(req, res) {
	try {
		const userId = req.body.user_id;
		const user = await User.findOne({ id: userId });
		//if user not exists return error message
		if (!user) {
			return res.status(404).json({ message: 'Could not find user' });
		}

		//in case no date entered:
		if (!req.body.year && !req.body.month && !req.body.day) {
			const currentDate = new Date();
			req.body.year = currentDate.getFullYear();
			req.body.month = currentDate.getMonth() + 1; //js counts months from 0
			req.body.day = currentDate.getDate();
		} else if (!req.body.year || !req.body.month || !req.body.day) {
			return res
				.status(400)
				.send({ message: 'Missing one or more date fields' });
		}
		//using req body to create new item
		const addNewCostItem = new costItem(req.body);
		await addNewCostItem.save();

		res.status(201).json({ message: 'New item added', data: addNewCostItem });
	} catch (error) {
		res
			.status(500)
			.json({ message: 'Could not save new item', error: error.message });
	}
}

async function getReport(req, res) {
	try {
		const { user_id, year, month } = req.query;
		const user = await User.findOne({ id: user_id });
		//if user not exists return error message
		if (!user) {
			return res.status(404).json({ message: 'Could not find user' });
		}
		//check if the date is given correctly
		if (!year || !month) {
			return res.status(400).json({ message: 'Missing date fields' });
		}

		if (parseInt(month) < 1 || parseInt(month) > 12) {
			return res.status(400).json({ message: 'Invalid month value' });
		}
		//create the report structure
		const costsForReport = await costItem.find({ user_id, year, month });
		const report = {};
		categories.forEach((category) => {
			report[category] = costsForReport
				.filter((costs) => costs.category === category)
				.map(({ day, description, sum }) => ({ day, description, sum }));
		});

		res.status(200).send(report);
	} catch (error) {
		res
			.status(400)
			.send({ message: 'Falied to get reports', error: error.message });
	}
}

export { newCostItem, getReport };
