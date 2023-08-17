const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: [true,"name must be provided"],
        maxlength: [20,"name cannot exceed 20 characters"],
    },
    completed:{
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task', taskSchema)