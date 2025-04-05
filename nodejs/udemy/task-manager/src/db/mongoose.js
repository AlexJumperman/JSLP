const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB)
    .then(() => {})
    .catch(err => console.error("MongoDB connection error:", err));