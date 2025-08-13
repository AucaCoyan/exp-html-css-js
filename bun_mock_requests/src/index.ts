import { make_request } from "./request_utils";


export async function run() {
    console.log("Sending request...");
    const result = await make_request('POST', "https://bun.com/api", { message: "Hello from bun!" })


    console.log("Request sent!");
    console.log(result);

}


run()