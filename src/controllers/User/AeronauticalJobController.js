const AeronauticalJobs = require('../../models/User/Aeronautical_jobs');  // Ensure the correct model path

// Controller for creating a new Aeronautical job
exports.createAeronauticalJob = async (req, res) => {
    try {
        const newJob = new AeronauticalJobs(req.body);
        const savedJob = await newJob.save();
        res.status(201).json(savedJob);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controller for getting all Aeronautical jobs
exports.getAllAeronauticalJobs = async (req, res) => {
    try {
        const jobs = await AeronauticalJobs.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller for getting an Aeronautical job by ID
exports.getAeronauticalJobById = async (req, res) => {
    try {
        const job = await AeronauticalJobs.findById(req.params.id);
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.json(job);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller for updating a specific Aeronautical job by ID
exports.updateAeronauticalJobById = async (req, res) => {
    try {
        const updatedJob = await AeronauticalJobs.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedJob) return res.status(404).json({ message: 'Job not found' });
        res.json(updatedJob);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controller for deleting an Aeronautical job by ID
exports.deleteAeronauticalJobById = async (req, res) => {
    try {
        const deletedJob = await AeronauticalJobs.findByIdAndDelete(req.params.id);
        if (!deletedJob) return res.status(404).json({ message: 'Job not found' });
        res.json({ message: 'Job deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
