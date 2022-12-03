const mongoose = require('mongoose');

const schemaUsers = new mongoose.Schema(
	{username : String, 
	password : String}
);

const User = mongoose.model("User", schemaUsers);

module.exports = User;