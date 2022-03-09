const router = require('express').Router();
const { User, Drink } = require('../models');

// Renders homepage
router.get('/', async (req, res) => {
    try {
        const drinksData = await Drink.findAll({
            include: [{ model: User }]
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




































// Get a Single Drink
// router.get('/drink/:id', (req, res) => {
//   Drink.findOne({
//     where: {
//       id: req.params.id
//     },
//     attributes: [
//       'id',
//       'drink_name',
//       'drink_type',
//       'created_at'
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//       }

//       const post = dbPostData.get({ plain: true });
//       console.log(req.session.user_id);
//       console.log(post);

//       res.render('add-comment', {
//         post,
//         loggedIn: req.session.loggedIn,
//         sessionUser: req.session.user_id
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// Renders Drink By Type
// router.get('/drink-by-type', async (req, res) => {
//   try {
//       const drinksData = await Drink.findAll({
//           include: [{ model: User }]
//       });
//       const drinkEntry = drinksData.map((post) => post.get({ plain: true }));
//       res.render('homepage', { de: drinkEntry });
//   } catch (err) {
//       res.status(500).json(err);
//   }
// });

// Get Random Beverage --- TESTING --- //
// router.get('/api/random', function (req, res) {
//   const randomArr = [];
//   while (randomArr.length < 8) {
//     const random = Math.floor(Math.random() * Math.floor(51)) + 1;
//     if (randomArr.indexOf(random) === -1) {
//       randomArr.push(random);
//     }
//   }
//   const randomQuery = [];
//   randomArr.forEach((num) => {
//     randomQuery.push({ id: num });
//   });
//   db.Drink.findAll({
//     where: {
//       [sequelize.Op.or]: randomQuery,
//     },
//   }).then(function (results) {
//     res.json(results);
//   });
// });


// Render blog post
// router.get('/post/:id', async (req, res) => {
//     try {
//         const drinksData = await Drink.findByPk(req.params.id, {
//             include: [
//                 { model: User },
//                 { model: Type }
//             ]
//         });
//         const blogPost = blogPostData.get({ plain: true });
//         console.log(`\n ${blogPost.id} \n`)
//         res.render('post', { bp: blogPost });

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// Direct to edit drink page
// router.get('/edit/drink/:id', withAuth, (req, res) => {
//   Drink.findByPk(req.params.id, {
//     attributes: [
//       'id',
//       'drink_name',
//       'drink_type',
//       'ingredient',
//       'instruction',
//       'image',
//       'user_id'
//     ],
//   })
//     .then(dbDrinkData => {
//       if (dbDrinkData) {
//         const editedDrink = dbDrinkData.get({ plain: true });
//         res.render('edit-drink', {
//           comment,
//           loggedIn: true
//         });
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });




module.exports = router;