// api.js
// const https = require("https");
const https = require("./httpPromise");

const getUsers = () => {
	return https("/users");
};

module.exports = getUsers;
