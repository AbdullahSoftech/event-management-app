// models/Event.js
const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    createdById: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    createdBy:{
      type: mongoose.Schema.Types.String,
      required: true,
      ref: 'users', // Reference to User model
      default: 'System' // Set default value to 'System' if no user is associated with the event
    }
  },
  {
    timestamps: true, // Automatically create createdAt and updatedAt fields
  }
);

const Event = mongoose.model('events', eventSchema);

module.exports = Event;
