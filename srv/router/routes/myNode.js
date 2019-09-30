/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */
"use strict";
var express = require("express");
var async = require("async");

module.exports = function() {
	var app = express.Router();
	
	app.get("/Hi", (req,res) => {
		res.send("Hello Worl in Node.js");
	});
	
	return app;
};