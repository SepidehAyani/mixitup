const router = require('express').Router();
const sequelize = require('../config/connection');

// to log out of session

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
  });

  module.exports = router;