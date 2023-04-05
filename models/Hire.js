const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const HireSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Hire = mongoose.model('hire', HireSchema);
