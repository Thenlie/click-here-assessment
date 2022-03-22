const { User } = require('../models');

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
        res.status(200).json({ user: response});
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
        // console.log(isValid)
        if (!isValid) {
            res.status(401).json({ message: 'invalid password!' });
            return;
        }
        res.status(200).json({ message: 'logged in!'});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports =  router;