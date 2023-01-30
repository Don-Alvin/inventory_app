const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
	res.send("Home Page");
});

module.exports = app;
