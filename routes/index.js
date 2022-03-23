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
            password: req.body.password
        });
        const token = signToken(response);
        res.status(201).json({ user: response, token: token });
    } catch (err) {
        res.status(500).json(err);
    };
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
        };
        const isValid = await response.checkPassword(req.body.password);
        if (!isValid) {
            res.status(401).json({ message: 'invalid password!' });
            return;
        };
        const token = signToken(response);
        res.status(200).json({ user: response, token: token });
    } catch (err) {
        res.status(500).json(err);
    };
});

// get all logged in users tasks
router.get('/tasks', async (req, res) => {
    const auth = req.get('Authorization');
    const userData = verifyToken(auth);
    if (!userData) {
        res.status(401).json({ message: 'must be logged in' });
        return;
    };
    try {
        const response = await Task.findAll({
            where: { user_id: userData.id } 
        });
        res.status(200).json({ task: response });
    } catch (err) {
        res.status(500).json(err);
    };
});

// get one logged in users task
router.get('/task', async (req, res) => {
    const auth = req.get('Authorization');
    const userData = verifyToken(auth);
    if (!userData) {
        res.status(401).json({ message: 'must be logged in' });
        return;
    };
    try {
        const response = await Task.findAll({
            where: { 
                user_id: userData.id,
                id: req.body.id  
            } 
        });
        res.status(200).json({ task: response });
    } catch (err) {
        res.status(500).json(err);
    };
});

// create a new task
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
        };
        res.status(200).json({ task: response });
    } catch (err) {
        res.status(500).json(err);
    };
});

// update a logged in users task by ID
router.put('/task', async (req, res) => {
    const auth = req.get('Authorization');
    const userData = verifyToken(auth);
    if (!userData) {
        res.status(401).json({ message: 'must be logged in' });
        return;
    };
    try {
        const response = await Task.update(req.body, {
            where: { 
                user_id: userData.id,
                id: req.body.id
            }
        });
        if (!response || response[0] === 0) {
            res.status(400).json({ message: 'invalid task!' });
            return;
        };
        res.status(200).json({ message: 'task updated!' });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    };
});

// delete a logged in users task by ID
router.delete('/task', async (req, res) => {
    const auth = req.get('Authorization');
    const userData = verifyToken(auth);
    if (!userData) {
        res.status(401).json({ message: 'must be logged in' });
        return;
    };
    try {
        const response = await Task.destroy({
            where: {
                user_id: userData.id,
                id: req.body.id
            }
        });
        if (!response) {
            res.status(400).json({ message: 'invalid task!' });
            return;
        };
        res.status(200).json({ message: 'task deleted!' });
    } catch (err) {
        res.status(500).json(err); 
    };
});


// get all users
router.get('/users', async (req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    };
});

// get all tasks
router.get('/all-tasks', async (req, res) => {
    try {
        const response = await Task.findAll();
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports =  router;