const router = require('express').Router();

const userRoutes = require('./user-routes');
const drinkRoutes = require('./drink-routes');
const drinkTypeRoutes = require('./drink-type-routes');

router.use('/user', userRoutes);
router.use('/drink', drinkRoutes);
router.use('/drink-type', drinkTypeRoutes);

module.exports = router;