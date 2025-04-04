const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB + "/task-manager")
    .then(() => {})
    .catch(err => console.error("MongoDB connection error:", err));