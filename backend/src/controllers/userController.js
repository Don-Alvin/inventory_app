const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	// Validation
	if (!name || !email || !password) {
		res.status(400);
		throw new Error("Please fill in all required fields");
	}

	if (password.length < 6) {
		res.status(400);
		throw new Error("Password must be up to 6 characters");
	}
});

module.exports = { registerUser };
