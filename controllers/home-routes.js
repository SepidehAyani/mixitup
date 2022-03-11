const router = require('express').Router();
const sequelize = require('../config/connection');
const { Drink, User, Vote, Comment } = require('../models');

// Get all drinks render homepage
router.get('/', (req, res) => {
    Drink.findAll({
      attributes: [
        'id',
        'name',
        'instruction',
        'ingredient',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE drink.id = vote.drink_id)'), 'vote_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'drink_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbDrinkData => {
        const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
        res.render('homepage', {
          drinks,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

// Get drink by ID
router.get('/drink/:id', (req, res) => {
    Drink.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'name',
        'instruction',
        'ingredient',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE drink.id = vote.drink)'), 'vote_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'drink', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbDrinkData => {
        if (!dbDrinkData) {
          res.status(404).json({ message: 'No drink found with this id' });
          return;
        }

        const drink = dbDrinkData.get({ plain: true });

        res.render('single-drink', {
            drink,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;