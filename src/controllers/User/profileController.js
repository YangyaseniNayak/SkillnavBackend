// src/controllers/User/profileController.js
const Profile = require('../../models/User/profile');

exports.createProfile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        const profile = new Profile({
            FullName: req.body.FullName,
            EmailAddress: req.body.EmailAddress,
            Field: req.body.Field,
            EducationLevel: req.body.EducationLevel,
            DesiredField: req.body.DesiredField,
            Linkedin: req.body.Linkedin,
            Protofolio: req.body.Protofolio,
            DOB: new Date(req.body.DOB),
            image: req.file.path // Store the file path in the database
        });

        const savedProfile = await profile.save();
        res.status(201).json({
            message: 'Profile created successfully',
            file: `${req.protocol}://${req.get('host')}/uploads/${savedProfile.File}`
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

exports.getAllProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.status(200).json(profiles);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getProfileById = async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id);
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json(profile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const updatedProfile = await Profile.findByIdAndUpdate(
            req.params.id,
            {   FullName: req.body.FullName,
                EmailAddress: req.body.EmailAddress,
                Field: req.body.Field,
                EducationLevel: req.body.EducationLevel,
                DesiredField: req.body.DesiredField,
                Linkedin: req.body.Linkedin,
                Protofolio: req.body.Protofolio,
                DOB: new Date(req.body.DOB),
                image: req.file ? req.file.path : undefined 
            },
            { new: true }
        );
        if (!updatedProfile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteProfile = async (req, res) => {
    try {
        const deletedProfile = await Profile.findByIdAndDelete(req.params.id);
        if (!deletedProfile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json({ message: 'Profile deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
