import run from "../src/index.cjs"
import { expect, mock, test } from 'bun:test';
import request_utils from "../src/request_utils.cjs";

mock.module("../src/request_utils", () => {
    // function make_request(param1, param2, param3?) {
    //     return { "this is a response": {} };
    // }

    return {
        make_request: mock()
    };
});

const cjs =  require("../src/request_utils.cjs");

test("first test", async () => {

    cjs.make_request.mockReset();
    cjs.make_request.mockReturnValue({ "not a response": {} });
    // note that this is a mocked response
    expect(cjs.make_request('GET', 'http://example.com')).toEqual({ "not a response": {} });

});


test("second test", async () => {
    /// you need to mockReset to
    /// - clear any number of arguments, results and calls times of the fn
    /// - you keep the mock, it doesn't roll back the implementation
    cjs.make_request.mockReset();
    cjs.make_request.mockReturnValue({ "this is a response": {} });

    // run the test
    await run()

    expect(cjs.make_request).toHaveBeenCalled();
    expect(cjs.make_request).toHaveBeenCalledTimes(1);
    // note that this response is different than in the first test
    expect(cjs.make_request('GET', 'http://example.com')).toEqual({ "this is a response": {} });

    // const cjs = require("./module");
    // expect(cjs.foo).toBe("bar");
});
