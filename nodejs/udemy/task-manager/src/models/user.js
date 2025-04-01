const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
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
                throw Error('Password does not contain password')
            }
        }
    },
    age: {
        type: Number,
        require: false,
        default: 0,
        validate(v){
            if(v < 0){
                throw new Error('Age must be positive')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
});

userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner',
})

userSchema.statics.findByCreds = async (email, password) => {
    const user = await User.findOne({email})
    if(!user){
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw new Error('Unable to login')
    }
    return user
}

userSchema.methods.generateAuthToken = async function(){
    const token = jwt.sign({_id: this._id.toString()}, 'xxx')
    this.tokens = this.tokens.concat({token})
    await this.save()
    return token;
}

userSchema.pre('save', async function (next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 8)
    }
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;