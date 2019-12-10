const request = require('supertest');
const app = require('../App');

describe('Buildings', () => {
  describe('GET /kingdom/buildings', () => {
    it('should return 200 when getting all buildings', (done) => {
      request(app)
        .get('/kingdom/buildings')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /kingdom/buildings/non-exist', () => {
    it('should return 404 when accessing non-exist endpoints', (done) => {
      request(app)
        .get('/kingdom/buildings/non-exist')
        .expect(404, done);
    });
  });
});
