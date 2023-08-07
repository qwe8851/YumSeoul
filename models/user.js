require('dotenv').config({ path: '.env.local' });

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require("crypto");
const nodemailer = require('nodemailer');

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
        maxLength: 60,
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

// 임시 인증 코드 생성 함수
userSchema.methods.generateResetCode = function () {
    const resetCode = crypto.randomBytes(20).toString("hex");
    this.resetCode = resetCode;
    this.resetCodeExpires = Date.now() + 3600000; // 1시간 후에 인증 코드 만료
    return resetCode;
};

// 비밀번호 재설정 이메일을 발송하는 함수
userSchema.methods.sendResetPasswordEmail = function (email, resetCode) {
    // SMTP전송을 위한 transporter 생성
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: process.env.TRANSPORTER_EMAIL,
        port: 587,
        auth: {
            user: process.env.TRANSPORTER_EMAIL, // 발신자 이메일
            pass: process.env.TRANSPORTER_USER   // 발신자 비밀번호
        },
    });

    // 이메일 옵션 설정 
    const mailOptions = {
        from: process.env.TRANSPORTER_EMAIL,
        to: email,
        subject: '[YumSeoul] 비밀번호 재설정 메일 입니다.',
        html: `<div style="width: 100%; height: 200px; display: flex; align-items: center; justify-content: center; background-color: #E0E3DA; border-radius: 10px; flex-wrap: nowrap; flex-direction: column; gap: 2rem;">
            <div style="text-align: center">비밀번호 재설정 페이지로 돌아가서 아래의 임시 코드를 입력 후 <br/>새로운 비밀번호를 설정해주세요 :) </div>
            <div style="padding: 20px 40px; background: white; display: flex; align-items: center; justify-content: center; font-size: large; border-radius: 10px;">
                ${resetCode}
            </div>
        </div >`
    };

    // 이메일 전송
    transporter.sendMail(mailOptions, function (error, info) {
        if(error){
            console.log(error);
        } else {
            console.log("Email send : " + info.response);
        }
    });
};

module.exports = mongoose.model('User', userSchema);