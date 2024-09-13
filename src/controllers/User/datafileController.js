const Datafile = require('../../models/User/datafile'); // Ensure the path is correct

exports.createDatafile = async (req, res) => {
    // Extract fields from request body
    const { Name, Location, Amount, designation } = req.body;

    try {
        // Create a new Datafile document
        const datafile = new Datafile({
            Name: Name || '', // Provide default values if needed
            Location: Location || '',
            Amount: Amount || 0,
            designation: designation || ''
        });

        // Save the document to the database
        const savedDatafile = await datafile.save();

        // Respond with the saved document
        res.status(201).json(savedDatafile);
    } catch (error) {
        // Handle any errors
        res.status(400).json({ message: error.message });
    }
};


exports.getAllDatafiles = async (req, res) => {
    try {
        const datafiles = await Datafile.find();
        res.status(200).json(datafiles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getDatafileById = async (req, res) => {
    try {
        const datafile = await Datafile.findById(req.params.id);
        if (!datafile) {
            return res.status(404).json({ message: "Datafile not found" });
        }
        res.status(200).json(datafile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateDatafileById = async (req, res) => {
    try {
        const updatedDatafile = await Datafile.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDatafile) {
            return res.status(404).json({ message: "Datafile not found" });
        }
        res.status(200).json(updatedDatafile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteDatafileById = async (req, res) => {
    try {
        const deletedDatafile = await Datafile.findByIdAndDelete(req.params.id);
        if (!deletedDatafile) {
            return res.status(404).json({ message: "Datafile not found" });
        }
        res.status(200).json({ message: "Datafile deleted successfully", datafile: deletedDatafile });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
