const request = require('supertest');
const app = require('../App');

const token = [
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.',
  'eyJ1c2VyIjp7Imtpbmdkb21MaXN0IjpbXSwiX2lkIjoiNWUxNTZmNTc3OTc5MzEzMWQwN2U3ZjY5Iiwi',
  'ZW1haWwiOiJmYXZvdXJzbW9lQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoia3l5YSIsImtpbmdkb21OYW1lI',
  'joiQXdlc29tZSBraW5nZG9tIn0sImlhdCI6MTU3ODQ3ODI3MH0.eBf9-YzVjR4p43cIPt30oToz-y2QBDV4n7qfFRoFz0I',
].join('');

describe('Buildings', () => {
  describe('GET /kingdom/buildings', () => {
    it('should return 200 when getting all buildings', (done) => {
      request(app)
        .get('/kingdom/buildings')
        .set('Authorization', `bearer ${token}`)
        .expect('Content-Type', /json/)
        .expect(200, done);
    }).timeout(5000);
  });

  describe('GET /kingdom/buildings/non-number', () => {
    it('should return 400 when the building id is not a number', (done) => {
      request(app)
        .get('/kingdom/buildings/non-number')
        .expect(500, done);
    });
  });

  describe('GET /kingdom/buildings/5e0a1ceabadb94131493817a', () => {
    it('should return 200 when getting a building', (done) => {
      request(app)
        .get('/kingdom/buildings/5e0a1ceabadb94131493817a')
        .expect('Content-Type', /json/)
        .expect(200, done);
    }).timeout(5000);
  });
});
