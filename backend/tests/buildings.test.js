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
    }).timeout(5000);
  });

  describe('GET /kingdom/buildings/non-number', () => {
    it('should return 403 when the building id is not a number', (done) => {
      request(app)
        .get('/kingdom/buildings/non-number')
        .expect(403, done);
    });
  });

  describe('GET /kingdom/buildings/5e0a1ceabadb94131493817a', () => {
    it('should return 404 when getting a building', (done) => {
      request(app)
        .get('/kingdom/buildings/5e0a1ceabadb94131493817a')
        .set('Authorization', `bearer ${token}`)
        .expect('Content-Type', /json/)
        .expect(404, done);
    }).timeout(5000);
  });
});
