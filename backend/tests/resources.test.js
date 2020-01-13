const request = require('supertest');
const app = require('../App');

describe('Resources', () => {
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

  describe('GET /kingdom/resources', () => {
    it('should return 200 when getting all resources', (done) => {
      request(app)
        .get('/kingdom/resources')
        .set('Authorization', `bearer ${token}`)
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /kingdom/resources/non-exist', () => {
    it('should return 404 when accessing non-exist endpoints', (done) => {
      request(app)
        .get('/kingdom/resources/non-exist')
        .expect(404, done);
    });
  });
});
