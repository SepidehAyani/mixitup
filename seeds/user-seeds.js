// Perhaps user data here will store favorite drinks?
// Create another file for user/created drinks, or store here too?

// const { Drink } = require('../models');
// // const { User } = require('../models');

const userDrinksData = [

    {

    }
];

const userDrinks = () => Drink.bulkCreate(userDrinksData);

module.exports = userDrinks;