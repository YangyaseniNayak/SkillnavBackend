// src/controllers/User/supportfileController.js
const Supportfile = require('../../models/User/supportfile');

exports.createSupportfile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        const supportfile = new Supportfile({
            FullName: req.body.FullName,
            EmailAddress: req.body.EmailAddress,
            Issues: req.body.Issues,
  
            image: req.file.path // Store the file path in the database
        });

        const savedSupportfile = await supportfile.save();
        res.status(201).json({
            message: 'Supportfile created successfully',
            file: `${req.protocol}://${req.get('host')}/uploads/${savedSupportfile.File}`
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

exports.getAllSupportfiles = async (req, res) => {
    try {
        const supportfiles = await Supportfile.find();
        res.status(200).json(supportfiles);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getSupportfileById = async (req, res) => {
    try {
        const supportfile = await Supportfile.findById(req.params.id);
        if (!supportfile) {
            return res.status(404).json({ message: 'Supportfile not found' });
        }
        res.status(200).json(supportfile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateSupportfile = async (req, res) => {
    try {
        const updatedSupportfile = await Supportfile.findByIdAndUpdate(
            req.params.id,
            {  FullName: req.body.FullName,
                EmailAddress: req.body.EmailAddress,
                Issues: req.body.Issues,
                image: req.file ? req.file.path : undefined 
            },
            { new: true }
        );
        if (!updatedSupportfile) {
            return res.status(404).json({ message: 'Supportfile not found' });
        }
        res.status(200).json(updatedSupportfile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteSupportfile = async (req, res) => {
    try {
        const deletedSupportfile = await Supportfile.findByIdAndDelete(req.params.id);
        if (!deletedSupportfile) {
            return res.status(404).json({ message: 'Supportfile not found' });
        }
        res.status(200).json({ message: 'Supportfile deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
