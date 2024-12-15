// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Register a new user
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ username, email, password });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.status(201).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Log in a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Wrong password' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.json({ user, token });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all users' profiles
const getAllUsersProfiles = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) return res.status(404).json({ message: 'User not found' });

    // Success response
    res.status(200).json({
      success: true,
      count: users.length,
      users: users,
    });
  } catch (err) {
    // Server error response
    res.status(500).json({
      success: false,
      message: 'Server error. Unable to fetch users.',
    });
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  const { username, email } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.username = username || user.username;
    user.email = email || user.email;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update user profile by Admin
const updateUserProfileByAdmin = async (req, res) => {
  const { role } = req.body;
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User not found", success: false });

    user.isAdmin = role === "Admin"; // Update role
    await user.save();

    // Retrieve the updated list of all users
    const users = await User.find();  // You can add pagination or filtering here if needed

    res.status(200).json({
      message: "User role updated successfully",
      success: true,
      users, // Return the updated list of users
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
}

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile, getAllUsersProfiles, updateUserProfileByAdmin };
