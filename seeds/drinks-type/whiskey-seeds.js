const { Drink } = require('../models');

const whiskeyDrinksData = [
  {
    name: 'Damned if you do',
    instruction: 'Pour into shot glass of 0.75 oz of whiskey and 0.25 oz of hot damn. Put in mouth. Repeat as deemed necessary.',
    ingredient: 'Whiskey, Hot Damn',
    image: 'https://www.thecocktaildb.com/images/media/drink/ql7bmx1503565106.jpg'
  },
  {
    name: 'Hot Toddy',
    instruction: `STEP 1: Whisk 50 ml of whisky and 15 ml of honey together and split between 2 heatproof glasses. Add half of the one cinnamon stick to each, then top up with 200ml boiling water.
    STEP 2: Add a splash of lemon juice to each, then taste and add more to your preference. Finish each with a slice of lemon, studded with a clove, and serve immediately.`,
    ingredient: 'Whiskey, Honey, Cinnamon, Lemon, Cloves',
    image: 'https://www.thecocktaildb.com/images/media/drink/ggx0lv1613942306.jpg'
  },
  {
    name: 'Owens Grandmothers Revenge',
    instruction: 'Add 12 oz of whiskey, 12 oz of beer, 12 oz of forzen lemonade and 1 cup of crushed ice and mix in blender.',
    ingredient: 'Whiskey, Beer, Lemonade, Ice',
    image: 'https://www.thecocktaildb.com/images/media/drink/0wt4uo1503565321.jpg'
  },
];
const seedWhiskeyDrinks = () => Drink.bulkCreate(whiskeyDrinksData);

module.exports = seedWhiskeyDrinks;
