const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/task-manager")
    .then(() => {})
    .catch(err => console.error("MongoDB connection error:", err));