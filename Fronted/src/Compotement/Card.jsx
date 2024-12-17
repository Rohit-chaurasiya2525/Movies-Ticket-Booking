

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [movie, setMovie] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [timing, setTiming] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/book', { name, movie, contact, email, timing });
      
      // Check if the response is successful
      if (response.status === 200) {
        alert(response.data.message);
        
        // Reset form fields after successful booking
        setName('');
        setMovie('');
        setContact('');
        setEmail('');
        setTiming('');
      } else {
        alert('Booking failed, try again');
      }
    } catch (error) {
      alert('Error booking ticket');
    }
  };

  return (
    <>
      <h3 className='text-center text-3xl text-red-500 font-extrabold mt-7 mb-7'>
        Book Now Your Movies Ticket !
      </h3>
      <div className='flex justify-evenly text-center'>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div className="card bg-gradient-to-r from-blue-200 to-indigo-400 w-72 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 rounded-lg">
            <figure className="px-6 pt-6">


              <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMiBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00419786-uxhdnmjfyt-portrait.jpg" alt="Movie" className="rounded-lg shadow-md" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">The Avengers</h2>
              <p className="text-gray-600 text-sm mb-4">Show Time: 7:00 PM</p>
              <div className="card-actions">
                <button
                  className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none text-white px-6 py-2 rounded-lg shadow-lg"
                  onClick={() => document.getElementById('my_modal_2').showModal()}
                >
                  Book Now!
                </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box h-auto w-[400px] rounded-lg shadow-lg bg-white">
                    <h3 className="font-bold text-2xl text-indigo-700 mb-5 text-center">
                      Book Your Ticket
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <div className="form-control mb-4">
                        <label className="label font-medium">Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name"
                          required
                          className="input input-bordered w-full"
                        />
                      </div>
                      <div className="form-control mb-4">
                        <label className="label font-medium">movie</label>
                        <select
                          value={movie}
                          onChange={(e) => setMovie(e.target.value)}
                          required
                          className="select select-bordered w-full"
                        >
                          <option value="">Select Seats</option>
                          <option value="1 Seat">1 Seat</option>
                          <option value="2 Seats">2 Seats</option>
                          <option value="3 Seats">3 Seats</option>
                          <option value="4 Seats">4 Seats</option>
                          <option value="5 Seats">5 Seats</option>
                          <option value="6 Seats">6 Seats</option>
                        </select>
                      </div>
                      <div className="form-control mb-4">
                        <label className="label font-medium">Contact Number</label>
                        <input
                          type="tel"
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          placeholder="Enter your contact number"
                          pattern="[0-9]{10}"
                          required
                          className="input input-bordered w-full"
                        />
                      </div>
                      <div className="form-control mb-4">
                        <label className="label font-medium">Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          required
                          className="input input-bordered w-full"
                        />
                      </div>
                      <div className="form-control mb-4">
                        <label className="label font-medium">Show Timing</label>
                        <select
                          value={timing}
                          onChange={(e) => setTiming(e.target.value)}
                          required
                          className="select select-bordered w-full"
                        >
                          <option value="">Select Timing</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                          <option value="7:00 PM">7:00 PM</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary w-full bg-indigo-600 hover:bg-indigo-700 border-none text-white px-4 py-2 rounded-lg mt-5"
                      >
                        Book Seat
                      </button>
                    </form>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg">
                      Close
                    </button>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      

<div style={{ textAlign: 'center', padding: '20px' }}>
  <div className="card bg-gradient-to-r from-green-200 to-teal-400 w-72 shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:scale-105 rounded-lg">
    <figure className="px-6 pt-6">
      <img
        src="image copy.png"
        alt="Shoes"
        className="rounded-lg shadow-md"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Show Collection</h2>
      <p className="text-gray-600 text-sm mb-4">Now's the best time to shop!</p>
      <div className="card-actions">
        <button
          className="btn btn-primary bg-teal-600 hover:bg-teal-700 border-none text-white px-6 py-2 rounded-lg shadow-lg"
          onClick={() => document.getElementById('my_modal_2').showModal()}
        >
          Book Now!
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box h-auto w-[400px] rounded-lg shadow-lg bg-white">
            <h3 className="font-bold text-2xl text-indigo-700 mb-5 text-center">Book Your Tickets</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <label className="label font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label font-medium">Seat</label>
                <select
                  value={movie}
                  onChange={(e) => setMovie(e.target.value)}
                  required
                  className="select select-bordered w-full"
                >
                  <option value="">Select Number of Seats</option>
                  <option value="seat 1">1 Seat</option>
                  <option value="seat 2">2 Seats</option>
                  <option value="seat 3">3 Seats</option>
                  <option value="seat 4">4 Seats</option>
                  <option value="seat 5">5 Seats</option>
                  <option value="seat 6">6 Seats</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full bg-teal-600 hover:bg-teal-700 border-none text-white px-4 py-2 rounded-lg mt-5"
              >
                Book Seat
              </button>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg">
              Close
            </button>
          </form>
        </dialog>
      </div>
    </div>
  </div>
</div>




<div style={{ textAlign: 'center', padding: '20px' }}>
  <div className="card bg-gradient-to-r from-blue-200 to-indigo-400 w-72 shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:scale-105 rounded-lg">
    <figure className="px-6 pt-6">
      <img
        src="image copy 2.png"
        alt="Shoes"
        className="rounded-lg shadow-md"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Haunted Raceway & Rolar Coaster</h2>
      <p className="text-gray-600 text-sm mb-4">Book your ticket now!</p>
      <div className="card-actions">
        <button
          className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none text-white px-6 py-2 rounded-lg shadow-lg"
          onClick={() => document.getElementById('my_modal_2').showModal()}
        >
          Book Now!
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box h-auto w-[400px] rounded-lg shadow-lg bg-white">
            <h3 className="font-bold text-2xl text-indigo-700 mb-5 text-center">Movie Ticket Booking</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <label className="label font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label font-medium">Seats</label>
                <select
                  value={movie}
                  onChange={(e) => setMovie(e.target.value)}
                  required
                  className="select select-bordered w-full"
                >
                  <option value="">Select Number of Seats</option>
                  <option value="seat 1">1 Seat</option>
                  <option value="seat 2">2 Seats</option>
                  <option value="seat 3">3 Seats</option>
                  <option value="seat 4">4 Seats</option>
                  <option value="seat 5">5 Seats</option>
                  <option value="seat 6">6 Seats</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full bg-indigo-600 hover:bg-indigo-700 border-none text-white px-4 py-2 rounded-lg mt-5"
              >
                Book Seat
              </button>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg">
              Close
            </button>
          </form>
        </dialog>
      </div>
    </div>
  </div>
</div>
<div style={{ textAlign: 'center', padding: '20px' }}>
  <div className="card bg-gradient-to-r from-blue-200 to-indigo-400 w-72 shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:scale-105 rounded-lg">
    <figure className="px-6 pt-6">
      <img
        src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00393344-ubdawnksbq-portrait.jpg"
        alt="Shoes"
        className="rounded-lg shadow-md"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Haunted Raceway & Rolar Coaster</h2>
      <p className="text-gray-600 text-sm mb-4">Book your ticket now!</p>
      <div className="card-actions">
        <button
          className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none text-white px-6 py-2 rounded-lg shadow-lg"
          onClick={() => document.getElementById('my_modal_2').showModal()}
        >
          Book Now!
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box h-auto w-[400px] rounded-lg shadow-lg bg-white">
            <h3 className="font-bold text-2xl text-indigo-700 mb-5 text-center">Movie Ticket Booking</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <label className="label font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label font-medium">Seats</label>
                <select
                  value={movie}
                  onChange={(e) => setMovie(e.target.value)}
                  required
                  className="select select-bordered w-full"
                >
                  <option value="">Select Number of Seats</option>
                  <option value="seat 1">1 Seat</option>
                  <option value="seat 2">2 Seats</option>
                  <option value="seat 3">3 Seats</option>
                  <option value="seat 4">4 Seats</option>
                  <option value="seat 5">5 Seats</option>
                  <option value="seat 6">6 Seats</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full bg-indigo-600 hover:bg-indigo-700 border-none text-white px-4 py-2 rounded-lg mt-5"
              >
                Book Seat
              </button>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg">
              Close
            </button>
          </form>
        </dialog>
      </div>
    </div>
  </div>
</div>




      </div>



      {/* Second Card Start */}


      <div className='flex justify-evenly text-center'>

<div style={{ textAlign: 'center', padding: '20px' }}>
<div className="card bg-gradient-to-r from-blue-200 to-indigo-400 w-72 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 rounded-lg">
<figure className="px-6 pt-6">
<img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00418174-vdbggkecmz-portrait.jpg" alt="Movie" className="rounded-lg shadow-md" />
</figure>
<div className="card-body items-center text-center">
<h2 className="text-xl font-bold text-gray-800 mb-2">The Avengers</h2>
<p className="text-gray-600 text-sm mb-4">Show Time: 7:00 PM</p>
<div className="card-actions">
  <button
    className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none text-white px-6 py-2 rounded-lg shadow-lg"
    onClick={() => document.getElementById('my_modal_2').showModal()}
  >
    Book Now!
  </button>
  <dialog id="my_modal_2" className="modal">
    <div className="modal-box h-auto w-[400px] rounded-lg shadow-lg bg-white">
      <h3 className="font-bold text-2xl text-indigo-700 mb-5 text-center">Book Your Ticket</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control mb-4">
          <label className="label font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control mb-4">
          <label className="label font-medium">How Many Seats?</label>
          <select
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            required
            className="select select-bordered w-full"
          >
            <option value="">Select Seats</option>
            <option value="1 Seat">1 Seat</option>
            <option value="2 Seats">2 Seats</option>
            <option value="3 Seats">3 Seats</option>
            <option value="4 Seats">4 Seats</option>
            <option value="5 Seats">5 Seats</option>
            <option value="6 Seats">6 Seats</option>
          </select>
        </div>
        <div className="form-control mb-4">
          <label className="label font-medium">Contact Number</label>
          <input
            type="tel"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter your contact number"
            pattern="[0-9]{10}"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control mb-4">
          <label className="label font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control mb-4">
          <label className="label font-medium">Show Timing</label>
          <select
            value={timing}
            onChange={(e) => setTiming(e.target.value)}
            required
            className="select select-bordered w-full"
          >
            <option value="">Select Timing</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="7:00 PM">7:00 PM</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full bg-indigo-600 hover:bg-indigo-700 border-none text-white px-4 py-2 rounded-lg mt-5"
        >
          Book Seat
        </button>
      </form>
    </div>
    <form method="dialog" className="modal-backdrop">
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg">
        Close
      </button>
    </form>
  </dialog>
</div>
</div>
</div>
</div>



<div style={{ textAlign: 'center', padding: '20px' }}>
<div className="card bg-gradient-to-r from-green-200 to-teal-400 w-72 shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:scale-105 rounded-lg">
<figure className="px-6 pt-6">
<img
  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00372125-bcwmffqqpd-portrait.jpg"
  alt="Shoes"
  className="rounded-lg shadow-md"
/>
</figure>
<div className="card-body items-center text-center">
<h2 className="text-xl font-semibold text-gray-800 mb-2">Show Collection</h2>
<p className="text-gray-600 text-sm mb-4">Now's the best time to shop!</p>
<div className="card-actions">
  <button
    className="btn btn-primary bg-teal-600 hover:bg-teal-700 border-none text-white px-6 py-2 rounded-lg shadow-lg"
    onClick={() => document.getElementById('my_modal_2').showModal()}
  >
    Book Now!
  </button>
  <dialog id="my_modal_2" className="modal">
    <div className="modal-box h-auto w-[400px] rounded-lg shadow-lg bg-white">
      <h3 className="font-bold text-2xl text-indigo-700 mb-5 text-center">Book Your Tickets</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control mb-4">
          <label className="label font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control mb-4">
          <label className="label font-medium">Movie</label>
          <select
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            required
            className="select select-bordered w-full"
          >
            <option value="">Select Number of Seats</option>
            <option value="seat 1">1 Seat</option>
            <option value="seat 2">2 Seats</option>
            <option value="seat 3">3 Seats</option>
            <option value="seat 4">4 Seats</option>
            <option value="seat 5">5 Seats</option>
            <option value="seat 6">6 Seats</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full bg-teal-600 hover:bg-teal-700 border-none text-white px-4 py-2 rounded-lg mt-5"
        >
          Book Seat
        </button>
      </form>
    </div>
    <form method="dialog" className="modal-backdrop">
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg">
        Close
      </button>
    </form>
  </dialog>
</div>
</div>
</div>
</div>




<div style={{ textAlign: 'center', padding: '20px' }}>
<div className="card bg-gradient-to-r from-blue-200 to-indigo-400 w-72 shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:scale-105 rounded-lg">
<figure className="px-6 pt-6">
<img
  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00392402-tskqhldwwr-portrait.jpg"
  alt="Shoes"
  className="rounded-lg shadow-md"
/>
</figure>
<div className="card-body items-center text-center">
<h2 className="text-xl font-semibold text-gray-800 mb-2">Haunted Raceway & Rolar Coaster</h2>
<p className="text-gray-600 text-sm mb-4">Book your ticket now!</p>
<div className="card-actions">
  <button
    className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none text-white px-6 py-2 rounded-lg shadow-lg"
    onClick={() => document.getElementById('my_modal_2').showModal()}
  >
    Book Now!
  </button>
  <dialog id="my_modal_2" className="modal">
    <div className="modal-box h-auto w-[400px] rounded-lg shadow-lg bg-white">
      <h3 className="font-bold text-2xl text-indigo-700 mb-5 text-center">Movie Ticket Booking</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control mb-4">
          <label className="label font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control mb-4">
          <label className="label font-medium">Seats</label>
          <select
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            required
            className="select select-bordered w-full"
          >
            <option value="">Select Number of Seats</option>
            <option value="seat 1">1 Seat</option>
            <option value="seat 2">2 Seats</option>
            <option value="seat 3">3 Seats</option>
            <option value="seat 4">4 Seats</option>
            <option value="seat 5">5 Seats</option>
            <option value="seat 6">6 Seats</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full bg-indigo-600 hover:bg-indigo-700 border-none text-white px-4 py-2 rounded-lg mt-5"
        >
          Book Seat
        </button>
      </form>
    </div>
    <form method="dialog" className="modal-backdrop">
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg">
        Close
      </button>
    </form>
  </dialog>
</div>
</div>
</div>
</div>
<div style={{ textAlign: 'center', padding: '20px' }}>
<div className="card bg-gradient-to-r from-blue-200 to-indigo-400 w-72 shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:scale-105 rounded-lg">
<figure className="px-6 pt-6">
<img
  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00397465-yzdbnpfqqk-portrait.jpg"
  alt="Shoes"
  className="rounded-lg shadow-md"
/>
</figure>
<div className="card-body items-center text-center">
<h2 className="text-xl font-semibold text-gray-800 mb-2">Haunted Raceway & Rolar Coaster</h2>
<p className="text-gray-600 text-sm mb-4">Book your ticket now!</p>
<div className="card-actions">
  <button
    className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none text-white px-6 py-2 rounded-lg shadow-lg"
    onClick={() => document.getElementById('my_modal_2').showModal()}
  >
    Book Now!
  </button>
  <dialog id="my_modal_2" className="modal">
    <div className="modal-box h-auto w-[400px] rounded-lg shadow-lg bg-white">
      <h3 className="font-bold text-2xl text-indigo-700 mb-5 text-center">Movie Ticket Booking</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control mb-4">
          <label className="label font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control mb-4">
          <label className="label font-medium">Seats</label>
          <select
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            required
            className="select select-bordered w-full"
          >
            <option value="">Select Number of Seats</option>
            <option value="seat 1">1 Seat</option>
            <option value="seat 2">2 Seats</option>
            <option value="seat 3">3 Seats</option>
            <option value="seat 4">4 Seats</option>
            <option value="seat 5">5 Seats</option>
            <option value="seat 6">6 Seats</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full bg-indigo-600 hover:bg-indigo-700 border-none text-white px-4 py-2 rounded-lg mt-5"
        >
          Book Seat
        </button>
      </form>
    </div>
    <form method="dialog" className="modal-backdrop">
      <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg">
        Close
      </button>
    </form>
  </dialog>
</div>
</div>
</div>
</div>




</div>





      {/* Third card Start */}








      <h3 className='text-center text-3xl text-red-500 font-extrabold mt-7 mb-7'>Your favirote Show  !</h3>
      <div className='flex justify-evenly text-center'>


        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div className="card bg-base-100 w-60 shadow-slate-900  shadow-inner hover:translate-x-2">
            <figure className="px-16 pt-10">
              <img
                src="image.png"
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">


              <div className="card-actions">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className=" btn btn-active btn-primary " onClick={() => document.getElementById('my_modal_2').showModal()}>Book Now! </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box h-96 w-96">
                    <h3 className="font-bold text-lg text-indigo-700 mb-7">MOVIES TICKET BOOKING</h3>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label>Name:</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label>Movie:</label>
                        <select value={movie} onChange={(e) => setMovie(e.target.value)} required>
                          <option value="">How Much Seat Book!</option>
                          <option value="seat 1">1 Seat</option>
                          <option value="seat 2">2 Seat</option>
                          <option value="seat 3">3 Seat</option>
                          <option value="seat 4">4 Seat</option>
                          <option value="seat 5">5 Seat</option>
                          <option value="seat 6">6 Seat</option>

                        </select>
                      </div>
                      <button type='submit' className="btn btn-active btn-primary mt-28">Book Seat</button>
                    </form>


                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
        </div>



        <div style={{ textAlign: 'center', padding: '20px' }}>

          <div className="card bg-base-100 w-60 shadow-slate-900  shadow-inner hover:translate-x-2">
            <figure className="px-16 pt-10">
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyOCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00423491-kssnplfxmy-portrait.jpg"
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">


              <div className="card-actions">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className=" btn btn-active btn-primary " onClick={() => document.getElementById('my_modal_2').showModal()}>Book Now! </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box h-96 w-96">
                    <h3 className="font-bold text-lg text-indigo-700 mb-7">MOVIES TICKET BOOKING</h3>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label>Name:</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label>Movie:</label>
                        <select value={movie} onChange={(e) => setMovie(e.target.value)} required>
                          <option value="">How Much Seat Book!</option>
                          <option value="seat 1">1 Seat</option>
                          <option value="seat 2">2 Seat</option>
                          <option value="seat 3">3 Seat</option>
                          <option value="seat 4">4 Seat</option>
                          <option value="seat 5">5 Seat</option>
                          <option value="seat 6">6 Seat</option>

                        </select>
                      </div>
                      <button type='submit' className="btn btn-active btn-primary mt-28">Book Seat</button>
                    </form>


                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
        </div>





        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div className="card bg-base-100 w-60 shadow-slate-900  shadow-inner hover:translate-x-2">
            <figure className="px-16 pt-10">
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNSBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00421197-ulnjwtejll-portrait.jpg"
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">


              <div className="card-actions">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className=" btn btn-active btn-primary " onClick={() => document.getElementById('my_modal_2').showModal()}>Book Now! </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box h-96 w-96">
                    <h3 className="font-bold text-lg text-indigo-700 mb-7">MOVIES TICKET BOOKING</h3>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label>Name:</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label>Movie:</label>
                        <select value={movie} onChange={(e) => setMovie(e.target.value)} required>
                          <option value="">How Much Seat Book!</option>
                          <option value="seat 1">1 Seat</option>
                          <option value="seat 2">2 Seat</option>
                          <option value="seat 3">3 Seat</option>
                          <option value="seat 4">4 Seat</option>
                          <option value="seat 5">5 Seat</option>
                          <option value="seat 6">6 Seat</option>

                        </select>
                      </div>
                      <button type='submit' className="btn btn-active btn-primary mt-28">Book Seat</button>
                    </form>


                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
        </div>



        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div className="card bg-base-100 w-60 shadow-slate-900  shadow-inner hover:translate-x-2">
            <figure className="px-16 pt-10">
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00420730-dvxvmarbvd-portrait.jpg"
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">


              <div className="card-actions">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className=" btn btn-active btn-primary " onClick={() => document.getElementById('my_modal_2').showModal()}>Book Now! </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box h-96 w-96">
                    <h3 className="font-bold text-lg text-indigo-700 mb-7">MOVIES TICKET BOOKING</h3>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label>Name:</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label>Movie:</label>
                        <select value={movie} onChange={(e) => setMovie(e.target.value)} required>
                          <option value="">How Much Seat Book!</option>
                          <option value="seat 1">1 Seat</option>
                          <option value="seat 2">2 Seat</option>
                          <option value="seat 3">3 Seat</option>
                          <option value="seat 4">4 Seat</option>
                          <option value="seat 5">5 Seat</option>
                          <option value="seat 6">6 Seat</option>

                        </select>
                      </div>
                      <button type='submit' className="btn btn-active btn-primary mt-28">Book Seat</button>
                    </form>


                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
        </div>

      </div>





      <div className='mt-6 flex mb-7 justify-center items-center'>
        <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1733903769350_venomthelastdanceweb.jpg" alt="" srcset="" />
      </div>
      <div className='mt-6 flex mb-7 justify-center items-center'>
        <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1734084144606_surajmukhicinemasweb.jpg" alt="" srcset="" />
      </div>

    </>
  );
}

export default App;
