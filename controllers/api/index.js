const router = require('express').Router();

// define drink-routes, drink-type-routes, and user-routes for server.js
const drinkRoutes = require('./drink-routes');
const drinkTypeRoutes = require('./drink-type-routes');
const userRoutes = require('./user-routes');

router.use('/drinks', drinkRoutes);
router.use('/drinkTypes', drinkTypeRoutes);
router.use('/users', userRoutes);

module.exports = router;