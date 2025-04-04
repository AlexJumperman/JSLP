const express = require('express');
require('./src/db/mongoose');
const userRouter = require('./src/routers/user')
const taskRouter = require('./src/routers/task')

const app = express();
const port = process.env.PORT || 3000;

const multer = require('multer');
const upload = multer({
    dest: 'public',
    limits: {
        fileSize: 1024 * 1024 // 1Mb
    },
    fileFilter: function (req, file, cb) {
        if(!file.originalname.match('\.(png|jpg|jpeg)$')) {
            return cb(new Error('Only png, jpg, jpeg allowed'));
        }
        cb(null, true);
    }
});

app.post('/upload', upload.single('file'), (req, res) => {
    res.status(200).send();
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
})

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {console.log('Server is up on port ' + port)})