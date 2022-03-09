const router = require('express').Router();
const { User, Drink } = require('../models');


router.get('/', async (req, res) => {
    try {
        const drinksData = await Drink.findAll({
            include: [{ model: User }]
        });
        const drinkEntry = drinksData.map((post) => post.get({ plain: true }));
        res.render('home', { de: drinkEntry });
    } catch (err) {
        res.status(500).json(err);
    }
});

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