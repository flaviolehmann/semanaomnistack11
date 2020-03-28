const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
  async index(req, res) {
      return res.json(
          await connection('ongs').select('*')
      );
  },

  async create(req, res) {
    const newOng = {
      ...req.body,
      id: generateUniqueId()
    }

    await connection('ongs').insert(newOng);
    return res.json({ id: newOng.id });
  }

}