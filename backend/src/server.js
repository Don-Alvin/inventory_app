const dotenv = require("dotenv");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");

const app = require("./app");
const PORT = process.env.PORT || 8000;

// Connect MongoDB
dotenv.config({ path: "./.env" });
const source = process.env.MONGO_URI;
mongoose.set("strictQuery", false);
mongoose
	.connect(source)
	.then(() => {
		console.log("Connected to DB");
	})
	.catch((err) => {
		console.log(err);
	});
