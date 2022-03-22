const { faker } = require('@faker-js/faker');
const fetch = require('node-fetch').default;

module.exports = {
    getFakeData: async function() {
        const email = faker.internet.exampleEmail();
        const username = faker.internet.userName();
        const password = faker.internet.password();
        // create a new User with fake data
        const user = await fetch('http://localhost:3000/signup/', {
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
        const userData = await user.json();
        return { email: email, username: username, password: password, token: userData.token };
    }
}