const { default: test, request, expect } = require("@playwright/test");


test("Get Cypto Updates", async ({ request, baseURL }) => {
const _response = await request.get(`${baseURL}`);
expect(_response.ok()).toBeTruthy();
expect(_response.ok()).toBe(true);
console.log(await _response.json());

});