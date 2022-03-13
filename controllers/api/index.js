const router = require('express').Router();

const userRoutes = require('./user-routes');
const drinkRoutes = require('./drink-routes');
const commentRoutes = require('./comment-routes');
const ratingRoutes = require('./rating-routes');

router.use('/users', userRoutes);
router.use('/drink', drinkRoutes);
router.use('/comment', commentRoutes);
router.use('./rating', ratingRoutes);

module.exports = router;