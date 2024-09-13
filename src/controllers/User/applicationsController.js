const Applications = require('../../models/User/applications');

// Get all applications
exports.getAllApplications = async (req, res) => {
    try {
        const applications = await Applications.find();
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving applications', error });
    }
};

// Get single application by ID
exports.getApplicationById = async (req, res) => {
    try {
        const application = await Applications.findById(req.params.id);
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json(application);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving application', error });
    }
};

// Create a new application
exports.createApplication = async (req, res) => {
    try {
        const newApplication = new Applications(req.body);
        const savedApplication = await newApplication.save();
        res.status(201).json(savedApplication);
    } catch (error) {
        res.status(400).json({ message: 'Error creating application', error });
    }
};

// Update an existing application by ID
exports.updateApplication = async (req, res) => {
    try {
        const updatedApplication = await Applications.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedApplication) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json(updatedApplication);
    } catch (error) {
        res.status(400).json({ message: 'Error updating application', error });
    }
};

// Delete an application by ID
exports.deleteApplication = async (req, res) => {
    try {
        const deletedApplication = await Applications.findByIdAndDelete(req.params.id);
        if (!deletedApplication) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json({ message: 'Application deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting application', error });
    }
};
