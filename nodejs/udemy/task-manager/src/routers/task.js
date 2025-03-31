const express = require('express');
const Task = require("../models/task");
const router = new express.Router();
const auth = require("../middleware/auth");

router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    });
    await task.save();
    res.send(task);
})

router.get('/tasks', auth, async (req, res) => {
    await req.user.populate('tasks')
    res.send(req.user.tasks);
})

router.delete('/tasks/:id', auth, async (req, res) => {
    const task = await Task.findOneAndDelete({
        _id: req.params.id,
        owner: req.user._id
    });
    if(!task){
        res.sendStatus(404);
    }
    res.send(task);
})

module.exports = router;