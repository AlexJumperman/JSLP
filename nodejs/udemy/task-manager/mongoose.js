const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongoose")
    .then(() => {
        const Task = mongoose.model("Task", {
            description: String,
            completed: Boolean,
        });
        const task = new Task({
            description: 'Task from mongoose 2',
            completed: false,
        });

        task.save().then((r) => console.log(r));
    })
    .catch(err => console.error("MongoDB connection error:", err));