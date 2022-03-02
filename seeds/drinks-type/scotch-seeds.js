
const { Drink } = require('../models');

const scotchDrinksData = [

    {
        name: 'Affinity',
        image: 'https://www.thecocktaildb.com/images/media/drink/wzdtnn1582477684.jpg'
    },
    {
        name: 'Balmoral',
        image: 'https://www.thecocktaildb.com/images/media/drink/vysuyq1441206297.jpg'
    },
    {
        name: 'Bobby Burns Cocktail',
        image: 'https://www.thecocktaildb.com/images/media/drink/km6se51484411608.jpg'
    },
    {
        name: 'Broadside',
        image: 'https://www.thecocktaildb.com/images/media/drink/l2o6xu1582476870.jpg'
    },
    {
        name: 'Dry Rob Roy',
        image: 'https://www.thecocktaildb.com/images/media/drink/typuyq1439456976.jpg'
    },
    {
        name: 'Flying Scotchman',
        image: 'https://www.thecocktaildb.com/images/media/drink/q53l911582482518.jpg'
    },
    {
        name: 'Godfather',
        image: 'https://www.thecocktaildb.com/images/media/drink/e5zgao1582582378.jpg'
    },
    {
        name: 'Highland Fling Cocktail',
        image: 'https://www.thecocktaildb.com/images/media/drink/0bkwca1492975553.jpg'
    },
    {
        name: 'Irish Cream',
        image: 'https://www.thecocktaildb.com/images/media/drink/90etyl1504884699.jpg'
    },
    {
        name: 'Loch Lomond',
        image: 'https://www.thecocktaildb.com/images/media/drink/rpvtpr1468923881.jpg'
    },
    {
        name: 'Rusty Nail',
        image: 'https://www.thecocktaildb.com/images/media/drink/yqsvtw1478252982.jpg'
    },
    {
        name: 'Scotch Cobbler',
        image: 'https://www.thecocktaildb.com/images/media/drink/1q7coh1504736227.jpg'
    },
    {
        name: 'Scotch Sour',
        image: 'https://www.thecocktaildb.com/images/media/drink/0dnb6k1504890436.jpg'
    },
    {
        name: 'Thriller',
        image: 'https://www.thecocktaildb.com/images/media/drink/rvuswq1461867714.jpg'
    },
    {
        name: 'Whisky Mac',
        image: 'https://www.thecocktaildb.com/images/media/drink/yvvwys1461867858.jpg'
    }
];
const seedScotchDrinks = () => Drink.bulkCreate(scotchDrinksData);

module.exports = seedScotchDrinks;