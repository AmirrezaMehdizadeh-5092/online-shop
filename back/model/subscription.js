const mongose = require("mongoose");

const subscriptionInfo = mongose.Schema({
	email:
	{
		type: String,
		required: true,
	},
	joinDate:
	{
		type: Date,
		default: Date.now
	}
})

subscription = mongose.model("subscription", subscriptionInfo);
module.exports = subscription;