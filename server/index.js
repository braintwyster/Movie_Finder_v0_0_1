//server.js
'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const api = require('./routes/api')

app.use(cors())

const port = process.env.API_PORT || 3001;

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.raw({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.use('/api', api)

app.listen(port, () => {
    console.log(`api running on port ${port}`);
});
