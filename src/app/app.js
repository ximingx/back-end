const express = require('express');
const app = express();

const registerRouters = require('../router');

//const userRouter = require('../router/user');
//const loginRouter = require('../router/login')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
registerRouters(app);
//app.use('/login', loginRouter)
//app.use('/user', userRouter);

module.exports = app;
