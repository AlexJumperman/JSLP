const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
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

userSchema.pre('save', async function (next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;