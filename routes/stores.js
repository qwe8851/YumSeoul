const router = require('express').Router();
const Store = require('../models/store');

// Find All
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

// Find One by storeid
router.get('/storeid/:storeid', (req, res) => {
    const storeId = req.params.storeid;

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

// Create new store
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
                error: error.message
            });
        });
});

// Update by storeid
router.put('/storeid/:storeid', (req, res) => {
    const storeId = req.params.storeid;
    const updateData = req.body;

    Store.findByIdAndUpdate(storeId, updateData, { new: true })
        .then((store) => {
            if (!store) {
                return res.status(404).json({
                    success: false,
                    error: 'Store not found'
                });
            }

            res.status(200).json({
                success: true,
                store: store
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                error: error.message
            });
        });
});

// Delete by todoid
router.delete("/storeid/:storeid", (req, res) => {
    const storeId = req.params.storeid;

    Store.findByIdAndRemove(storeId)
        .then((store) => {
            if (!store) {
                return res.status(404).json({
                    success: false,
                    error: 'Store not found'
                });
            }

            res.status(200).json({
                success: true,
                message: 'Store deleted successfully'
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