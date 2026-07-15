import express from 'express';
import Country from '../models/Country.js';
import Service from '../models/Service.js';
import Assessment from '../models/Assessment.js';
import Booking from '../models/Booking.js';

const router = express.Router();

// GET all countries
router.get('/countries', async (req, res) => {
  try {
    const countries = await Country.find({});
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: 'Server Error fetching countries', error: error.message });
  }
});

// GET all services
router.get('/services', async (req, res) => {
  try {
    const services = await Service.find({});
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Server Error fetching services', error: error.message });
  }
});

// POST user points assessment
router.post('/assessments', async (req, res) => {
  try {
    const { destination, visaType, age, education, experience, englishScore, score } = req.body;
    
    if (!destination || !visaType || !age || !education || !experience || !englishScore || score === undefined) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const newAssessment = new Assessment({
      destination,
      visaType,
      age,
      education,
      experience,
      englishScore,
      score
    });

    const savedAssessment = await newAssessment.save();
    res.status(201).json(savedAssessment);
  } catch (error) {
    res.status(500).json({ message: 'Server Error saving assessment', error: error.message });
  }
});

// POST user consultation booking
router.post('/bookings', async (req, res) => {
  try {
    const { fullName, email, phone, destination, message } = req.body;
    
    if (!fullName || !email || !phone || !destination) {
      return res.status(400).json({ message: 'Please provide name, email, phone, and destination' });
    }

    const newBooking = new Booking({
      fullName,
      email,
      phone,
      destination,
      message
    });

    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({ message: 'Server Error saving booking', error: error.message });
  }
});

export default router;
