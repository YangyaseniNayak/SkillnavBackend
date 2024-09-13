// src/routes/User/profileRoute.js
const express = require('express');
const router = express.Router();
const profileController = require('../../controllers/User/profileController');
const upload = require('../../config/multerConfig'); // Ensure this path is correct

// Route to create a new profile (with file upload)
router.post('/', upload.single('image'), profileController.createProfile);

// Route to get all profiles
router.get('/', profileController.getAllProfiles);

// Route to get a specific profile by ID
router.get('/:id', profileController.getProfileById);

// Route to update a specific profile by ID
router.put('/:id', upload.single('image'), profileController.updateProfile);

// Route to delete a specific profile by ID
router.delete('/:id', profileController.deleteProfile);

module.exports = router;
