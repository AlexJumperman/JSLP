const express = require('express');
require('./src/db/mongoose');
const User = require('./src/models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save().then(r => {
        res.send(user);
    }).catch(e => {
        res.status(400).send(e);
    })
})

app.get('/users', (req, res) => {
    User.find({}).then(r => {
        res.send(r);
    }).catch(e => {
        res.status(500).send();
    })
})

app.get('/users/:id', (req, res) => {
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


app.listen(port, () => {console.log('Server is up on port ' + port)})