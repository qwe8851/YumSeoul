const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50,
    },
    email: {
        type: String,
        maxLength: 30,
        trim: true,
        unique: 1,  // 같은 값 하나만 존재 
    },
    password: {
        type: String,
        minlength: 8,
        maxLength: 50,
    },
    role: {
        type: Number,
        default: 0,
    },
    token: {
        type: String,
    },
    tokenExp: {
        type: Number
    },
});

// userSchema가 save 되기 전에(pre) 실행할 함수
userSchema.pre('save', function (next) {
    const user = this;

    if (user.isModified('password')) {
        // saltRounds가 10인 salt를 generate
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err);

            // user.password를 salt로 변경해서 hash로 return 하는 함수
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);

                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

module.exports = mongoose.model('User', userSchema);