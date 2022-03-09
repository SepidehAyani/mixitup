const router = require('express').Router();

const userRoutes = require('./api/user-routes');
const homeRoutes = require('./home-routes');
const drinkRoutes = require('./api/drink-routes');

router.use('/user', userRoutes);
router.use('/drink', drinkRoutes);
router.use('/', homeRoutes);

module.exports = router;