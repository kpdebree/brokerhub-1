// require mongoose
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var salesSchema = new Schema({
	address: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	latitude: {
		type: Number,
		required: true
	},
	longitude: {
		type: Number,
		required: true
	},
	propertyName: {
		type: String,
	},
	squarefeet: {
		type: Number,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	askingrent: {
		type: Number,
		required: true
	}
});

var SalesComps = mongoose.model("SalesComps", salesSchema);

module.exports = SalesComps;