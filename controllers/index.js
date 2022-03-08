const router = require('express').Router();

const apiRoutes = require('./api/');

// Tells server.js where to locate all routes
router.use('/api', apiRoutes);

module.exports = router;