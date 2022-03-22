const { User } = require('../models');
const { signToken } = require('../utils/auth');

// create express router variable
const router = require('express').Router();

// signup a new user
router.post('/signup', async (req, res) => {
    try {
        const response = await User.create({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        });
        const token = signToken(response);
        res.status(200).json({ user: response, token: token });
    } catch (err) {
        res.status(500).json(err);
    }
});

// login existing user
router.post('/login', async (req, res) => {
    try {
        const response = await User.findOne({
            where: { email: req.body.email }
        });
        if (!response) {
            res.status(401).json({ message: 'invalid email!' });
            return;
        }
        const isValid = await response.checkPassword(req.body.password);
        if (!isValid) {
            res.status(401).json({ message: 'invalid password!' });
            return;
        }
        const token = signToken(response);
        res.status(200).json({ user: response, token: token });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports =  router;