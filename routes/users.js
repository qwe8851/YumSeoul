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

module.exports = router;