const mongoose = require('mongoose');

const SupportfileSchema = new mongoose.Schema({
    FullName: {
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
module.exports = mongoose.model('Supportfile', SupportfileSchema);
