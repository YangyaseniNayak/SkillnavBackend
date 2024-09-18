// src/routes/Partner/partnerprofileRoute.js
const express = require('express');
const router = express.Router();
const partnerprofileController = require('../../controllers/Partner/partnerProfileController');
const upload = require('../../config/multerConfig'); // Ensure this path is correct

// Route to create a new partnerprofile (with file upload)
router.post('/', upload.single('image'), partnerprofileController.createPartnerProfile);

// Route to get all partnerprofiles
router.get('/', partnerprofileController.getAllPartnerProfiles);

// Route to get a specific partnerprofile by ID
router.get('/:id', partnerprofileController.getPartnerProfileById);

// Route to update a specific partnerprofile by ID
router.put('/:id', upload.single('image'), partnerprofileController.updatePartnerProfile);

// Route to delete a specific partnerprofile by ID
router.delete('/:id', partnerprofileController.deletePartnerProfile);

module.exports = router;
