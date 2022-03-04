
const { Drink } = require('../models');

const rumDrinksData = [
    {
        name: 'Adam Bomb',
        instruction: 'Add ice to blender then fruit, and 1 - 3 oz fruit juice then add the 1 oz Rum, 1 oz Vodka, 1 oz Tequila, and 1/2 oz triple sec. blend till smooth, rim glass with sugar or salt and pour mixture in. garnish with lemon or lime slice.',
        ingredient: 'Rum, Vodka, Tequila, triple sec, Fruit, Fruit juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg'
    },
    {
        name: 'Adios Amigos Cocktail',
        instruction: 'Shake together 1 shot Rum, 1/2 shot Dry Vermouth, 1/2 shot Cognac, 1/2 shot Gin, 1/4 shot Lime juice, 1/4 shot Sugar syrup, 1/2 Water and strain into a cold glass.',
        ingredient: '1 shot Rum, 1/2 shot Dry Vermouth, 1/2 shot Cognac, 1/2 shot Gin, 1/4 shot Lime juice, 1/4 shot Sugar syrup, 1/2 Water',
        image: 'https://www.thecocktaildb.com/images/media/drink/8nk2mp1504819893.jpg'
    },
    {
        name: 'Aztec Punch',
        instruction: 'Mix 1 can Lemonade, 5 oz Vodka, 7 oz Rum, 2 liter bottle Ginger ale in a pitcher, and serve!',
        ingredient: 'Lemonade, Vodka, Rum, Ginger ale',
        image: 'https://www.thecocktaildb.com/images/media/drink/uqwuyp1454514591.jpg'
    },
    {
        name: 'Bahama Mama',
        instruction: 'Add 2 parts club soda. Mix it all together and pour over a bunch of ice. Drink with a straw.',
        ingredient: 'Rum, Dark rum, Banana liqueur, Grenadine, Pineapple juice, Orange juice, Sweet and Sour',
        image: 'https://www.thecocktaildb.com/images/media/drink/tyb4a41515793339.jpg'
    },
    {
        name: 'Barracuda',
        instruction: 'Shake pour ingredients with ice. Strain into glass, top with Sparkling wine.',
        ingredient: 'Rum, Galliano, Pineapple juice, Lime juice, Prosecco',
        image: 'https://www.thecocktaildb.com/images/media/drink/jwmr1x1504372337.jpg'
    },
    {
        name: 'Blue Hurricane',
        instruction: 'If each part is 1/2 oz then use about 2.5 cups of ice. Blend it all together.',
        ingredient: 'Rum, Dark rum, Passoa, Blue Curacao, Sweet and sour',
        image: 'https://www.thecocktaildb.com/images/media/drink/nwx02s1515795822.jpg'
    },
    {
        name: 'Bounty Hunter',
        instruction: 'Add the 1 shot Rum, 1 Shot Liqueur into a shaker as well as the pineapple juice, strain into a Margarita glass. Top with Prosecco and garnish with Blueberries.',
        ingredient: 'Rum, Coconut liqueur, Blueberries, Pineapple juice, Prosecco',
        image: 'https://www.thecocktaildb.com/images/media/drink/t8bgxl1596018175.jpg'
    },
    {
        name: 'Captain Kidds Punch' ,
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/d83spj1596017390.jpg'
    },
    {
        name: 'Espresso Rumtini',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/acvf171561574403.jpg'
    },
    {
        name: 'Funk and Soul',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/qtv83q1596015790.jpg'
    },
    {
        name: 'Hemingway Special',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/jfcvps1504369888.jpg'
    },
    {
        name: 'Jamaican Coffee',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/xqptps1441247257.jpg'
    },
    {
        name: 'National Aquarium',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/dlw0om1503565021.jpg'
    },
    {
        name: 'Orange Whip',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/ttyrxr1454514759.jpg'
    },
    {
        name: 'Pure Passion',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/4tymma1604179273.jpg'
    },
    {
        name: 'Radioactive Long Island Iced Tea',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/rdvqmh1503563512.jpg'
    },
    {
        name: 'Rum Cooler',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/2hgwsb1504888674.jpg'
    },
    {
        name: 'Rum Punch',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/wyrsxu1441554538.jpg'
    },
    {
        name: 'Rum Toddy',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/athdk71504886286.jpg'
    },
    {
        name: 'Spice 75',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/0108c41576797064.jpg'
    },
    {
        name: 'Zippys Revenge',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/1sqm7n1485620312.jpg'
    },
    {
        name: 'Zombie',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/2en3jk1509557725.jpg'
    }

];
const seedRumDrinks = () => Drink.bulkCreate(rumDrinksData);

module.exports = seedRumDrinks;