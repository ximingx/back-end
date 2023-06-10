const express = require('express');
const app = express();

const registerRouters = require('../router');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

registerRouters(app);
module.exports = app;
