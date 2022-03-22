const fetch = require('node-fetch').default;

// connect to express server at root endpoint
test('connects to express server', async () => {
    const response = await fetch('http://localhost:3000/');
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
});

// connect to login route
test('connects to login route', async () => {
    const response = await fetch('http://localhost:3000/login/');
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
});

// connect to signup route
test('connects to signup route', async () => {
    const response = await fetch('http://localhost:3000/signup/');
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