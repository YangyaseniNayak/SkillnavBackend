const express = require('express');
const router = express.Router();
const InternshipController = require('../../controllers/Partner/InternshipController');  // Ensure the correct file path

// Define routes and ensure all controller functions exist
router.post('/', InternshipController.createInternship);  // Create a new Internship
router.get('/', InternshipController.getAllInternships);  // Retrieve all Internship
router.get('/:id', InternshipController.getInternshipById);  // Retrieve a specific Internship by ID
router.put('/:id', InternshipController.updateInternshipById);  // Update a specific Internship by ID
router.delete('/:id', InternshipController.deleteInternshipById);  // Delete a specific Internship by ID

module.exports = router;
