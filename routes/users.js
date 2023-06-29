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

router.post('/register', (req, res) => {
    const user = new User(req.body); // 상단에서 require로 가져온 User 스키마에 req.body를 담아 user라는 인스턴스로 만든다.

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err }); // err일 경우 return 값
        return res.status(200).json({
            //status가 200일 경우 return 값
            success: true,
            userInfo,
        });
    });
});

module.exports = router;