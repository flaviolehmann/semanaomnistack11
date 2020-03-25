const express = require('express');

const routes = express.Router();

routes.post('/teste', (req, res) => {
    console.log(req.body);
})

routes.get('/', (req, res) => {
    return res.json({
        msg: 'Hello World! 2'
    });
})

module.exports = routes;