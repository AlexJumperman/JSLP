const request = require('supertest')
const app = require('../src/app')
const {token, setUpDb, task1, task2} = require('../tests/fixtures/db')

beforeEach(setUpDb)

test("Should select user tasks", async () => {
    const res = await request(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(200)

    expect(res.body.length).toEqual(2)
})