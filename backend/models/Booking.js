const mongoose = require('mongoose');

// Schema for Booking
const bookingSchema = new mongoose.Schema({
    seats: {
        type: Number,
        required: true
    },
    timing: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    theater: {
        type: String,
        required: false
    }
});

// Model creation from schema
const Booking = mongoose.model('Booking', bookingSchema);

// Export the model to use in other files
module.exports = Booking;
