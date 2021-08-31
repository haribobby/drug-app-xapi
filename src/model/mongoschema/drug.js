const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const drugschema = new Schema({

    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    popular: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Drug', drugschema);