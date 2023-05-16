const { default: test, expect } = require("@playwright/test");

test( "Create my user", async ({ request, baseURL }) => {
    const _response = await request.post(`${baseURL}/public/v2/users`, {
        data: {
            "id":1593217,
            "name": "Msi inter",
            "email": "msi@newmail.com",
            "gender": "female",
            "status": "inactive"
            
        },
    });

    expect(_response.ok()).toBeTruthy();
    expect(_response.ok()).toBe(true);
    console.log(await _response.json());

});