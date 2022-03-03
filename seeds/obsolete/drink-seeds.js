// I don't think we need this file anymore -- CR

const { Drink } = require('../../models');

const drinkData = [
    {
        name: '3-Mile Long Island Iced Tea',
        ingredient: '',
        user_id: 1
    },
    {
        title: 'Second blog post',
        content: 'Stay Present',
        user_id: 2
    },
    {
        title: 'Third blog post',
        content: 'Stay Curious',
        user_id: 3
    }
];
const seedDrinks = () => Drink.bulkCreate(drinkData);

module.exports = seedDrinks;