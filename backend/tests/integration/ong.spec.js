const request = require('supertest');
const app = require('../../src/app');
const connnection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connnection.migrate.rollback();
    await connnection.migrate.latest();
  })

  afterAll(async () => {
    await connnection.destroy();
  })

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAD",
        email: "contato@apad.com.br",
        whatsapp: "99250220065",
        city: "Rio do Sul",
        uf: "SC"
      });

      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
  })
})