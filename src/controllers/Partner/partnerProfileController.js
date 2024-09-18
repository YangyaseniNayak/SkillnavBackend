// src/controllers/Partner/partnerprofileController.js
const PartnerProfile = require('../../models/Partner/partnerProfile');

exports.createPartnerProfile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        const partnerprofile = new PartnerProfile({
            PartnerName: req.body.PartnerName,
            PartnerID: req.body.PartnerID,
            EmailAddress: req.body.EmailAddress,
            image: req.file.path // Store the file path in the database
        });     

        const savedPartnerProfile = await partnerprofile.save();
        res.status(201).json({
            message: 'PartnerProfile created successfully',
            file: `${req.protocol}://${req.get('host')}/uploads/${savedPartnerProfile.File}`
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
 
exports.getAllPartnerProfiles = async (req, res) => {
    try {
        const partnerprofiles = await PartnerProfile.find();
        res.status(200).json(partnerprofiles);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getPartnerProfileById = async (req, res) => {
    try {
        const partnerprofile = await PartnerProfile.findById(req.params.id);
        if (!partnerprofile) {
            return res.status(404).json({ message: 'PartnerProfile not found' });
        }
        res.status(200).json(partnerprofile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updatePartnerProfile = async (req, res) => {
    try {
        const updatedPartnerProfile = await PartnerProfile.findByIdAndUpdate(
            req.params.id,
            {   PartnerName: req.body.PartnerName,
                PartnerID: req.body.PartnerID,
                EmailAddress: req.body.EmailAddress,
                image: req.file ? req.file.path : undefined 
            },
            { new: true }
        );
        if (!updatedPartnerProfile) {
            return res.status(404).json({ message: 'PartnerProfile not found' });
        }
        res.status(200).json(updatedPartnerProfile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePartnerProfile = async (req, res) => {
    try {
        const deletedPartnerProfile = await PartnerProfile.findByIdAndDelete(req.params.id);
        if (!deletedPartnerProfile) {
            return res.status(404).json({ message: 'PartnerProfile not found' });
        }
        res.status(200).json({ message: 'PartnerProfile deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
