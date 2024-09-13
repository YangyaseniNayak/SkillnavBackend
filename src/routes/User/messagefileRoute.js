// src/routes/User/messagefileRoute.js
const express = require('express');
const router = express.Router();
const messagefileController = require('../../controllers/User/messagefileController');
const upload = require('../../config/multerConfig'); // Ensure this path is correct

// Route to create a new messagefile (with file upload)
router.post('/', upload.single('File'), messagefileController.createMessagefile);

// Route to get all messagefiles
router.get('/', messagefileController.getAllMessagefiles);

// Route to get a specific messagefile by ID
router.get('/:id', messagefileController.getMessagefileById);

// Route to update a specific messagefile by ID
router.put('/:id', upload.single('File'), messagefileController.updateMessagefile);

// Route to delete a specific messagefile by ID
router.delete('/:id', messagefileController.deleteMessagefile);

module.exports = router;
