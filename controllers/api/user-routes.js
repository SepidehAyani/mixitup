const router = require('express').Router();
const { Drink, Type, User } = require('../../models');

// Get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['pw'] }
    })
        .then(usersData => res.json(usersData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get user by user id
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['pw'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Drink,
                attributes: ['drink_name', 'drink_type', 'ingredient', 'instruction', 'user_id'],
            },
            {
                model: Type,
                attributes: ['type_id', 'type_name'],
            }
        ]
    })
        .then(usersData => {
            if (!usersData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(usersData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create a new user
router.post('/registerUser', async (req, res) => {
    try {
      const userData = await User.create(req.body);
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
      res.render('home');
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Login
router.post('/login', (req, res) => {
    // expects {password: 'lernantino', password: 'password1234'}
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(usersData => {
        if (!usersData) {
            res.status(400).json({ message: 'No user with this username!' });
            return;
        }

        const validPassword = usersData.checkPassword(req.body.pw);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password! Please try again.' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = usersData.id;
            req.session.username = usersData.username;
            req.session.email = usersData.email;
            req.session.loggedIn = true;

            res.json({ user: usersData, message: 'You are now logged in!' });
        });
    });
});

// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;