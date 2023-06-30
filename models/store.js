const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    storeName: {
        type: String,
        maxLength: 50,
        trim: true,
    },
    storeImage: {
        type: String,
        maxLength: 30,
    },
    storeDescription: {
        type: String,
        minlength: 8,
        maxLength: 50,
    },
    storeCategory: {
        type: Number,
        default: 0,
    },
    storeFollow: {
        type: Number,
        default: 0,
    },
    menu: {
        menuTitle: {
            type: String,
            minlength: 1,
            maxLength: 20,
            unique: 1,
        },
        menuImage: {
            type: String,
        },
        menuDescription: {
            type: String,
            maxLength: 30,
        },
        menuPrice: {
            type: Number,
            default: 0,
        }
    },
    review : {
        reviewStart: {
            type: Number,
            min: 1,
            max: 5
        },
        reviewImage: {
            type: String,
        },
        reviewDescription: {
            type: String,
            maxLength: 100,
        }
    }
});

storeSchema.statics.findAll = function () {
    return this.find();
};

module.exports = mongoose.model('Store', storeSchema);