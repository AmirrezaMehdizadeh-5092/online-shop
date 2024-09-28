const mongose = require("mongoose");

const ProductsInfo = mongose.Schema({
	name:
	{
		type: String,
		required: true,
	},
    model:
    {
        type : String,
    },
	color:
	{
		type: String,
	},
	category:
	{
		type: String,
		required: true,
	},
	price:
	{
		type: String,
		required: true,
	},
	commiunity:
	{
		type: String,
		required: true,
	},
	image:
	{
		type: String,
		required: true,
		/*index:
		{
			unique: true,
			dropDups: true
		}*/
	},
	hover_image:
	{
		type: String,
		required: true,
	},
	href:
	{
		type: String,
		required: true,
		index:
		{
			unique: true,
			dropDups: true
		}
	},
	discription:
	{
		type: String,
	},
	joinDate:
	{
		type: Date,
		default: Date.now
	}
})

Products = mongose.model("Products", ProductsInfo);
module.exports = Products;