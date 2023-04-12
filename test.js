const chai = require('chai');
const expect = chai.expect;
const app = require('./index');
const request = require('supertest');

describe('Pruebas de la API', () => {
  it('Debería obtener un mensaje de todo esta Ok', async () => {
    const res = await request(app).get('/api/v1/health');
    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal("Ok");
    expect(res.body.status).to.equal("UP");
    expect(res.body.team).to.equal("los mejores");
  });
  
});