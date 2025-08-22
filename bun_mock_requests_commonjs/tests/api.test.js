// api.test.js
const https = require("../src/httpPromise.cjs");
const getUsers = require("../src/api");

jest.mock("../src/httpPromise", () => jest.fn());

test("getUsers returns data from API", async () => {
	const users = [{ id: 1, name: "John" }];
	https.mockResolvedValueOnce({ data: users });

	const result = await getUsers();

	expect(https).toHaveBeenCalledWith("/users");
	expect(result.data).toEqual(users);
});
