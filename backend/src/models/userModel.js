const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please add a name"],
		},
		email: {
			type: String,
			required: [true, "Please add an email"],
			unique: true,
			trim: true,
			match: [
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				"Please enter a valid email",
			],
		},

		password: {
			type: String,
			required: [true, "Please add a valid password"],
			minLength: [6, "Password must be more than or equal to 6 characters"],
			maxLength: [23, "Password must not be more that 23 characters"],
		},

		photo: {
			type: String,
			required: [true, "Please add a photo"],
			default: "https://i.bb.co/",
		},

		photo: {
			type: String,
			default: "+254",
		},

		bio: {
			type: String,
			default: "bio",
			maxLength: [250, "bio must not be more that 250 characters"],
		},
	},
	{
		timeStamps: true,
	}
);

const User = mongoose.model("User", userSchema);

module.exports = User;
