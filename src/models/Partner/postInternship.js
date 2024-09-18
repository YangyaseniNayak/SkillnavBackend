const mongoose = require('mongoose');

const PostInternshipSchema = new mongoose.Schema({
    InternshipTitle: {
        type: String,     
    },
    OrganizationName: {
        type: String,    
    },
    InternshipDescription: {
        type: String,    
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    },
    InternshipType: {
        type: String,    
    },
    Location: {
        type: String
    },
    InternshipFormat: {
        type: String
    },
    Duration: {
        type: String
    },
    Compensation: {
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
      }] , 
      createdAt: {
        type: Date,
        default: Date.now
    }, 
});
module.exports = mongoose.model('PostInternship', PostInternshipSchema);
