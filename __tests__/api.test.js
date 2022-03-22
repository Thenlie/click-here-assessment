const fetch = require('node-fetch').default;
const { faker } = require('@faker-js/faker');

// connect to express server at root endpoint
test('connects to express server', async () => {
    const response = await fetch('http://localhost:3000/');
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
});

// connect to login route
test('connects to login route', async () => {
    const email = faker.internet.exampleEmail();
    const username = faker.internet.userName();
    const password = faker.internet.password();
    await fetch('http://localhost:3000/signup/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "username": username,
            "password": password
        })
    });
    const response = await fetch('http://localhost:3000/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
        })
    });
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
});

// connect to signup route
test('connects to signup route', async () => {
    const response = await fetch('http://localhost:3000/signup/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": faker.internet.exampleEmail(),
            "username": faker.internet.userName(),
            "password": faker.internet.password()
        })
    });
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
});

// connect to task GET route
test('connects to task GET route', async () => {
    const response = await fetch('http://localhost:3000/task/');
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
});

// connect to task POST route
test('connects to task POST route', async () => {
    const response = await fetch('http://localhost:3000/task/', {
        method: 'POST'
    });
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
});

// connect to task PUT route
test('connects to task PUT route', async () => {
    const response = await fetch('http://localhost:3000/task/', {
        method: 'PUT'
    });
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
});

// connect to task DELETE route
test('connects to task DELETE route', async () => {
    const response = await fetch('http://localhost:3000/task/', {
        method: 'DELETE'
    });
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
});
