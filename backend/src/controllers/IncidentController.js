const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    return res.json(
      await connection('incidents').select('*')
    );
  },

  async create(req, res) {
    const newIncident = {
      ...req.body,
      ong_id: req.headers.authorization
    };

    const [ id ] = await connection('incidents').insert(newIncident);
    return res.json({ id });
  },

  async destroy(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permitted.' });
    }

    await connection('incidents').where('id', id).delete();
    return res.status(204).send();
  }
}