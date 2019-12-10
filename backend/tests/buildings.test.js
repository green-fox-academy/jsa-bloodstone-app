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

  describe('GET /kingdom/buildings/', () => {
    it('should return 200 when getting all buildings (with slash)', (done) => {
      request(app)
        .get('/kingdom/buildings/')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /kingdom/buildings/non-number', () => {
    it('should return 400 when the building id is not a number', (done) => {
      request(app)
        .get('/kingdom/buildings/non-number')
        .expect(400, done);
    });
  });

  describe('GET /kingdom/buildings/2', () => {
    it('should return 200 when getting a building', (done) => {
      request(app)
        .get('/kingdom/buildings/2')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });
});
