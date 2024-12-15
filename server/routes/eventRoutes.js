// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const { createEvent, getEvents, getEventById, updateEvent, deleteEvent } = require('../controllers/eventController');
const { protect } = require('../middlewares/authMiddleware'); // Protect middleware to secure routes
const { adminProtect } = require('../middlewares/adminAuthMiddleware');

// Route to create a new event
router.post('/', protect, createEvent);

// Route to get all events
router.get('/', getEvents);

// Route to get a specific events by user ID
router.get('/:id', protect, getEventById);

// Route to update an event by ID
router.put('/:id', protect, updateEvent);


// Route to update an event by ID
router.put('/admin/:id', adminProtect, updateEvent);

// Route to delete an event by ID
router.delete('/:id', protect, deleteEvent);


// Route to delete an event by ID from Admin
router.delete('/admin/:id', adminProtect, deleteEvent);

module.exports = router;
