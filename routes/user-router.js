const express = require('express');

const UserRouter = express.Router();


UserRouter.route('/')
    .get((req, res) => { res.sendStatus(501);});
UserRouter.route('/:id')
    .get((req,res) => { res.sendStatus(501); }) 

    .put((req, res) => { res.sendStatus(501) ;}) 

    .delete((req, res) => { res.sendStatus(501)}); 

module.exports = UserRouter;
