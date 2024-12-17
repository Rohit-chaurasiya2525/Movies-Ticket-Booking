const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/movieBooking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema
const bookingSchema = new mongoose.Schema({
  name: String,
  Seat: String,
  contact: String,
  email: String,
  timing: String,
});
const Booking = mongoose.model('Booking', bookingSchema);

// API Endpoint
app.post('/book', async (req, res) => {
  const { name, movie, contact, email, timing } = req.body;
  
  if (!name || !movie || !contact || !email || !timing) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newBooking = new Booking({ name, movie, contact, email, timing });
    await newBooking.save();
    res.status(200).json({ message: 'Ticket booked successfully!' });
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({ message: 'Server Error' });
  }
});

// Server Start
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});






















// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect('mongodb://127.0.0.1:27017/movieBooking', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Schema
// const bookingSchema = new mongoose.Schema({
//   name: String,
//   movie: String,
//   contact:String,
//   email:String,
//   timing:String
// });
// const Booking = mongoose.model('Booking', bookingSchema);

// // API Endpoint
// app.post('/book', async (req, res) => {
//   const { name, movie } = req.body;
//   if (!name || !movie) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const newBooking = new Booking({ name, movie , contact , email , timing });
//     await newBooking.save();
//     res.status(200).json({ message: 'Ticket booked successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // Server Start
// app.listen(5000, () => {
//   console.log('Server running on http://localhost:5000');
// });
