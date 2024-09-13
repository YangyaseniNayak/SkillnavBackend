const mongoose = require('mongoose');

const ApplicationsSchema = new mongoose.Schema({
    JobTitleid: {
        type: String,  
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Applications', ApplicationsSchema);      