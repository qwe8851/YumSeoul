const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

router.get('/', (req, res) => {
    User.find()
        .then((users) => {
            if (!users.length) {
                return res.status(404).send({ err: 'User not found' });
            }
            res.send(`find successfully: ${users}`);
        })
        .catch((err) => res.status(500).send(err));
});

// 회원가입
router.post('/signup', async (req, res) => {
    try {
        const reqInfo = req.body;
        const user = new User(reqInfo);
        const userInfo = await user.save();

        return res.status(200).json({
            success: true,
            userInfo
        });
    } catch (error) {
        return res.json({
            success: false,
            error: error.message
        });
    }
});

// 로그인
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        // 이메일과 사용자 조회
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

        // 비밀번호 비교
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                error: 'Invalid password'
            });
        }

        // json web token 생성
        const token = await new Promise((resolve, reject) => {
            jwt.sign(
                {
                    user: {
                        id: user.id,        // 변환할 데이터
                    }
                },
                "jwtSecret",                // secret key 값
                { expiresIn: "1h" },        // token 유효시간
                (err, token) => {
                    if (err) reject(err);
                    resolve(token);
                }
            );
        });

        // 로그인 성공
        return res.status(200).json({
            success: true,
            userInfo: user,
            token: token
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// 인증코드 메일 전송
router.post('/reset-code', async (req, res) => {
    try {
        const {email} = req.body;

        // 사용자 조회
        const user = await User.findOne({email});
        if(!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

        // 임시 인증코드 생성 및 저장
        const resetCode = user.generateResetCode();
        await user.save();

        // 비밀번호 재설정 이메일 발송
        user.sendResetPasswordEmail(user.email, resetCode);

        return res.status(200).json({
            success: true,
            message: 'Password reset email has been sent'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
});


// 패스워드 재설정
router.post('/reset-password', async (req, res) => {
    try {
        // const {email, resetCode, newP}
    } catch (error) {
        
    }
});

module.exports = router;