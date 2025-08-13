import { run } from "../src/index"
import { expect, mock, test } from 'bun:test';
import { make_request } from "../src/request_utils";

mock.module("../src/request_utils", () => {
    // function make_request(param1, param2, param3?) {
    //     return { "this is a response": {} };
    // }

    return {
        make_request: mock()
    };
});

const esm = await import("../src/request_utils");

test("first test", async () => {

    esm.make_request.mockReset();
    esm.make_request.mockReturnValue({ "not a response": {} });
    // note that this is a mockedl response is different than in the first test
    expect(esm.make_request('GET', 'http://example.com')).toEqual({ "not a response": {} });

    // const cjs = require("./module");
    // expect(cjs.foo).toBe("bar");
});


test("second test", async () => {
    /// you need to mockReset to
    /// - clear any number of arguments, results and calls times of the fn
    /// - you keep the mock, it doesn't roll back the implementation
    esm.make_request.mockReset();
    esm.make_request.mockReturnValue({ "this is a response": {} });

    // run the test
    await run()

    expect(esm.make_request).toHaveBeenCalled();
    expect(esm.make_request).toHaveBeenCalledTimes(1);
    // note that this response is different than in the first test
    expect(esm.make_request('GET', 'http://example.com')).toEqual({ "this is a response": {} });

    // const cjs = require("./module");
    // expect(cjs.foo).toBe("bar");
});