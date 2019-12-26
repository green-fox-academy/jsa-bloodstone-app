const request = require('supertest');
const app = require('../App');

describe('Resources', () => {
  describe('GET /kingdom/resources', () => {
    it('should return 200 when getting all resources', (done) => {
      request(app)
        .get('/kingdom/resources')
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
