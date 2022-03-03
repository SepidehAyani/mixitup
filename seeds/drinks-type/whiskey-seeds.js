const { Drink } = require('../models');

const whiskeyDrinksData = [

    {
        name: 'Damned if you do',
        image:
          'https://www.thecocktaildb.com/images/media/drink/ql7bmx1503565106.jpg',
    },
    {
        name: 'Hot Toddy',
        image:
          'https://www.thecocktaildb.com/images/media/drink/ggx0lv1613942306.jpg',
    },
    {
        name: 'Owens Grandmothers Revenge',
        image:
          'https://www.thecocktaildb.com/images/media/drink/0wt4uo1503565321.jpg',
    },

];
const seedWhiskeyDrinks = () => Drink.bulkCreate(whiskeyDrinksData);

module.exports = seedWhiskeyDrinks;
