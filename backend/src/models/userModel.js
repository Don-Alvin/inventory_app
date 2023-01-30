const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
			// maxLength: [23, "Password must not be more that 23 characters"],
		},

		photo: {
			type: String,
			required: [true, "Please add a photo"],
			default: "https://i.bb.co/",
		},

		phone: {
			type: String,
		},

		bio: {
			type: String,
			maxLength: [250, "bio must not be more that 250 characters"],
		},
	},
	{
		timestamps: true,
	}
);

// Encrypt the password before saving to db

userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		return next();
	}
	// Hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(this.password, salt);
	this.password = hashedPassword;
	next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
