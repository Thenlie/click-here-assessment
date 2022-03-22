const { User } = require('../models');

// create express router variable
const router = require('express').Router();

router.post('/signup', async (req, res) => {
    // const response = await User.create({

    // })
    res.status(200).json({ message: 'sign up successful!'});
});

router.post('/login', async (req, res) => {
    res.status(200).json({ message: 'logged in!'});
});

module.exports =  router;