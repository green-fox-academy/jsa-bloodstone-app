const request = require('supertest');
const app = require('../App');

describe('Progresses', () => {
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

  describe('GET /kingdom/progresses', () => {
    it('should return 200 when getting all progresses', (done) => {
      request(app)
        .get('/kingdom/progresses')
        .set('Authorization', `bearer ${token}`)
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  }).timeout(5000);

  describe('GET /kingdom/progresses/non-exist', () => {
    it('should return 404 when accessing non-exist endpoints', (done) => {
      request(app)
        .get('/kingdom/progresses/non-exist')
        .expect(404, done);
    });
  });
});
