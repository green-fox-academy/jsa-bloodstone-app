const request = require('supertest');
const app = require('../App');

describe('Progresses', () => {
  describe('GET /kingdom/progresses', () => {
    it('should return 200 when getting all progresses', (done) => {
      request(app)
        .get('/kingdom/progresses')
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
