/**
 * makes a request
 * @param method HTTP Method
 * @param url url of the server
 * @param body if it has, an object to send
 * @returns {Promise<Response>}
 */
async function make_request(method, url, body) {
	console.log("inside the function");
	const response = await fetch(url, {
		method: method,
		body: JSON.stringify(body),
		headers: { "Content-Type": "application/json" },
	});
	console.log("after the request");
	return response;
}

module.exports = make_request;
