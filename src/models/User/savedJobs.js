const mongoose = require('mongoose');

const SavedJobsSchema = new mongoose.Schema({
    JobTitleid: {
        type: String,  
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('SavedJobs', SavedJobsSchema);      