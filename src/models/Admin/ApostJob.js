const mongoose = require('mongoose');

const PostJobSchema = new mongoose.Schema({
    JobTitle: {
        type: String,     
    },
    JobDescription: {
        type: String,    
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    },
    JobType: {
        type: String,    
    },
    Location: {
        type: String
    },
    JobFormat: {
        type: String
    },
    Compensation: {
        type: Number
    },
    SkillsRequired: {
      type: [String]      
    }     
});
module.exports = mongoose.model('PostJob', PostJobSchema);
