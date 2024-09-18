// src/models/messagefileModel.js
const mongoose = require('mongoose');

const messagefileSchema = new mongoose.Schema({
    Questions: { 
        type: String,
        required: true },
    File: {
       type: String,
       required: true } // Store the file URL here
});

const Messagefile = mongoose.model('Messagefile', messagefileSchema);
module.exports = Messagefile;
