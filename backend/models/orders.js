const mongoose = require('mongoose');
const Joi = require('joi');

const orderSchema = mongoose.Schema({
	date:{
        type: Date,
        required:true
    },
    time:{
        type:Date,
        required:true
    },
	depth:{
        type:Number,
        required:true
    },
	width:{
        type:Number,
        required:true
    },
	height:{
        type:Number,
        required:true
    },
	pickUpAddress:{
		type:String,
        required:true
	},
	cityOrigin:{
		type:String,
        required:true
	},
	deliveryName:{
		type:String,
        required:true
	},
	deliveryId:{
		type:String,
        required:true
	},
	deliveryAddress:{
		type:String,
        required:true
	},
	cityDestination:{
		type:String,
        required:true
	}
});

const Order = mongoose.model("order", orderSchema);

const validator = (data) => {
    const schema = Joi.object({
		date:Joi.date().timestamp().required(),
		time:Joi.number().date.timestamp().required(),
		depth:Joi.number().Integer().positive().required(),
		width:Joi.number().Integer().positive().required(),
		height:Joi.number().Integer().positive().required(),
		pickUpAddress:Joi.string().required(),
		cityOrigin:Joi.string().required(),
		deliveryName:Joi.string().required(),
		deliveryId:Joi.string().required(),
		deliveryAddress:Joi.string().required(),
		cityDestination:Joi.string().required(),
    })
    return schema.validate(data)
};

module.exports = { Order, validator };