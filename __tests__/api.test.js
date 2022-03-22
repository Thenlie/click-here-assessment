const fetch = require('node-fetch').default;

// connect to express server at root endpoint
test('connects to express server', async () => {
    const response = await fetch('http://localhost:3000/');
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
});