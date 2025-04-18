const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const {userOneId, token, userOne, setUpDb} = require('../tests/fixtures/db')

beforeEach(setUpDb)

test("Should signup new user", async () => {
    await request(app).post('/users').send({
        name: "UserName",
        email: "user@example.com",
        password: "1q2w3e4r",
    }).expect(201)
})

test("Should login new user", async () => {
    const res = await request(app).post('/login').send({
        email: userOne.email,
        password: userOne.password,
    }).expect(200)

    const user = await User.findById(userOneId)

    expect(user.tokens.some(t => t.token === res.body.token)).toBe(true)
})

test("Fail to login", async () => {
    await request(app).post('/login').send({
        email: userOne.email,
        password: "wrong-password",
    }).expect(401)
})

test("Get user profile", async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(200)
})

test("Not get user profile for anon user", async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test("Delete user profile", async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(200)

    const user = await User.findById(userOneId)

    expect(user).toBeNull()
})