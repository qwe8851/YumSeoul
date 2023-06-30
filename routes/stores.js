const router = require('express').Router();
const Store = require('../models/store');

router.get('/', (req, res) => {
    Store.findAll()
        .then((stores) => {
            res.status(200).json({
                success: true,
                stores: stores,
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                error: error.message,
            });
        });
});

router.get('/:id', (req, res) => {
    const storeId = req.params.id;

    Store.findById(storeId)
        .then((store) => {
            if (!store) {
                return res.status(404).json({
                    success: false,
                    error: 'Store not found',
                });
            }

            res.status(200).json({
                success: true,
                store: store,
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                error: error.message,
            });
        });
});

router.post('/', (req, res) => {
    const store = new Store(req.body);

    store.save()
        .then((storeInfo) => {
            res.status(200).json({
                success: true,
                storeInfo
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                error
            });
        });
});

module.exports = router;