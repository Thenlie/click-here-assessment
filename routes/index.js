const { User, Task } = require('../models');
const { signToken, verifyToken } = require('../utils/auth');

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
        res.status(500).json(err);
    }
});

router.get('/task', async (req, res) => {
    const auth = req.get('Authorization');
    const userData = verifyToken(auth);
    if (!userData) {
        res.status(401).json({ message: 'must be logged in' });
        return;
    }
    try {
        const response = await Task.findOne({
            where: { user_id: userData.id } 
        });
        if (!response) {
            res.status(400).json({ message: 'invalid task!' });
            return;
        }
        res.status(200).json({ task: response });
    } catch (err) {
        res.status(500).json(err);
    };
});

router.post('/task', async (req, res) => {
    const auth = req.get('Authorization');
    const userData = verifyToken(auth);
    if (!userData) {
        res.status(401).json({ message: 'must be logged in' });
        return;
    };
    try {
        const response = await Task.create({
            name: req.body.name,
            description: req.body.description,
            user_id: userData.id
        });
        if (!response) {
            res.status(400).json({ message: 'invalid task!' });
            return;
        }
    } catch (err) {
        res.status(500).json(err);
    };
    res.status(200).json({ message: 'task created!' });
});

// router.put('/task', async (req, res) => {
//     try {

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.delete('/task', async (req, res) => {
//     try {

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports =  router;