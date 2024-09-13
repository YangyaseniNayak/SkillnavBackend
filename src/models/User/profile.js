const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    FullName: {
        type: String,    
    },
    EmailAddress: {
        type: String,    
    }, 
    DOB: {
        type: Date,
    },
    Field: {
        type: String,    
    },
    EducationLevel: {
        type: String
    },
    DesiredField: {
        type: String
    },
    Linkedin: {
        type: String
    },   
    Protofolio: {
        type: String
    },
    image: {
        type: String 
    },  
    createdAt: {
        type: Date,
        default: Date.now
    },  
    
});
module.exports = mongoose.model('Profile', ProfileSchema);
