const Event = require('../models/Event');

// Create a new event
const createEvent = async (req, res) => {
  const { title, description, date, location } = req.body;

  try {
    const newEvent = new Event({
      title,
      description,
      date,
      location,
      createdById: req.user._id, // The user ID is taken from the middleware after authentication
      createdBy: req.user.username, // The username is taken from the middleware after authentication
    });
    await newEvent.save();
    res.status(201).json(newEvent); // Respond with the newly created event
  } catch (err) {
    res.status(500).json({ message: 'Error creating event' }); // Error handling
  }
};

// Get all events (for an authenticated user)
const getEvents = async (req, res) => {
  try {
    const events = await Event.find({}).sort({ createdAt: -1 });; // Fetch events created by the authenticated user

    res.status(200).json(events); // Respond with the list of events
  } catch (err) {
    res.status(500).json({ message: 'Error fetching events' }); // Error handling
  }
};

// Get a specific event by ID
const getEventById = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.find({ createdById: id }).sort({ createdAt: -1 }); // Find the event by ID

    if (!event) {
      return res.status(404).json({ message: 'Event not found' }); // If event not found
    }
    res.status(200).json(event); // Respond with the event data
  } catch (err) {
    res.status(500).json({ message: 'Error fetching event' }); // Error handling
  }
};

// Update an event by ID
const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, description, date, location } = req.body;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      { title, description, date, location }, // Fields to update
      { new: true } // Return the updated event after modification
    );
    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' }); // If event not found
    }
    res.status(200).json(updatedEvent); // Respond with the updated event data
  } catch (err) {
    res.status(500).json({ message: 'Error updating event' }); // Error handling
  }
};

// Delete an event by ID
const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEvent = await Event.findByIdAndDelete(id); // Delete the event by ID
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' }); // If event not found
    }
    res.status(200).json({ message: 'Event deleted successfully' }); // Respond with success message
  } catch (err) {
    res.status(500).json({ message: 'Error deleting event' }); // Error handling
  }
};

// Export the controller functions
module.exports = {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
