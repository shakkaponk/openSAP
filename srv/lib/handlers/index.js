/*eslint no-console: 0, no-unused-vars: 0, no-undef:0, no-process-exit:0, new-cap:0*/
/*eslint-env node, es6 */

"use strict";

const uuid = require("uuid/v4");
const cds = require("@sap/cds");

/**
 * Register handlers to events.
 * @param {Object} entities
 * @param {Object} entities.POs
 * @param {Object} entities.POItems
 * @param {Object} entities.POItemsView
 * @param {Object} entities.Buyer
 * @param {Object} entities.User
 */
module.exports = function (entities) {
	const {
		catalog
	} = entities;

};