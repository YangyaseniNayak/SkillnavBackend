const mongoose = require('mongoose');

const DatafileSchema = new mongoose.Schema({
    Name: {
        type: String,
        
    },
    Location: {
        type: String
    },
    Amount: {
        type: Number
    },
    designation: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Datafile', DatafileSchema);
