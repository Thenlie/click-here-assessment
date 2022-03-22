const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const expiration = '1h';

module.exports = {
    // generate JWT on login or signup
    signToken: function({ email, username, id }) {
        const payload = { email, username, id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
    // verify token is valid on task routes
    verifyToken: function(token) {
        if (!token) {
            return false;
        };
        // separate "Bearer" from "<tokenvalue>"
        token = token.split(' ').pop().trim();
        if (!token) {
            return false;
        };
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            if (!data) {
                return false;
            };
            return data;
        } catch {
            console.log('invalid token');
            return false;
        };
    }
};