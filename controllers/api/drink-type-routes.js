const router = require('express').Router();
const { Drink, User, Type } = require('../../models');

// Get all drinks by type: Brandy
router.get('/', (req, res) => {
  console.log('======================');
  Drink.findAll({
    attributes: [
      'id',
      'drink_name',
      'drink_type',
      'ingredient',
      'instruction',
      'user_id'
    ],
    include: [
      {
        model: Type,
        attributes: ['type_id', 'type_name'],
      },
      {
        model: User,
        attributes: ['id', 'username', 'email', 'pw']
      }
    ]
  })
    .then(brandyDrinksData => res.json(brandyDrinksData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all drinks by type: Gin
router.get('/', (req, res) => {
  console.log('======================');
  Drink.findAll({
    attributes: [
      'id',
      'drink_name',
      'drink_type',
      'ingredient',
      'instruction',
      'user_id'
    ],
    include: [
      {
        model: Type,
        attributes: ['type_id', 'type_name'],
      },
      {
        model: User,
        attributes: ['id', 'username', 'email', 'pw']
      }
    ]
  })
    .then(ginDrinksData => res.json(ginDrinksData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all drinks by type: non-alcoholic
router.get('/', (req, res) => {
  console.log('======================');
  Drink.findAll({
    attributes: [
      'id',
      'drink_name',
      'drink_type',
      'ingredient',
      'instruction',
      'user_id'
    ],
    include: [
      {
        model: Type,
        attributes: ['type_id', 'type_name'],
      },
      {
        model: User,
        attributes: ['id', 'username', 'email', 'pw']
      }
    ]
  })
    .then(nonalcoholicDrinksData => res.json(nonalcoholicDrinksData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all drinks by type: Rum
router.get('/', (req, res) => {
  console.log('======================');
  Drink.findAll({
    attributes: [
      'id',
      'drink_name',
      'drink_type',
      'ingredient',
      'instruction',
      'user_id'
    ],
    include: [
      {
        model: Type,
        attributes: ['type_id', 'type_name'],
      },
      {
        model: User,
        attributes: ['id', 'username', 'email', 'pw']
      }
    ]
  })
    .then(rumDrinksData => res.json(rumDrinksData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all drinks by type: Scotch
router.get('/', (req, res) => {
  console.log('======================');
  Drink.findAll({
    attributes: [
      'id',
      'drink_name',
      'drink_type',
      'ingredient',
      'instruction',
      'user_id'
    ],
    include: [
      {
        model: Type,
        attributes: ['type_id', 'type_name'],
      },
      {
        model: User,
        attributes: ['id', 'username', 'email', 'pw']
      }
    ]
  })
    .then(scotchDrinksData => res.json(scotchDrinksData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all drinks by type: Tequila
router.get('/', (req, res) => {
  console.log('======================');
  Drink.findAll({
    attributes: [
      'id',
      'drink_name',
      'drink_type',
      'ingredient',
      'instruction',
      'user_id'
    ],
    include: [
      {
        model: Type,
        attributes: ['type_id', 'type_name'],
      },
      {
        model: User,
        attributes: ['id', 'username', 'email', 'pw']
      }
    ]
  })
    .then(tequilaDrinksData => res.json(tequilaDrinksData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all drinks by type: Vodka
router.get('/', (req, res) => {
  console.log('======================');
  Drink.findAll({
    attributes: [
      'id',
      'drink_name',
      'drink_type',
      'ingredient',
      'instruction',
      'user_id'
    ],
    include: [
      {
        model: Type,
        attributes: ['type_id', 'type_name'],
      },
      {
        model: User,
        attributes: ['id', 'username', 'email', 'pw']
      }
    ]
  })
    .then(vodkaDrinksData => res.json(vodkaDrinksData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all drinks by type: Whiskey
router.get('/', (req, res) => {
  console.log('======================');
  Drink.findAll({
    attributes: [
      'id',
      'drink_name',
      'drink_type',
      'ingredient',
      'instruction',
      'user_id'
    ],
    include: [
      {
        model: Type,
        attributes: ['type_id', 'type_name'],
      },
      {
        model: User,
        attributes: ['id', 'username', 'email', 'pw']
      }
    ]
  })
    .then(whiskeyDrinksData => res.json(whiskeyDrinksData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;