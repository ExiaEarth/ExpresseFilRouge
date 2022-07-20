const express = require('express');

const AuthRouter = express.Router();


AuthRouter.route('/login')
    .get((req, res) => { res.sendStatus(501);}) 
AuthRouter.route('/register')
    .get((req, res) => { res.sendStatus(501);}) 

module.exports = AuthRouter;