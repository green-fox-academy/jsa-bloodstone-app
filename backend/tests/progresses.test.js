const request = require('supertest');
const app = require('../App');

const token = [
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.',
  'eyJ1c2VyIjp7Imtpbmdkb21MaXN0IjpbXSwiX2lkIjoiNWUxNTZmNTc3OTc5MzEzMWQwN2U3ZjY5Iiwi',
  'ZW1haWwiOiJmYXZvdXJzbW9lQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoia3l5YSIsImtpbmdkb21OYW1lI',
  'joiQXdlc29tZSBraW5nZG9tIn0sImlhdCI6MTU3ODQ3ODI3MH0.eBf9-YzVjR4p43cIPt30oToz-y2QBDV4n7qfFRoFz0I',
].join('');

describe('Progresses', () => {
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
