const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: "One",
    email: "test@test.com",
    password: "1q2w3e4r",
}

beforeEach(async () => {
    await User.deleteMany({})
    await new User(userOne).save()
})

test("Should signup new user", async () => {
    await request(app).post('/users').send({
        name: "UserName",
        email: "user@example.com",
        password: "1q2w3e4r",
    }).expect(201)
})

test("Should login new user", async () => {
    await request(app).post('/login').send({
        email: userOne.email,
        password: userOne.password,
    }).expect(200)
})

test("Fail to login", async () => {
    await request(app).post('/login').send({
        email: userOne.email,
        password: "wrong-password",
    }).expect(401)
})