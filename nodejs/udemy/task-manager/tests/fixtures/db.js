const User = require('../../src/models/user')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const Task = require("../../src/models/task");

const userOneId = new mongoose.Types.ObjectId()
const token = jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
const userOne = {
    _id: userOneId,
    name: "One",
    email: "test@test.com",
    password: "1q2w3e4r",
    tokens: [{token}]
}

const task1 = {
    description: "Task 1",
    completed: false,
    owner: userOneId._id
}

const task2 = {
    description: "Task 2",
    completed: true,
    owner: userOneId._id
}

const setUpDb = async () => {
    await User.deleteMany({})
    await new User(userOne).save()
    await new Task(task1).save()
    await new Task(task2).save()
}

module.exports = {
    userOneId,
    token,
    userOne,
    task1,
    task2,
    setUpDb
}