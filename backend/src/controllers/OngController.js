const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async index(req, res) {
      return res.json(
          await connection('ongs').select('*')
      );
  },

  async create(req, res) {
    const newOng = {
      ...req.body,
      id: crypto.randomBytes(4).toString('HEX')
    }

    await connection('ongs').insert(newOng);
    return res.json({ id: newOng.id });
  }

}