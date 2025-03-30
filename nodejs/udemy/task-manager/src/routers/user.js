const express = require('express');
const User = require("../models/user");
const router = new express.Router();
const auth = require('../middleware/auth')

router.post('/login', async (req, res) => {
    try{
        const user = await User.findByCreds(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch (e) {
        res.status(401).send()
    }
})

router.post('/logout', auth, async (req, res) => {
    try{
        req.user.tokens = req.user.tokens.filter(token => token.token !== req.token)
        await req.user.save()
        res.send(req.user)
    } catch (e){
        res.status(500).send()
    }
})

router.post('/logoutAll', auth, async (req, res) => {
    try{
        req.user.tokens = []
        await req.user.save()
        res.send(req.user)
    } catch (e){
        res.status(500).send()
    }
})

router.post('/users', auth, async (req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch (e){
        res.status(400).send(e);
    }
})

router.get('/users', auth, (req, res) => {
    User.find({}).then(r => {
        res.send(r);
    }).catch(e => {
        res.status(500).send();
    })
})

router.get('/users/:me', auth, (req, res) => {
    res.send(req.user)
})

router.get('/users/:id', auth, (req, res) => {
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

router.patch('/users/:id', auth, (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if(!user){
                return res.status(404).send();
            }
            Object.keys(req.body).forEach(prop => user[prop] = req.body[prop]);
            return user.save();
        })
        .then(r => {
            res.send(r);
        })
        .catch(e => {
            res.status(500).send(e);
        });
})

router.delete('/users/:id', auth, (req, res) => {
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