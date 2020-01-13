const request = require('supertest');
const app = require('../App');

describe('Setup', () => {
  let token = null;

  before((done) => {
    request(app)
      .post('/users/login')
      .send({ username: 'testuser2', password: '12345678' })
      .end((err, res) => {
        token = res.body.token;
        done();
      });
  });

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
