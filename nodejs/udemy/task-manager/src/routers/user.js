const express = require('express');
const User = require("../models/user");
const router = new express.Router();
const auth = require('../middleware/auth')
const multer = require('multer');
const upload = multer({
    limits: {
        fileSize: 100 * 1024
    },
    fileFilter: function (req, file, cb) {
        if(!file.originalname.match('\.(png|jpg|jpeg)$')) {
            return cb(new Error('Only png, jpg, jpeg allowed'));
        }
        cb(null, true);
    }
});

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

router.post('/users', async (req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    } catch (e){
        res.status(400).send(e);
    }
})

router.get('/users/:me', auth, (req, res) => {
    res.send(req.user)
})

router.patch('/users/me', auth, async (req, res) => {
    try{
        Object.keys(req.body).forEach(prop => req.user[prop] = req.body[prop])
        await req.user.save()
        res.send(req.user)
    } catch (e){
        res.status(500).send(e)
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try{
        await req.user.deleteOne()
        res.send(req.user)
    } catch (e){
        res.status(500).send(e);
    }
})

router.post('/users/me/avatar', auth, upload.single('file'), async (req, res) => {
    req.user.avatar = req.file.buffer
    await req.user.save()
    res.status(200).send();
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
})

router.delete('/users/me/avatar', auth, async (req, res) => {
    req.user.avatar = undefined
    await req.user.save()
    res.status(200).send();
})

router.get('/users/me/avatar', auth, async (req, res) => {
    res.status(200).set('Content-Type', 'image/png').send(req.user.avatar);
})

module.exports = router;