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
  
        res.redirect('https://post-pedia-v1.vercel.app/');
    });

router.post('/register', register)
router.post('/login', login);

module.exports = router;
