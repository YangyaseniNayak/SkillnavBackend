const express = require('express');
const router = express.Router();
const datafileController = require('../../controllers/User/datafileController');

// Optional: Middleware for authentication or validation
// const authMiddleware = require('../middleware/auth');
// router.use(authMiddleware); // Use if authentication is needed

// Define routes
router.post('/', datafileController.createDatafile);  // Create a new datafile
router.get('/', datafileController.getAllDatafiles);  // Retrieve all datafiles
router.get('/:id', datafileController.getDatafileById);  // Retrieve a specific datafile by ID
router.put('/:id', datafileController.updateDatafileById);  // Update a specific datafile by ID
router.delete('/:id', datafileController.deleteDatafileById);  // Delete a specific datafile by ID

module.exports = router;
