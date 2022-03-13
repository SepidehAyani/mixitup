const router = require('express').Router();
const { User, Drink, Comment, Vote } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// Get all drinks
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
      },
    ]
  })
    .then(dbDrinkData => res.json(dbDrinkData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get drink by ID
router.get('/:id', (req, res) => {
  Drink.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'name',
      'instruction',
      'ingredient',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE drink.id = vote.drink_id)'), 'vote_count']
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'drink_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]

  })
    .then(dbDrinkData => {
      if (!dbDrinkData) {
        res.status(404).json({ message: 'No drink found with this id' });
        return;
      }
      res.json(dbDrinkData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Post Drink
router.post('/', withAuth, (req, res) => {
  Drink.create({
    name: req.body.name,
    instruction: req.body.instruction,
    ingredient: req.body.ingredient
  })
    .then(dbDrinkData => res.json(dbDrinkData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Drink voting route
router.put('/upvote', withAuth, (req, res) => {
  if (req.session) {
    Drink.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
      .then(updatedVoteData => res.json(updatedVoteData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

//Update drinks
router.put('/:id', withAuth, (req, res) => {
  Drink.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbDrinkData => {
      if (!dbDrinkData[0]) {
        res.status(404).json({ message: 'No drink found with this id' });
        return;
      }
      res.json(dbDrinkData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete Drinks
router.delete('/:id', withAuth, (req, res) => {
  Drink.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbDrinkData => {
      if (!dbDrinkData) {
        res.status(404).json({ message: 'No drink found with this id' });
        return;
      }
      res.json(dbDrinkData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;