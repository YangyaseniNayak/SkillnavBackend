const SavedJobs = require('../../models/User/savedJobs');

// Get all savedJobs
exports.getAllSavedJobs = async (req, res) => {
    try {
        const savedJobs = await SavedJobs.find();
        res.status(200).json(savedJobs);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving savedJobs', error });
    }
};

// Get single savedJobs by ID
exports.getSavedJobsById = async (req, res) => {
    try {
        const savedJobs = await SavedJobs.findById(req.params.id);
        if (!savedJobs) {
            return res.status(404).json({ message: 'SavedJobs not found' });
        }
        res.status(200).json(savedJobs);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving savedJobs', error });
    }
};

// Create a new savedJobs
exports.createSavedJobs = async (req, res) => {
    try {
        const newSavedJobs = new SavedJobs(req.body);
        const savedSavedJobs = await newSavedJobs.save();
        res.status(201).json(savedSavedJobs);
    } catch (error) {
        res.status(400).json({ message: 'Error creating savedJobs', error });
    }
};

// Update an existing savedJobs by ID
exports.updateSavedJobs = async (req, res) => {
    try {
        const updatedSavedJobs = await SavedJobs.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSavedJobs) {
            return res.status(404).json({ message: 'SavedJobs not found' });
        }
        res.status(200).json(updatedSavedJobs);
    } catch (error) {
        res.status(400).json({ message: 'Error updating savedJobs', error });
    }
};

// Delete an savedJobs by ID
exports.deleteSavedJobs = async (req, res) => {
    try {
        const deletedSavedJobs = await SavedJobs.findByIdAndDelete(req.params.id);
        if (!deletedSavedJobs) {
            return res.status(404).json({ message: 'SavedJobs not found' });
        }
        res.status(200).json({ message: 'SavedJobs deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting savedJobs', error });
    }
};
