// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, updateUserProfile, getAllUsersProfiles, updateUserProfileByAdmin } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');
const { adminProtect } = require('../middlewares/adminAuthMiddleware');

// Route to register a new user
router.post('/register', registerUser);

// Route to login a user
router.post('/login', loginUser);

// Route to get all users profiles
router.get('/users-profiles', adminProtect, getAllUsersProfiles)

// Route to get the logged-in user's profile
router.get('/profile', protect, getUserProfile);

// Route to update the logged-in user's profile
router.put('/profile', protect, updateUserProfile);


// Route to update the user's profile by Admin
router.put('/admin/users/:id', adminProtect, updateUserProfileByAdmin);

module.exports = router;
