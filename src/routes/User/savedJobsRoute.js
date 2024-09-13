const express = require('express');
const router = express.Router();
const savedJobsController = require('../../controllers/User/savedJobsController');

// Routes
router.get('/', savedJobsController.getAllSavedJobs);           // Get all savedJobs
router.get('/:id', savedJobsController.getSavedJobsById);        // Get savedJobs by ID
router.post('/', savedJobsController.createSavedJobs);           // Create a new savedJobs
router.put('/:id', savedJobsController.updateSavedJobs);         // Update savedJobs by ID
router.delete('/:id', savedJobsController.deleteSavedJobs);      // Delete savedJobs by ID

module.exports = router;

