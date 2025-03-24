const { MongoClient, ObjectId } = require("mongodb");

MongoClient.connect('mongodb://localhost:27017')
    .then(client => {
        const db = client.db('task-manager');

        db.collection('tasks').findOne({_id: new ObjectId('67dffb166d92a18a4c762179')})
            .then(r => console.log(r));

        db.collection('tasks').find({completed: false}).toArray()
            .then(r => console.log(r));
    })

