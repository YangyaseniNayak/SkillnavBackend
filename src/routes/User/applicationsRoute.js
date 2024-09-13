const express = require('express');
const router = express.Router();
const applicationsController = require('../../controllers/User/applicationsController');

// Routes
router.get('/', applicationsController.getAllApplications);           // Get all applications
router.get('/:id', applicationsController.getApplicationById);        // Get application by ID
router.post('/', applicationsController.createApplication);           // Create a new application
router.put('/:id', applicationsController.updateApplication);         // Update application by ID
router.delete('/:id', applicationsController.deleteApplication);      // Delete application by ID

module.exports = router;
