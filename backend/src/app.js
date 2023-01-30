const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const errorHandler = require("./middleWare/errorMiddleWare");

const userRouter = require("./routes/userRoutes");

const app = express();

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes Middleware

app.use("/api/users", userRouter);

// Routes
app.get("/", (req, res) => {
	res.send("Home Page");
});

app.use(errorHandler);

module.exports = app;
