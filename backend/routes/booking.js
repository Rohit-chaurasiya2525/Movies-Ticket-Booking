const express = require('express');
const Booking = require('../models/Booking'); // Corrected path
const router = express.Router();

// Define the POST route for booking creation
router.post('/create', async (req, res) => {
    const { seats, timing, venue, theater } = req.body;

    try {
        // Create a new booking document
        const newBooking = new Booking({
            seats,
            timing,
            venue,
            theater: venue === 'Varanasi' ? theater : '', // Only store theater if venue is Varanasi
        });

        // Save the booking to MongoDB
        await newBooking.save();

        res.status(201).json({ success: true, message: 'Booking created successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
