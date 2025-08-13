/**
 * makes a request
 * @param method HTTP Method
 * @param url url of the server
 * @param body if it has, an object to send
 * @returns {Promise<Response>}
 */
export async function make_request(method: 'GET' | 'POST', url: string, body?: object) {
    console.log("inside the function")
    const response = await fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
    });
    console.log("after the request")
    return response
}