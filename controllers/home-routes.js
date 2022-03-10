const router = require('express').Router();
const { User, Drink } = require('../models');

// Renders homepage
router.get('/', async (req, res) => {
  try {
    const drinksData = await Drink.findAll({
      include: [{ model: User }],
    });
    const drinkEntry = drinksData.map((post) => post.get({ plain: true }));
    res.render('homepage', { de: drinkEntry });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render Login Page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Render registration page
router.get('/register', async (req, res) => {
  try {
    res.render('register');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render add-drink page
router.get('/add-drink', async (req, res) => {
  try {
    res.render('add-drink');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render edit-drink page
router.get('/edit-drink', async (req, res) => {
  try {
    res.render('edit-drink');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render favorite-drinks page
router.get('/favorite-drinks', async (req, res) => {
  try {
    res.render('favorite-drinks');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
