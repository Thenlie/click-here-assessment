// import express package
const express = require('express');
// import sequelize connection
const sequelize = require('./config/connection');
// create an express server call 'app'
const app = express();
// define which port the express server will run on
const PORT = process.env.PORT || 3000;

// set up express server middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sample GET route to ensure server works
app.get('/', (req, res) => {
    res.send('The Server Works!');
});


// start running the app on the port defined at the top of the file
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => { console.log(`App listening on port ${PORT}`) });
})