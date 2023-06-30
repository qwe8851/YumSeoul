const router = require('express').Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    User.findAll()
        .then((users) => {
            if (!users.length) return res.status(404).send({ err: 'user not found' });
            res.send(`find successfully: ${users}`);
        })
        .catch(err => res.status(500).send(err));
});

// Create new user document
// router.post('/register', (req, res) => {
//     User.create(req.body)
//         .then(user => res.send("user"))
//         .catch(err => res.status(500).send(err));
// });

router.post('/register', async (req, res) => {
    try {
        // 상단에서 require로 가져온 User 스키마에 req.body를 담아 user라는 인스턴스로 만든다.
        const user = new User(req.body);
        const userInfo = await user.save();

        return res.status(200).json({
            success: true,
            userInfo
        });
    } catch (error) {
        return res.json({
            success: false,
            error
        });
    }
});

module.exports = router;