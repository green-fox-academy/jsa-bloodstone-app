const request = require('supertest');
const app = require('../App');

describe('Buildings', () => {
  let token = null;

  before((done) => {
    request(app)
      .post('/users/login')
      .send({ username: 'testuser2', password: '12345678' })
      .end((err, res) => {
        token = res.body.token;
        done();
      });
  });

  describe('GET /kingdom/buildings', () => {
    it('should return 200 when getting all buildings', (done) => {
      request(app)
        .get('/kingdom/buildings')
        .set('Authorization', `bearer ${token}`)
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /kingdom/buildings/5e0358c033372b3a7c5ee05a', () => {
    it('should return 404 when accessing non-exist id', (done) => {
      request(app)
        .get('/kingdom/buildings/5e0358c033372b3a7c5ee05a')
        .set('Authorization', `bearer ${token}`)
        .expect(404, done);
    }).timeout(5000);
  });
});
