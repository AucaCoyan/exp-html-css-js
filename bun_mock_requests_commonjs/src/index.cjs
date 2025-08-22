const make_request = require("./request_utils.cjs");

async function run() {
	console.log("Sending request...");
	const result = await make_request("POST", "https://bun.com/api", {
		message: "Hello from bun!",
	});

	console.log("Request sent!");
	console.log(result);
}

module.exports = run;

run();
