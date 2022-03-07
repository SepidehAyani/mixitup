const { Drinks } = require('../models');

const beverageData = [
  {
    type: 'Rum'
  },
  {
    type: 'Vodka'
  },
  {
    type: 'Tequila'
  },
  {
    type: 'Brandy'
  },
  {
    type: 'Scotch'
  },
  {
    type: 'Gin'
  },
  {
    type: 'Whiskey'
  },
  {
    type: 'NA'
  }
];
const seedBeverages = () => Drink.bulkCreate(beverageData);

module.exports = seedBeverages;
