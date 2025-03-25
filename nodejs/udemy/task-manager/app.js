const express = require('express');
require('./src/db/mongoose');
const User = require('./src/models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/user', (req, res) => {
    const user = new User(req.body);
    user.save().then(r => {
        res.send('success');
    }).catch(e => {
        res.send(e);
    })
})

app.listen(port, () => {console.log('Server is up on port ' + port)})