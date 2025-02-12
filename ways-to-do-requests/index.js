/// Source
/// https://stackoverflow.com/questions/6158933/how-is-an-http-post-request-made-in-node-js

/// opcion 1
/// https://www.memberstack.com/blog/node-http-request
const http = require("node:https");

http.get("https://reqres.in/api/users", (resp) => {
    let data = "";

    // A chunk of data has been recieved.
    resp.on("data", (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on("end", () => {
        const url = JSON.parse(data).message;
        console.log(url);
    });
}).on("error", (err) => {
    console.log(`Error: ${err.message}`);
});
