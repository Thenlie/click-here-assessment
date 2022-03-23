const fetch = require('node-fetch');
const { faker } = require('@faker-js/faker');
const { getFakeData, getFakeTaskData } = require('../utils/faker');

// connect to express server at root endpoint
test('connects to express server', async () => {
    const response = await fetch('http://localhost:3000/');
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
});

// connect to login route
test('connects to login route', async () => {
    const { email, password } = await getFakeData();
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
    const data = await response.json()
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
    expect(data.user);
    expect(data.token);
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
    const data = await response.json()
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
    expect(data.user);
    expect(data.token);
});

// connect to task GET route
test('connects to task GET route', async () => {
    const { token } = await getFakeData();
    const response = await fetch('http://localhost:3000/task/', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
});

// connect to task POST route
test('connects to task POST route', async () => {
    const { id, token } = await getFakeTaskData();
    const response = await fetch('http://localhost:3000/task/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            "name": "test task",
            "description": "test description",
            "user_id": id
        })
    });
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
});

// connect to task PUT route
test('connects to task PUT route', async () => {
    const { token, taskId } = await getFakeTaskData();
    const response = await fetch('http://localhost:3000/task/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            "name": "updated text",
            "id": taskId
        })
    });
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
});

// connect to task DELETE route
test('connects to task DELETE route', async () => {
    const { token, taskId } = await getFakeTaskData();
    const response = await fetch('http://localhost:3000/task/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            "id": taskId
        })
    });
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
});
