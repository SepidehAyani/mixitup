
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
        instruction: 'Mix 2 shot Rum, 1 shot Lime juice, 1 shot Egg White, a dash bitters, and sugar together in a shaker and strain into a collins glass. Use Caribbean dark Rum for a sweeter taste.',
        ingredient: 'Rum, Lime juice, Egg White, bitters, Sugar, Nutmeg ',
        image: 'https://www.thecocktaildb.com/images/media/drink/d83spj1596017390.jpg'
    },
    {
        name: 'Espresso Rumtini',
        instruction: 'Mix 1 shot Rum, 1/2 shot Vanilla syrup, 1 shot Espresso, 1 shot Coffee in a cocktail glass. Garnish with some chocolate powder and coffee beans',
        ingredient: 'Rum, Vanilla syrup, Espresso, Coffee',
        image: 'https://www.thecocktaildb.com/images/media/drink/acvf171561574403.jpg'
    },
    {
        name: 'Funk and Soul',
        instruction: 'Mix 2 shots Rum, 1 shot Apricot Nectar, 1 shot Pomegranate juice, 1/2 shot lemon juice , Soda water together and strain into a Collins glass. Use Jamaican rum where possible for a more authentic taste.',
        ingredient: 'Rum, Apricot Nectar, Pomegranate juice, lemon juice , Soda water',
        image: 'https://www.thecocktaildb.com/images/media/drink/qtv83q1596015790.jpg'
    },
    {
        name: 'Hemingway Special',
        instruction: 'Pour all ingredients into a shaker with ice. Shake.',
        ingredient: 'Rum, Grapefruit juice, Maraschino Liqueur, Lime Juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/jfcvps1504369888.jpg'
    },
    {
        name: 'Jamaican Coffee',
        instruction: 'Stir the rum, coffee and water together. Top with the whipped cream. Sprinkle with a pinch of well ground coffee and drink with a straw.',
        ingredient: 'Rum, Coffee, Water, Whipped cream',
        image: 'https://www.thecocktaildb.com/images/media/drink/xqptps1441247257.jpg'
    },
    {
        name: 'National Aquarium',
        instruction: 'Pour all ingredients into a shaker of ice. Shake well. Serve on the rocks.',
        ingredient: 'Rum, Vodka, Gin, Blue Curacao, Sour mix, Lemon-Lime soda',
        image: 'https://www.thecocktaildb.com/images/media/drink/dlw0om1503565021.jpg'
    },
    {
        name: 'Orange Whip',
        instruction: 'Pour ingredients over ice and stir.',
        ingredient: 'Orange juice, Rum, Vodka, Cream, Ice',
        image: 'https://www.thecocktaildb.com/images/media/drink/ttyrxr1454514759.jpg'
    },
    {
        name: 'Pure Passion',
        instruction: '"Mix up all ingredients with a cocktail stirrer and serve with crushed ice with mint and edible flour if available.',
        ingredient: 'Rum, Passoa, Lime juice, Passion fruit syrup, Peach bitters, mint',
        image: 'https://www.thecocktaildb.com/images/media/drink/4tymma1604179273.jpg'
    },
    {
        name: 'Radioactive Long Island Iced Tea',
        instruction: 'Pour all ingredients over ice in a very tall glass. Sip cautiously.',
        ingredient: 'Rum, Vodka, Tequila, Gin, Triple sec, Chambord raspberry liqueur, Midori melon liqueur, Malibu rum',
        image: 'https://www.thecocktaildb.com/images/media/drink/rdvqmh1503563512.jpg'
    },
    {
        name: 'Rum Cooler',
        instruction: 'Pour the rum and soda into a collins glass almost filled with ice cubes. Stir well and garnish with the lemon wedge.',
        ingredient: 'Rum, Lemon-lime soda, Lemon',
        image: 'https://www.thecocktaildb.com/images/media/drink/2hgwsb1504888674.jpg'
    },
    {
        name: 'Rum Punch',
        instruction: 'Mix all ingredients in a punch bowl and serve.',
        ingredient: 'Rum, Ginger ale, Fruit punch, Orange juice, ice',
        image: 'https://www.thecocktaildb.com/images/media/drink/wyrsxu1441554538.jpg'
    },
    {
        name: 'Rum Toddy',
        instruction: '"Dissolve powdered sugar in water in an old-fashioned glass. Add rum and one ice cube and stir. Add the twist of lemon peel and serve.',
        ingredient: 'Rum, Powdered sugar, Lemon peel, Water',
        image: 'https://www.thecocktaildb.com/images/media/drink/athdk71504886286.jpg'
    },
    {
        name: 'Spice 75',
        instruction: 'Gently warm 60g golden caster sugar in a pan with 30ml water and 1 tbsp allspice. Cook gently until the sugar has dissolved, then leave the mixture to cool. Strain through a sieve lined with a coffee filter (or a double layer of kitchen paper). Pour 60ml of the spiced syrup into a cocktail shaker along with 200ml rum and 90ml lime juice. Shake with ice and strain between six flute glasses. Top up with 600ml champagne and garnish each with an orange twist.',
        ingredient: 'Sugar, Allspice, Rum, Lime juice, Champagne, Orange Spiral',
        image: 'https://www.thecocktaildb.com/images/media/drink/0108c41576797064.jpg'
    },
    {
        name: 'Zippys Revenge',
        instruction: 'Mix Kool-Aid to taste then add Rum and ammaretto. shake well to dissolve the sugar in the Kool-Aid... serve cold',
        ingredient: 'Amaretto, Rum, Kool-Aid',
        image: 'https://www.thecocktaildb.com/images/media/drink/1sqm7n1485620312.jpg'
    },
    {
        name: 'Zombie',
        instruction: 'Blend at high speed for no more than 5 seconds. Pour into a glass, add ice cubes to fill, then add the garnish. Donns mix: Bring 3 crushed cinnamon sticks, 1 cup of sugar and 1 cup of water to a boil, stirring until the sugar is dissolved. Simmer for 2 minutes, then remove from the heat and let sit for at least 2 hours before straining into a clean glass bottle. Then add 1 part of the syrup and 2 parts of fresh grapefruit juice together.',
        ingredient: 'Rum, Gold Rum, 151 proof rum, Pernod, Grenadine, Lime juice, Angostura Bitters',
        image: 'https://www.thecocktaildb.com/images/media/drink/2en3jk1509557725.jpg'
    }

];
const seedRumDrinks = () => Drink.bulkCreate(rumDrinksData);

module.exports = seedRumDrinks;