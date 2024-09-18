const mongoose = require('mongoose');

const PartnerProfileSchema = new mongoose.Schema({
    PartnerName: {
        type: String,    
    },
    PartnerID: {
        type: String,    
    }, 
    EmailAddress: {
        type: String,    
    }, 
    image: {
        type: String 
    },  
    createdAt: {
        type: Date,
        default: Date.now
    },  
    
});
module.exports = mongoose.model('PartnerProfile', PartnerProfileSchema);
