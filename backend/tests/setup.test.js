const request = require('supertest');
const app = require('../App');

const token = [
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.',
  'eyJ1c2VyIjp7Imtpbmdkb21MaXN0IjpbXSwiX2lkIjoiNWUxNTZmNTc3OTc5MzEzMWQwN2U3ZjY5Iiwi',
  'ZW1haWwiOiJmYXZvdXJzbW9lQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoia3l5YSIsImtpbmdkb21OYW1lI',
  'joiQXdlc29tZSBraW5nZG9tIn0sImlhdCI6MTU3ODQ3ODI3MH0.eBf9-YzVjR4p43cIPt30oToz-y2QBDV4n7qfFRoFz0I',
].join('');

describe('Setup', () => {
  describe('POST /kingdom/register/map', () => {
    it('should return 200 when post an element to kingdomList', (done) => {
      request(app)
        .post('/kingdom/register/map')
        .send({ kingdomList: 'purple' })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', `bearer ${token}`)
        .expect(200, done);
    });
  });

  describe('POST /kingdom/register/map', () => {
    it('should return 400 when post an element to kingdomList', (done) => {
      request(app)
        .post('/kingdom/register/map', { kingdomList: undefined })
        .set('Authorization', `bearer ${token}`)
        .expect(400, done);
    });
  });

  describe('POST /kingdom/register/map/non-exist', () => {
    it('should return 404 when post an element to kingdomList', (done) => {
      request(app)
        .post('/kingdom/register/map/non-exist')
        .expect(404, done);
    });
  });
});
