const mongoose = require("mongoose");

const User = mongoose.model('User', {
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true,
        minLength: 7,
        validate(v){
            if(v.toLowerCase().includes("password")){
                throw Error('Password does not contain password');
            }
        }
    },
    age: {
        type: Number,
        require: false,
        default: 0,
        validate(v){
            if(v < 0){
                throw new Error('Age must be positive');
            }
        }
    }
});

module.exports = User;