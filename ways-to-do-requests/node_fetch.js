// documentation at
// https://github.com/node-fetch/node-fetch

const fetch = require("node-fetch");

// simple json GET
const response_get = await fetch("https://api.github.com/users/github");
const data_get = await response_get.json();
console.log(data_get);

// simple text POST

const response_post = await fetch("https://httpbin.org/post", { method: "POST", body: "a=1" });
const data_post = await response_post.json();

console.log(data_post);

// simple json POST
const body = { a: 1 };

const response_json_post = await fetch("https://httpbin.org/post", {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
});
const data_json_post = await response_json_post.json();

console.log(data_json_post);

// form paramenters
const params = new URLSearchParams(); // since node v10
params.append("a", 1);

const response = await fetch("https://httpbin.org/post", { method: "POST", body: params });
const data = await response.json();

console.log(data);

// errors are not Exceptions, you need to try..catch them
