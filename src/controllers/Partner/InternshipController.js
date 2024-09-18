const Internships = require('../../models/Partner/postInternship');  // Ensure the correct model path

// Controller for creating a new  internship
exports.createInternship = async (req, res) => {
    try {
        const newInternship = new Internships(req.body);
        const savedInternship = await newInternship.save();
        res.status(201).json(savedInternship);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controller for getting all  internships
exports.getAllInternships = async (req, res) => {
    try {
        const internships = await Internships.find();
        res.json(internships);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller for getting an  internship by ID
exports.getInternshipById = async (req, res) => {
    try {
        const internship = await Internships.findById(req.params.id);
        if (!internship) return res.status(404).json({ message: 'Internship not found' });
        res.json(internship);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller for updating a specific  internship by ID
exports.updateInternshipById = async (req, res) => {
    try {
        const updatedInternship = await Internships.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedInternship) return res.status(404).json({ message: 'Internship not found' });
        res.json(updatedInternship);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controller for deleting an  internship by ID
exports.deleteInternshipById = async (req, res) => {
    try {
        const deletedInternship = await Internships.findByIdAndDelete(req.params.id);
        if (!deletedInternship) return res.status(404).json({ message: 'Internship not found' });
        res.json({ message: 'Internship deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
