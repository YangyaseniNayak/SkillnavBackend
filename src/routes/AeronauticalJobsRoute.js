const express = require('express');
const router = express.Router();
const aeronauticalJobsController = require('../controllers/AeronauticalJobController');  // Ensure the correct file path

// Define routes and ensure all controller functions exist
router.post('/', aeronauticalJobsController.createAeronauticalJob);  // Create a new Aeronautical job
router.get('/', aeronauticalJobsController.getAllAeronauticalJobs);  // Retrieve all Aeronautical jobs
router.get('/:id', aeronauticalJobsController.getAeronauticalJobById);  // Retrieve a specific Aeronautical job by ID
router.put('/:id', aeronauticalJobsController.updateAeronauticalJobById);  // Update a specific Aeronautical job by ID
router.delete('/:id', aeronauticalJobsController.deleteAeronauticalJobById);  // Delete a specific Aeronautical job by ID

module.exports = router;
