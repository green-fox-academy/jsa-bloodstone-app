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
});
