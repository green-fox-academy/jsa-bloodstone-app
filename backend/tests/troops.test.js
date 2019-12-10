const request = require('supertest');
const app = require('../App');

describe('Troops', () => {
  describe('GET /kingdom/troops', () => {
    it('should return 200 when getting all troops', (done) => {
      request(app)
        .get('/kingdom/troops')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /kingdom/non-exists-endpoint', () => {
    it('should return 404 when accessing non-exists endpoints', (done) => {
      request(app)
        .get('/kingdom/non-exists-endpoint')
        .expect(404, done);
    });
  });
});
