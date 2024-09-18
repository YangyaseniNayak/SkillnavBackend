const mongoose = require('mongoose');

const PartnerSupportfileSchema = new mongoose.Schema({
    FullName: {
        type: String,    
    },
    PartnerName: {
        type: String,    
    },
    EmailAddress: {
        type: String,    
    }, 
    Issues: {
        type: String,    
    },
    image: {
        type: String   // Ensure this matches the data type you want to store 
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    },    
    
});
module.exports = mongoose.model('PartnerSupportfile', PartnerSupportfileSchemaSupportfileSchema);
