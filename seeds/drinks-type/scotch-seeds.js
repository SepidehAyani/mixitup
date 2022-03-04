
const { Drink } = require('../models');

const scotchDrinksData = [

    {
        name: 'Affinity',
        instruction:'In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.',
        ingredient:'Scotch, Sweet Vermouth, Dry Vermouth, Orange bitters',
        image: 'https://www.thecocktaildb.com/images/media/drink/wzdtnn1582477684.jpg'
    },
    {
        name: 'Balmoral',
        instruction:'In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass',
        ingredient:'Scotch, Sweet Vermouth, Dry Vermouth, Orange bitters',
        image: 'https://www.thecocktaildb.com/images/media/drink/vysuyq1441206297.jpg'
    },
    {
        name: 'Bobby Burns Cocktail',
        instruction:'Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.',
        ingredient:'Sweet Vermouth, Scotch, Benedictine, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/km6se51484411608.jpg'
    },
    {
        name: 'Broadside',
        instruction:'Half fill the glass with ice cubes. Crush the wormwood and add to ice. Pour 1 shot rum, 1/2 shot scotch and 3 drops bitters, then serve!',
        ingredient:'151 proof rum, Scotch, Bitters, Wormwood',
        image: 'https://www.thecocktaildb.com/images/media/drink/l2o6xu1582476870.jpg'
    },
    {
        name: 'Dry Rob Roy',
        instruction:'In a mixing glass half-filled with ice cubes, combine the 2.5 oz Scotch and 1.5 tsp vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.',
        ingredient:'Scotch, Dry Vermouth, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/typuyq1439456976.jpg'
    },
    {
        name: 'Flying Scotchman',
        instruction:'Shake 1 oz Scotch, 1 oz Sweet Vermouth, a dash Bitters, 1/4 tsp Sugar syup with ice, strain into a cocktail glass, and serve.',
        ingredient:'Scotch, Sweet Vermouth, Bitters, tsp Sugar syup',
        image: 'https://www.thecocktaildb.com/images/media/drink/q53l911582482518.jpg'
    },
    {
        name: 'Godfather',
        instruction:'Pour 1.5 oz Scotch and 3/4 oz Amaretto directly into old fashioned glass filled with ice cubes. Stir gently.',
        ingredient:'Scotch, Amaretto',
        image: 'https://www.thecocktaildb.com/images/media/drink/e5zgao1582582378.jpg'
    },
    {
        name: 'Highland Fling Cocktail',
        instruction:'Stir 1.5 oz Scotch, 3/4 oz Sweet Vermouth, 2 dashes Orange bitters (except olive) with ice and strain into a cocktail glass. Add the olive and serve.',
        ingredient:'Scotch, Sweet Vermouth, Orange bitters, Olive',
        image: 'https://www.thecocktaildb.com/images/media/drink/0bkwca1492975553.jpg'
    },
    {
        name: 'Irish Cream',
        instruction:'Mix 1 cup scotch with 1 can sweetened condensed milk 3 drops of coconut syrup, 1 tblsp Chocolate syrup . Add 1.25 cup half-and-half. Add rest.',
        ingredient:'Scotch, Half-and-half, Condensed milk, Coconut syrup, Chocolate Syrup',
        image: 'https://www.thecocktaildb.com/images/media/drink/90etyl1504884699.jpg'
    },
    {
        name: 'Loch Lomond',
        instruction:'In a mixing glass half-filled with ice cubes, combine 2 oz Scotch, 1/2 oz Drambuie, and 1/2 Vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.',
        ingredient:'Scotch, Drambulie, Dry Vermouth, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/rpvtpr1468923881.jpg'
    },
    {
        name: 'Rusty Nail',
        instruction:'Pour 1.5 oz Scotch and 1/2 oz Drambuie into an old-fashioned glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.',
        ingredient:'Scotch, Drambuie, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/yqsvtw1478252982.jpg'
    },
    {
        name: 'Scotch Cobbler',
        instruction:'Pour 2 oz scotch, 4 dashes brandy, and 4 dashes curacao over ice in an old-fashioned glass. Add the orange slice, top with the mint sprig, and serve.',
        ingredient:'Scotch, Brandy, Curacao, Mint',
        image: 'https://www.thecocktaildb.com/images/media/drink/1q7coh1504736227.jpg'
    },
    {
        name: 'Scotch Sour',
        instruction:'Shake 1.5 oz scotch, juice of 1/2 lime, and 1/2 powdered sugar with ice and strain into a whiskey sour glass. Decorate with 1/2 slice lemon, top with the cherry, and serve.',
        ingredient:'Scotch, Lime, Powdered sugar, Lemon, Cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/0dnb6k1504890436.jpg'
    },
    {
        name: 'Thriller' ,
        instruction:'In a shaker half-filled with ice cubes, combine 1.5 oz Scotch, 1 oz Wine, 1 oz Orange juice. Shake well. Strain into a cocktail glass.',
        ingredient:'Scotch, Wine, Orange juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/rvuswq1461867714.jpg'
    },
    {
        name: 'Whisky Mac',
        instruction:'Pour both 1.5 oz scotch and 1 oz wine into a wine goblet with no ice.',
        ingredient:'Scotch, Wine' ,
        image: 'https://www.thecocktaildb.com/images/media/drink/yvvwys1461867858.jpg'
    }
];
const seedScotchDrinks = () => Drink.bulkCreate(scotchDrinksData);

module.exports = seedScotchDrinks;