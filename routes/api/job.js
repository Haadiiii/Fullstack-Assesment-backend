const express = require('express');
const router = express.Router();
const Job = require('../../models/Job');


// @route   GET api/job
// @desc    Get all jobs
// @access  Public

router.get('/', async (req, res) => {
    try{
        const jobs = await Job.find();
        if(!jobs) throw Error('No jobs');
        res.status(200).json(jobs);
    } catch(e) {
        res.status(400).json({ msg: e.message });
    }
}
);

// Get all recent jobs

router.get('/recent', (req, res) => {
    Job.find()
        .sort({ date: -1 })
        .limit(5)
        .then(jobs => res.json(jobs))
}
);

// @route   POST api/job
// @desc    Create a job
// @access  Public

router.post('/', (req, res) => {
    const newJob = new Job({
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        salary: req.body.salary,
    });

    newJob.save().then(job => res.json(job))
    .catch(err => res.status(404).json({ success: false }));
}
);

// @route   DELETE api/job/:id
// @desc    Delete a job
// @access  Public

router.delete('/:id', (req, res) => {
    Job.findById(req.params.id)
        .then(job => job.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
}
);

module.exports = router;
