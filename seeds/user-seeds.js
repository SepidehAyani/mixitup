// Perhaps user data here will store favorite drinks?
// Create another file for user/created drinks, or store here too?

// const { Drink } = require('../models');
// // const { User } = require('../models');

const userDrinksData = [
  {
    // user_id,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    // drink_id
    drink_name: {
      type: DataTypes.INTEGER,
      references: {
        model: 'drink',
        key: 'id',
      },
    },
    // user_name,
    user_id: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'name',
      },
    },
    // drink_id
    drink_name: {
      type: DataTypes.STRING,
      references: {
        model: 'drink',
        key: 'name',
      },
    },
  },
];

const userDrinks = () => Drink.bulkCreate(userDrinksData);

module.exports = userDrinks;
