const dotenv = require("dotenv");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");

const app = require("./app");
const { connect } = require("http2");
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

// Connect MongoDB
dotenv.config({ path: "./.env" });
const source = process.env.MONGO_URI;
mongoose.set("strictQuery", false);
// mongoose
// 	.connect(source)
// 	.then(() => {
// 		server.listen(PORT, () => {
// 			console.log("Connected to DB");
// 			console.log(`Server running on port ${PORT}...`);
// 		});
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

const startServer = async () => {
	try {
		await mongoose.connect(source);

		server.listen(PORT, () => {
			console.log("Connected to DB");
			console.log(`Server running on port ${PORT}...`);
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
