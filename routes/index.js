// create express router variable
const router = require('express').Router();

router.post('/login', (req, res) => {
    res.status(200).json({ message: 'logged in!'})
});

module.exports =  router;