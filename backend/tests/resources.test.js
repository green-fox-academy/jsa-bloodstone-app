const request = require('supertest');
const app = require('../App');

const token = [
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.',
  'eyJ1c2VyIjp7Imtpbmdkb21MaXN0IjpbXSwiX2lkIjoiNWUxNTZmNTc3OTc5MzEzMWQwN2U3Z',
  'jY5IiwiZW1haWwiOiJmYXZvdXJzbW9lQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoia3l5YSIsImt',
  'pbmdkb21OYW1lIjoiQXdlc29tZSBraW5nZG9tIn0sImlhdCI6MT',
  'U3ODQ2MzI5NX0.JWL263l8WpyCSEarVnhwHHe9HSkia5xwSQuuaeTJJgM',
].join('');

describe('Resources', () => {
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
