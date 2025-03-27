const mongoose = require("mongoose");

const Task = mongoose.model('Task', {
    description: {
        type: String,
        require: true,
        trim: true
    },
    completed: {
        type: Boolean,
        require: true,
        default: false
    }
});

module.exports = Task;