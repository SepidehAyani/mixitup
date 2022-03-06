const router = require('express').Router();
const { Drinks, Users, Types } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all drinks
router.get('/', (req, res) => {
  console.log('======================');
  Drinks.findAll({
    attributes: [
      'id',
      'drink_name',
      'drink_type',
      'ingredient',
      'instruction',
      'user_id',
      'created_at'
    ],
    include: [
      {
        model: Types,
        attributes: ['type_id', 'type_name'],
      },
      {
        model: Users,
        attributes: ['id', 'username', 'email', 'pw']
      }
    ]
  })
    .then(drinksData => res.json(drinksData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Get drink by drink id
router.get('/:id', (req, res) => {
  Drinks.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'drink_name',
      'drink_type',
      'ingredient',
      'instruction',
      'user_id',
      'created_at'
    ],
    include: [
      {
        model: Types,
        attributes: ['type_id', 'type_name'],
      },
      {
        model: Users,
        attributes: ['id', 'username', 'email', 'pw']
      }
    ]
  })
    .then(drinksData => {
      if (!drinksData) {
        res.status(404).json({ message: 'No drink found with this id' });
        return;
      }
      res.json(drinksData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a new drink
router.post('/', withAuth, (req, res) => {
  // expects {drink_name: '', drink_type: '', ingredient: '', instruction: '', user_id: ''}
  Drinks.create({
    drink_name: req.body.drink_name,
    drink_type: req.body.drink_type,
    ingredient: req.body.ingredient,
    instruction: req.body.instruction,
    user_id: req.session.user_id
  })
    .then(drinksData => res.json(drinksData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Edit a drink
router.put('/:id', withAuth, (req, res) => {
  Drinks.update(
    {
      drink_name: req.body.drink_name,
      drink_type: req.body.drink_type,
      ingredient: req.body.ingredient,
      instruction: req.body.instruction
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(drinksData => {
      if (!drinksData) {
        res.status(404).json({ message: 'No drink found with this id' });
        return;
      }
      res.json(drinksData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a drink
router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Drinks.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(drinksData => {
      if (!drinksData) {
        res.status(404).json({ message: 'No drink found with this id' });
        return;
      }
      res.json(drinksData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;