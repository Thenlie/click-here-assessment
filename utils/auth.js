const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const expiration = '1h';

module.exports = {
    signToken: function({ email }) {
        const payload = { email };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};