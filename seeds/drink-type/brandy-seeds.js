const { Drinks } = require('../drink-type/brandy-seeds');

const brandyDrinksData = [

    {
        drink_name: 'Amaretto Shake',
        drink_type: 'Brandy',
        instruction: 'Combine all ingredients in a blender and blend at high speed until smooth. Serve in chilled glass garnished with bittersweet chocolate shavings. Use two scoops of Chocolate ice-cream, 2 oz of Brandy, and 2 oz Amaretto.',
        ingredient: 'Chocolate ice-cream, Brandy, Amaretto',
        image: 'https://www.thecocktaildb.com/images/media/drink/xk79al1493069655.jpg'
    },
    {
        drink_name: 'Bermuda Highball',
        drink_type: 'Brandy',
        instruction: 'Pour brandy, gin, and dry vermouth into a highball glass over ice cubes. Fill with carbonated water and stir. Add the twist of lemon and serve. (Ginger ale may be substituted for carbonated water, if preferred. Use 3/4 oz Brandy, 3/4 oz Gin, 3/4 oz Dry Vermouth, Carbonated water, Lemon peel',
        ingredient: 'Brandy, Gin, Dry Vermouth, Carbonated water, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/qrvtww1441206528.jpg'
    },
    {
        drink_name: 'Between The Sheets',
        drink_type: 'Brandy',
        instruction: 'Pour all ingredients into shaker with ice cubes, shake, strain into chilled cocktail glass. Use 1 oz Brandy, 1 oz Light Rum, 1 oz Triple sec, 1 oz Lemon juice.',
        ingredient: 'Brandy, Light rum, Triple sec, Lemon juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/of1rj41504348346.jpg'
    },
    {
        drink_name: 'Boston Sidecar',
        drink_type: 'Brandy',
        instruction: 'Shake all ingredients with ice, strain into a cocktail glass, and serve. Use: 1 oz Brandy, 1 oz Light rum, 1 oz Triple sec, 1 oz Lemon juice',
        ingredient: 'Brandy, Light rum, Triple sec, Lemon juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/qzs5d11504365962.jpg'
    },
    {
        drink_name: 'Brandy Alexander',
        drink_type: 'Brandy',
        instruction: 'Shake all ingredients (except nutmeg) with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve. Use 1 oz Brandy, 1 oz white Creme de Cacao, 1 oz light cream, sprinkle of nutmeg.',
        ingredient: 'Brandy, Creme de Cacao, Light cream, Nutmeg',
        image: 'https://www.thecocktaildb.com/images/media/drink/mlyk1i1606772340.jpg'
    },
    {
        drink_name: 'Brandy Flip',
        drink_type: 'Brandy',
        instruction: 'In a shaker half-filled with ice cubes, combine the brandy, egg, sugar, and cream. Shake well. Strain into a sour glass and garnish with the nutmeg. Use 2 oz Brandy, 1 whole egg, 1 tsp fine sugar, 1/2 oz light cream, 1/8 tsp grated nutmeg',
        ingredient: 'Brandy, Egg, Sugar, Light cream, Nutmeg',
        image: 'https://www.thecocktaildb.com/images/media/drink/6ty09d1504366461.jpg'
    },
    {
        drink_name: 'Brandy Sour',
        drink_type: 'Brandy',
        instruction: 'Shake brandy, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with the lemon slice, top with the cherry, and serve. Use 2 oz Brandy, juice of half a lemon, 1/2 tsp powdered sugar, 1/2 lemon slice, 1 cherry.',
        ingredient: 'Brandy, Lemon, Powdered sugar, Lemon, Cherry.',
        image: 'https://www.thecocktaildb.com/images/media/drink/b1bxgq1582484872.jpg'
    },
    {
        drink_name: 'City Slicker',
        drink_type: 'Brandy',
        instruction: 'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass. Use 2 oz Brandy, 1/2 oz Triple sec, 1 Tbsp Lemon juice.',
        ingredient: 'Brandy, Triple sec, Lemon juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/dazdlg1504366949.jpg'
    },
    {
        drink_name: 'English Highball',
        drink_type: 'Brandy',
        instruction: 'Pour brandy, gin, and sweet vermouth into a highball glass over ice cubes. Fill with carbonated water. Add the twist of lemon peel, stir, and serve. (Ginger ale may be substituted for carbonated water, if preferred.) Use 3/4 oz Brandy, 3/4 oz Gin, 3/4 oz Sweet Vermouth, Carbonated water, Lemon peel',
        ingredient: 'Brandy, Gin, Sweet Vermouth, Carbonated water, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/dhvr7d1504519752.jpg'
    },
    {
        drink_name: 'Gentlemans Club',
        drink_type: 'Brandy',
        instruction: 'In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well. Use 1.5 oz Brandy, 1 oz Gin, 1 oz Sweet Vermouth, 1 oz club soda',
        ingredient: 'Brandy, Gin, Sweet Vermouth, Club soda',
        image: 'https://www.thecocktaildb.com/images/media/drink/k2r7wv1582481454.jpg'
    },
    {
        drink_name: 'Horses Neck',
        drink_type: 'Brandy',
        instruction: 'Pour brandy and ginger ale directly into highball glass with ice cubes. Stir gently. Garnish with lemon zest. If desired, add dashes of Angostura Bitter. Use 1 long strip of lemon peel, 2 oz Brandy, 5 oz Ginger ale, 2 dashes Bitters',
        ingredient: 'Lemon peel, Brandy, Ginger ale, Bitters',
        image: 'https://www.thecocktaildb.com/images/media/drink/006k4e1504370092.jpg'
    },
    {
        drink_name: 'Kioki Coffee',
        drink_type: 'Brandy',
        instruction: 'Stir. Add whipped cream to the top. Use 1 oz Kahlua, 1/2 oz Brandy, Coffee',
        ingredient: 'Kahlua, Brandy, Coffee',
        image: 'https://www.thecocktaildb.com/images/media/drink/uppqty1441247374.jpg'
    },
    {
        drink_name: 'Mississippi Planters Punch',
        drink_type: 'Brandy',
        instruction: 'Shake all ingredients (except carbonated water) with ice and strain into a collins glass over ice cubes. Fill with carbonated water, stir, and serve. Use 1 oz Brandy, 1/2 oz light rum, 1/2 oz Bourbon, juice of half a lemon, 1 Tbsp Powdered Sugar, Carbonated water.',
        ingredient: 'Brandy, light rum, Bourbon, Lemon, Powdered Sugar, Carbonated water',
        image: 'https://www.thecocktaildb.com/images/media/drink/urpyqs1439907531.jpg'
    },
    {
        drink_name: 'Port Wine Cocktail',
        drink_type: 'Brandy',
        instruction: 'Stir ingredients with ice, strain into a cocktail glass, and serve. Use 2.5 oz Port, 1/2 tsp Brandy.',
        ingredient: 'Port, Brandy',
        image: 'https://www.thecocktaildb.com/images/media/drink/qruprq1441553976.jpg'
    },
    {
        drink_name: 'Porto flip',
        drink_type: 'Brandy',
        instruction: 'Shake ingredients together in a mixer with ice. Strain into glass, garnish and serve. Use 3 parts Brandy, 9 parts Port, 2 parts Egg Yolk.',
        ingredient: 'Brandy, Port, Egg Yolk',
        image: 'https://www.thecocktaildb.com/images/media/drink/64x5j41504351518.jpg'
    },
    {
        drink_name: 'Quakers Cocktail',
        drink_type: 'Brandy',
        instruction: 'Shake all ingredients with ice, strain into a cocktail glass, and serve. Use 3/4 oz Light rum, 3/4 oz Brandy, Juice of 1/4 Lemon, 2 tsp Raspberry syrup',
        ingredient: 'Light rum, Brandy, Lemon, Raspberry syrup',
        image: 'https://www.thecocktaildb.com/images/media/drink/yrqppx1478962314.jpg'
    },
    {
        drink_name: 'Scooter',
        drink_type: 'Brandy',
        instruction: 'Shake all ingredients well with cracked ice, strain into a cocktail glass, and serve. Use 1 oz Brandy, 1 oz Amaretto, 1 oz Light cream',
        ingredient: 'Brandy, Amaretto, Light cream',
        image: 'https://www.thecocktaildb.com/images/media/drink/twuptu1483388307.jpg'
    },
    {
        drink_name: 'Scotch Cobbler',
        drink_type: 'Brandy',
        instruction: 'Pour scotch, brandy, and curacao over ice in an old-fashioned glass. Add the orange slice, top with the mint sprig, and serve. Use 2 oz Scotch, 4 dashes Brandy, 4 dashes Curacao, 1 slice Orange, 1 Mint leaf',
        ingredient: 'Scotch, Brandy, Curacao, Orange, Mint',
        image: 'https://www.thecocktaildb.com/images/media/drink/1q7coh1504736227.jpg'
    },
    {
        drink_name: 'Sidecar Cocktail',
        drink_type: 'Brandy',
        instruction: 'Shake all ingredients with ice, strain into a cocktail glass, and serve. Use 1 oz Brandy, 1/2 oz Triple sec, juice of 1/4 Lemon',
        ingredient: 'Brandy, Triple sec, Lemon',
        image: 'https://www.thecocktaildb.com/images/media/drink/ewjxui1504820428.jpg'
    },
    {
        drink_name: 'Sol Y Sombra',
        drink_type: 'Brandy',
        instruction: 'hake ingredients with ice, strain into a brandy snifter, and serve. (The English translation of the name of this drink is \"Sun and Shade\", and after sampling this drink, you will understand why. Thanks, Kirby.) Use 1.5 oz Brandy, 1.5 oz Anisette.',
        ingredient: 'Brandy, Anisette.',
        image: 'https://www.thecocktaildb.com/images/media/drink/3gz2vw1503425983.jpg'
    },
    {
        drink_name: 'Stinger',
        drink_type: 'Brandy',
        instruction: 'Pour in a mixing glass with ice, stir and strain into a cocktail glass. May also be served on rocks in a rocks glass. Use 1.5 oz Brandy, 1/2 oz Creme de Menthe',
        ingredient: 'Brandy, Creme de Menthe',
        image: 'https://www.thecocktaildb.com/images/media/drink/2ahv791504352433.jpg'
    },
    {
        drink_name: 'Victor',
        drink_type: 'Brandy',
        instruction: 'Shake all ingredients with ice, strain into a cocktail glass, and serve. Use 1.5 oz Gin, 1/2 oz Sweet Vermouth, 1/2 Brandy.',
        ingredient: 'Gin, Sweet Vermouth, Brandy',
        image: 'https://www.thecocktaildb.com/images/media/drink/voapgc1492976416.jpg'
    }

];
const seedBrandyDrinks = () => Drink.bulkCreate(brandyDrinksData);

module.exports = seedBrandyDrinks;