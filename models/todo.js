const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todoid: { 
        type: Number, 
        required: true, 
        unique: true 
    },
    content: { 
        type: String, 
        required: true 
    },
    completed: { 
        type: String, 
        default: false 
    }
},
{
    timestamps: true
});

// Create new todo document
todoSchema.statics.create = function (payload) {
    const todo = new this(payload);

    return todo.save();
};

// Find All
todoSchema.statics.findAll = function () {
    return this.find({});
};

// Find One by todoid
todoSchema.statics.findOneByTodoid = function (todoid) {
    return this.findOne({ todoid });
};

// Update by todoid
todoSchema.statics.updateByTodoid = function (todoid, payload) {
    // { new: true }: return the modified document rather than the original. defaults to false
    return this.findOneAndUpdate({ todoid }, payload, { new: true });
};

// Delete by todoid
todoSchema.statics.deleteByTodoid = function (todoid) {
    return this.remove({ todoid });
};

// Create Model & Export
module.exports = mongoose.model('Todo', todoSchema);