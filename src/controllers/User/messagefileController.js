// src/controllers/User/messagefileController.js
const Messagefile = require('../../models/User/messagefile');

exports.createMessagefile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        const messagefile = new Messagefile({
            Questions: req.body.Questions,
            File: req.file.path // Store the file path in the database
        });

        const savedMessagefile = await messagefile.save();
        res.status(201).json({
            message: 'Messagefile created successfully',
            file: `${req.protocol}://${req.get('host')}/uploads/${savedMessagefile.File}`
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

exports.getAllMessagefiles = async (req, res) => {
    try {
        const messagefiles = await Messagefile.find();
        res.status(200).json(messagefiles);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getMessagefileById = async (req, res) => {
    try {
        const messagefile = await Messagefile.findById(req.params.id);
        if (!messagefile) {
            return res.status(404).json({ message: 'Messagefile not found' });
        }
        res.status(200).json(messagefile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateMessagefile = async (req, res) => {
    try {
        const updatedMessagefile = await Messagefile.findByIdAndUpdate(
            req.params.id,
            { Questions: req.body.Questions, File: req.file ? req.file.path : undefined },
            { new: true }
        );
        if (!updatedMessagefile) {
            return res.status(404).json({ message: 'Messagefile not found' });
        }
        res.status(200).json(updatedMessagefile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteMessagefile = async (req, res) => {
    try {
        const deletedMessagefile = await Messagefile.findByIdAndDelete(req.params.id);
        if (!deletedMessagefile) {
            return res.status(404).json({ message: 'Messagefile not found' });
        }
        res.status(200).json({ message: 'Messagefile deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
