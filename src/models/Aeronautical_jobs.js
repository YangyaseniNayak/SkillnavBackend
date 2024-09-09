const mongoose = require('mongoose');

const Aeronautical_jobsSchema = new mongoose.Schema({
    JobTitle: {
        type: String,
        
    },
    CompanyName: {
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
    Designation: {
        type: String
    },
    Duration: {
        type: String
    },
    Amount: {
        type: Number
    },
    details: [
      {
        AboutJob: {
          title: String,    
          content: String,  
      },
        SkillsRequired: {
           type: [String]      
        }     
    }
    ]
});
module.exports = mongoose.model('AeronauticalJobs', Aeronautical_jobsSchema);
