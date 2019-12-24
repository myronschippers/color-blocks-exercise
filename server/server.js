const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

//
// MIDDLEWARE
// middleware setup for web application
// --------------------

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
// ROUTER REGISTRATION
// --------------------


//
// RUN SERVER
// --------------------

app.listen(PORT, () => {
    console.log('Server is running on port: ', 5000);
});
