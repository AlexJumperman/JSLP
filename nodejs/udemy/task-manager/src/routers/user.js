const express = require('express');
const User = require("../models/user");
const router = new express.Router();

router.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save().then(r => {
        res.send(user);
    }).catch(e => {
        res.status(400).send(e);
    })
})

router.get('/users', (req, res) => {
    User.find({}).then(r => {
        res.send(r);
    }).catch(e => {
        res.status(500).send();
    })
})

router.get('/users/:id', (req, res) => {
    const _id = req.params.id;
    User.findById(_id).then(r => {
        if(!r){
            return res.status(404).send();
        }
        res.send(r);
    }).catch(e => {
        res.status(500).send(e);
    })
})

router.patch('/users/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {runValidators: true}).then(r => {
        if(!r){
            return res.status(404).send();
        }
        res.send(r);
    }).catch(e => {
        res.status(500).send(e);
    })
})

router.delete('/users/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id).then(r => {
        if(!r){
            return res.status(404).send();
        }
        res.send(r);
    }).catch(e => {
        res.status(500).send(e);
    })
})

module.exports = router;