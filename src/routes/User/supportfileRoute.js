// src/routes/User/supportfileRoute.js
const express = require('express');
const router = express.Router();
const supportfileController = require('../../controllers/User/supportfileController');
const upload = require('../../config/multerConfig'); // Ensure this path is correct

// Route to create a new supportfile (with file upload)
router.post('/', upload.single('image'), supportfileController.createSupportfile);

// Route to get all supportfiles
router.get('/', supportfileController.getAllSupportfiles);

// Route to get a specific supportfile by ID
router.get('/:id', supportfileController.getSupportfileById);

// Route to update a specific supportfile by ID
router.put('/:id', upload.single('image'), supportfileController.updateSupportfile);

// Route to delete a specific supportfile by ID
router.delete('/:id', supportfileController.deleteSupportfile);

module.exports = router;
