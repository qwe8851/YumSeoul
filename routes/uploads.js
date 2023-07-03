const router = require('express').Router();
const Upload = require('../models/upload');

// router.post('/uploads, Upload.single('image'), async (req, res, next) => {
router.post('/', Upload.single('image'), async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            imagePath: req.file.location
        });
    } catch (error) {
        next(error);
        return res.json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;