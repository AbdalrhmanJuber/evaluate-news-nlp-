const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const aylien = require('aylien_textapi');
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

app.post('/api', function (req, res) {
    const { url } = req.body;
    textapi.sentiment({
        url: url
    }, function(error, response) {
        if (error === null) {
            res.send(response);
        } else {
            res.status(500).send({ error: 'Failed to fetch data from Aylien API' });
        }
    });
});

// Designate what port the app will listen to for incoming requests
const port = 8000;
app.listen(port, function () {
    console.log(`Server running on localhost:${port}`);
});