// Developers:
//1. Inon Davidov, id: 206375214
//2. Orel Shabat, id: 208353389

import mongoose from 'mongoose';
import categories from '../categories.js';

//Deal with day overflow
function checkValidDay(year, month, day) {
	month--;
	const date = new Date(year, month, day);
	return (
		date.getFullYear() === year &&
		date.getMonth() === month &&
		date.getDate() === day
	);
}

const costItemSchema = new mongoose.Schema({
	user_id: {
		type: Number,
		required: true,
	},

	year: {
		type: Number,
	},

	month: {
		type: Number,
		min: 1,
		max: 12,
	},

	day: {
		type: Number,
		//must check for day overflow
		validate: {
			validator: function (value) {
				return checkValidDay(this.year, this.month, value);
			},
			message: (props) => `${props.value} Invaild day!`,
		},
	},

	description: {
		type: String,
		required: [true, 'Insert description!'],
	},

	category: {
		type: String,
		required: [true, 'Insert category!'],
		//check if the category exists
		validate: {
			validator: function (value) {
				return categories.includes(value);
			},
			message: (props) => `${props.value} Invaild category!`,
		},
	},

	sum: {
		type: Number,
		required: [true, 'Insert sum!'],
		min: 0,
	},
});

costItemSchema.plugin(AutoIncrement, { inc_field: 'id' });

const costItem = mongoose.model('Costs', costItemSchema);
export default costItem;
