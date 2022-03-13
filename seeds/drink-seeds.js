const { Drink } = require('../models');

const drinkData = [
  {
    name: 'Amaretto Shake',
    type: 'Brandy',
    created_at: new Date(),
    instruction: 'Combine all ingredients in a blender and blend at high speed until smooth. Serve in chilled glass garnished with bittersweet chocolate shavings. Use two scoops of Chocolate ice-cream, 2 oz of Brandy, and 2 oz Amaretto.',
    ingredient: 'Chocolate ice-cream, Brandy, Amaretto'
  },
  {
    name: 'Boston Sidecar',
    type: 'Brandy',
    created_at: new Date()
  },
  {
    name: 'Brandy Alexander',
    type: 'Brandy',
    created_at: new Date()
  },
  {
    name: 'Brandy Sour',
    type: 'Brandy',
    created_at: new Date()
  },
  {
    name: 'City Slicker',
    type: 'Brandy',
    created_at: new Date()
  },
  {
    name: 'Scooter',
    type: 'Brandy',
    created_at: new Date()
  },
  {
    name: 'Scotch Cobbler',
    type: 'Brandy',
    created_at: new Date()
  },
  {
    name: 'Sidecar Cocktail',
    type: 'Brandy',
    created_at: new Date()
  },
  {
    name: 'Sol Y Sombra',
    type: 'Brandy',
    created_at: new Date()
  },
  {
    name: 'Stinger',
    type: 'Brandy',
    created_at: new Date()
  },
  {
    name: '69 Special',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'A1',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Abbey Cocktail',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Abbey Martini',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Ace',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Alexander',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Archbishop',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Aviation',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Bluebird',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Bombay Cassis',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Boomerang',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Boxcar',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Bramble',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Casino',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Casino Royale',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Flying Dutchman',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Gimlet',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Gin Fizz',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Gin Lemon',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Gin Sling',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Afterglow',
    type: 'Non-Alcoholic',
    created_at: new Date()
  },
  {
    name: 'Aloha Fruit punch',
    type: 'Non-Alcoholic',
    created_at: new Date()
  },
  {
    name: 'Apple Berry Smoothie',
    type: 'Non-Alcoholic',
    created_at: new Date()
  },
  {
    name: 'Banana Milk Shake',
    type: 'Non-Alcoholic',
    created_at: new Date()
  },
  {
    name: 'Bora Bora',
    type: 'Non-Alcoholic',
    created_at: new Date()
  },
  {
    name: 'Just a Moonmint',
    type: 'Non-Alcoholic',
    created_at: new Date()
  },
  {
    name: 'Lassi Plain',
    type: 'Non-Alcoholic',
    created_at: new Date()
  },
  {
    name: 'Lassi Mango',
    type: 'Non-Alcoholic',
    created_at: new Date()
  },
  {
    name: 'Adam Bomb',
    type: 'Rum',
    created_at: new Date()
  },
  {
    name: 'Adios Amigos Cocktail',
    type: 'Rum',
    created_at: new Date()
  },
  {
    name: 'Aztec Punch',
    type: 'Rum',
    created_at: new Date()
  },
  {
    name: 'Bahama Mama',
    type: 'Rum',
    created_at: new Date()
  },
  {
    name: 'Barracuda',
    type: 'Rum',
    created_at: new Date()
  },
  {
    name: 'Blue Hurricane',
    type: 'Rum',
    created_at: new Date()
  },
  {
    name: 'Bounty Hunter',
    type: 'Rum',
    created_at: new Date()
  },
  {
    name: 'Captain Kidds Punch',
    type: 'Rum',
    created_at: new Date()
  },
  {
    name: 'Rum Punch',
    type: 'Rum',
    created_at: new Date()
  },
  {
    name: 'Rum Toddy',
    type: 'Rum',
    created_at: new Date()
  },
  {
    name: 'Highland Fling Cocktail',
    type: 'Scotch',
    created_at: new Date()
  },
  {
    name: 'Irish Cream',
    type: 'Scotch',
    created_at: new Date()
  },
  {
    name: 'Loch Lomond',
    type: 'Scotch',
    created_at: new Date()
  },
  {
    name: 'Rusty Nail',
    type: 'Scotch',
    created_at: new Date()
  },
  {
    name: 'Scotch Sour',
    type: 'Scotch',
    created_at: new Date()
  },
  {
    name: 'Thriller',
    type: 'Scotch',
    created_at: new Date()
  },
  {
    name: 'Whisky Mac',
    type: 'Scotch',
    created_at: new Date()
  },
  {
    name: 'Bloody Maria',
    type: 'Tequila',
    created_at: new Date()
  },
  {
    name: 'Blue Margarita',
    type: 'Tequila',
    created_at: new Date()
  },
  {
    name: 'Brave Bull Shooter',
    type: 'Tequila',
    created_at: new Date()
  },
  {
    name: 'Cherry Electric Lemonade',
    type: 'Tequila',
    created_at: new Date()
  },
  {
    name: 'Downshift',
    type: 'Tequila',
    created_at: new Date()
  },
  {
    name: 'Long Island Iced Tea',
    type: 'Tequila',
    created_at: new Date()
  },
  {
    name: 'Margarita',
    type: 'Tequila',
    created_at: new Date()
  },

];

const seedDrink = () => Drink.bulkCreate(drinkData);

module.exports = seedDrink;