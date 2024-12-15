const jwt = require('jsonwebtoken');
const User = require('../models/User');

const adminProtect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            
            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Fetch user without the password
            req.user = await User.findById(decoded.id).select('-password');

            // Check if user exists and is admin
            if (req.user) {
                if (req.user.isAdmin) {
                    next(); // Proceed to the next function
                } else {
                    return res.status(403).json({ message: 'Access denied: Admins only' });
                }
            } else {
                return res.status(404).json({ message: 'User not found' });
            }

        } catch (err) {
            console.error('Error with token verification:', err.message);
            return res.status(401).json({ message: 'Not authorized, token invalid' });
        }
    } else {
        return res.status(401).json({ message: 'Not authorized, no token provided' });
    }
};

module.exports = { adminProtect };
