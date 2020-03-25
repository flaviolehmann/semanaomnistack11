const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();

routes.post('/ongs', async (req, res) => {
    const newOng = {
        ...req.body,
        id: crypto.randomBytes(4).toString('HEX')
    }

    await connection('ongs').insert(newOng);
    return res.json({ id: newOng.id });
})

module.exports = routes;