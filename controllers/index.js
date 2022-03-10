const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const catalogRoutes = require('./catalog-routes.js');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/catalog', catalogRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;