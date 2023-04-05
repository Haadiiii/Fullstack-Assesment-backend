const express = require('express');
const router = express.Router();
const Hire = require('../../models/Hire');


// @route   GET api/hire
// @desc    Get all hires
// @access  Public

router.get('/', async (req, res) => {
    try{
        const hires = await Hire.find();
        if(!hires) throw Error('No hires');
        res.status(200).json(hires);
    } catch(e) {
        res.status(400).json({ msg: e.message });
    }
}
);

// @route   POST api/hire
// @desc    Create a hire
// @access  Public

router.post('/', (req, res) => {
    const newHire = new Hire({
        title: req.body.title,
        name: req.body.name,
        location: req.body.location,
        salary: req.body.salary,
    });

    newHire.save().then(hire => res.json(hire))
    .catch(err => res.status(404).json({ success: false }));
}
);

module.exports = router;