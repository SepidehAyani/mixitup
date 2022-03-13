const router = require('express').Router();
const { User, Drink } = require('../../models');

// find all ratings
router.get("/", (req, res) => {
	Rating.findAll({
		include: [
			{
				model: User,
				attributes: ['id', 'username', 'email']
			},
			{
				model: Drink,
				attributes: ['id', 'name', 'instruction', 'ingredient', 'user_id'],
				include: {
					model: User,
					attributes: ['username', 'id']
				}
			}
		]
	})
		.then((dbRatingData) => {
			res.json(dbRatingData);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

// get ratings by drink id
router.get("/:id", (req, res) => {
	Rating.findOne({
		where: {
			id: req.params.id
		},
		include: [
			{
				model: User,
				attributes: ['id', 'username', 'email']
			},
			{
				model: Drink,
				attributes: ['id', 'name', 'instruction', 'ingredient', 'user_id'],
				include: {
					model: User,
					attributes: ['username', 'id']
				}
			}
		]
	})
		.then((dbRatingData) => {
			if (!dbRatingData) {
				res.status(404).json({ message: "No rating found with this id" });
			}
			res.json(dbRatingData);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

// create a new drink rating
router.post("/", (req, res) => {
	Rating.create({
		rating: req.body.rating,
		user_id: req.session.user_id,
		drink_id: req.body.location_drink_id
	})
		.then((dbRatingData) => {
			res.json(dbRatingData);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;