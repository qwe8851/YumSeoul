const router = require('express').Router();
const upload = require('../models/upload');

router.post('/', upload.single('image'), async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            imagePath: req.file,
        });
    } catch (error) {
        next(error);
        return res.json({
            success: false,
            error: error.message,
        });
    }
});

module.exports = router;
