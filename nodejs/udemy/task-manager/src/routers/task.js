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
    const match = {}
    const sort = {}
    if(req.query.completed){
        match.completed = req.query.completed === 'true'
    }
    if(req.query.sortBy){
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }

    await req.user.populate({
        path: 'tasks',
        match,
        options: {
            limit: parseInt(req.query.limit),
            skip: parseInt(req.query.skip),
            sort
        }
    })
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