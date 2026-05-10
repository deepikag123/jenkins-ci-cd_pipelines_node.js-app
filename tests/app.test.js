const request = require('supertest');
const app = require('../app');

test('GET / returns hello message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello');
});

test('GET /health returns UP status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('UP');
});