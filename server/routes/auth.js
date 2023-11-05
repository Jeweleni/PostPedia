const express = require('express');
const router = express.Router();
const {passport, register, login} = require('../controllers/auth');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');


router.get('/login/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));


router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('https://post-pedia-v1.vercel.app/');
    });
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('https://post-pedia-v1.vercel.app/');
});

router.get('/user', (req, res) => {
    if (req.isAuthenticated()) {
      res.json(req.user); 
    } else {
      res.json({ message: 'Not authenticated' });
    }
  });
    

router.post('/register', register);
router.post('/login', passport.authenticate('local', { successRedirect: 'https://post-pedia-v1.vercel.app', 
failureRedirect: 'https://post-pedia-v1.vercel.app/auth',   }));

module.exports = router;
