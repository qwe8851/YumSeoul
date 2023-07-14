const mongoose = require('mongoose');

const mainSchema = mongoose.Schema({
    mainTitle: {
        type: String,
        minlength: 1,
        maxLength: 30,
    },
    menuImage: {
        type: String,
        minlength: 1,
    },
    mainDescription: {
        type: String,
        maxLength: 60,
    },
});

mainSchema.statics.findAll = function () {
    return this.find();
};

module.exports = mongoose.model('Main', mainSchema);