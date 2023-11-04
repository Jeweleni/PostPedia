const express = require('express');
const router = express.Router();
const passport = require('../controllers/auth');


router.get('/login/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));


router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

module.exports = router;
