const router = require('express').Router();
const Main = require('../models/main');

// Find all main content
router.get('/', (req, res) => {
    Main.findAll()
        .then((main) => {
            res.status(200).json({
                success: true,
                main: main,
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                error: error.message,
            });
        });
});

// Create new main content
router.post('/', async (req, res) => {
    const main = new Main(req.body);

    main.save()
        .then((mainContent) => {
            res.status(200).json({
                success: true,
                mainContent
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                error: error.message
            });
        });
});

module.exports = router;