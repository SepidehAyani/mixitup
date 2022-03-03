const { Drink } = require('../models');

// Options for non-alcoholic beverages

const nonalcoholicDrinksData = [

    {
        name: 'Afterglow',
        instruction: 'Use 1 part grenadine, 4 parts orange juice, 4 parts pineapple juice. Mix. Serve over ice. ',
        ingredient: 'Grenadine, Orange juice, Pineapple juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg'
    },
    {
        name: 'Aloha Fruit punch',
        instruction: 'Good for a group! Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly. Use: 3/4 cup Water, 2 tsp Ginger, 2 cups Guava juice, 1.5 Tbsp Lemon juice, 1.5 cup Pineapple, 1 cup Sugar, 3-4 cups Pineapple juice',
        ingredient: 'Water, Ginger, Guava juice, Lemon juice, Pineapple, Sugar, Pineapple juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg'
    },
    {
        name: 'Apple Berry Smoothie',
        instruction: 'Throw everything into a blender and liquify. Use 1 cup berries, 2 apples, cored.',
        ingredient: 'Berries, Apple',
        image: 'https://www.thecocktaildb.com/images/media/drink/xwqvur1468876473.jpg'
    },
    {
        name: 'Banana Milk Shake',
        instruction: 'Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana. Use: 100 ml Milk, 40 ml Orange juice, 2 tsp Sugar syrup, 1/2 Banana.',
        ingredient: 'Milk, Orange juice, Sugar syrup, Banana',
        image: 'https://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg'
    },
    {
        name: 'Bora Bora',
        instruction: 'Prepare in a blender or shaker, serve in a highball glass on the rocks. Garnish with 1 slice of pineapple and one cherry. Use: 100 ml Pineapple juice, 60 ml Passion fruit juice, 10 ml Lemon juice, 10 ml Grenadine.',
        ingredient: 'Pineapple juice, Passion fruit juice, Lemon juice, Grenadine',
        image: 'https://www.thecocktaildb.com/images/media/drink/xwuqvw1473201811.jpg'
    },
    {
        name: 'Just a Moonmint',
        instruction: 'Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up. Use 2 cups Milk, Chocolate syrup and Mint syrup to taste.',
        ingredient: ' Milk, Chocolate syrup, Mint syrup',
        image: 'https://www.thecocktaildb.com/images/media/drink/znald61487604035.jpg'
    },
    {
        name: 'Lassi - Plain',
        instruction: 'Blend in a blender for 3 seconds. Lassi is one of the easiest things to make, and there are many ways of making it. Basically, it is buttermilk (yogurt whisked with water), and you can choose almost any consistency that you like, from the thinnest to the thickest. Serve cold. Use 1/5 cup Yogurt, 1.25 cup cold Water, 1/2 tsp ground roasted Cumin seed, 1/4 tsp Salt, 1/4 tsp dried Mint.',
        ingredient: 'Yogurt, Water, Cumin seed, Salt, Mint',
        image: 'https://www.thecocktaildb.com/images/media/drink/iq6scx1487603980.jpg'
    },
    {
        name: 'Lassi - Mango',
        instruction: 'Put it all in a blender and pour over crushed ice. You can also use other fruits like strawberries and bananas. Use 2 Mangoes, 2 cups Yogurt, 1/2 cup Sugar, 1 cup ice Water.',
        ingredient: 'Mango, Yogurt, Sugar, Water',
        image: 'https://www.thecocktaildb.com/images/media/drink/1bw6sd1487603816.jpg'
    },
    {
        name: 'Lassi Raita',
        instruction: 'Blend the yogurt and ice cubes together, until the yogurt becomes more liquid. Add sugar to taste. The lemon/lime is optional but it gives it a slightly tart taste. Dash of salt. Raita is also good for the summer. Instead of having a traditional salad you can make raita instead. Use 2 cups Yogurt, 4-6 cups Ice. Add Sugar, Lime and Salt to taste.',
        ingredient: 'Yogurt, Ice, Sugar, Lime, Salt',
        image: 'https://www.thecocktaildb.com/images/media/drink/s4x0qj1487603933.jpg'
    },
    {
        name: 'Limeade',
        instruction: 'In a large glass, put the lime juice and sugar, and stir well. Add cold seltzer water to fill. Put the lime peels in the glass. Drink. Repeat until limes or soda run out. Use Juice of 1 Lime, 1 Tbsp Sugar, Soda water, Lime peel',
        ingredient: 'Lime, Sugar, Soda water, Lime peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/5jdp5r1487603680.jpg'
    },
    {
        name: 'Strawberry Shivers',
        instruction: 'Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up. Use 1.5 cup Strawberries, 4 tsp Honey, 1/2 cup Water.',
        ingredient: 'Strawberries, Honey, Water',
        image: 'https://www.thecocktaildb.com/images/media/drink/9h1vvt1487603404.jpg'
    },
    {
        name: 'Tomato Tang',
        instruction: 'Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up. Use 2 cups Tomato juice, 1-2 Tbsp Lemon juice, 1 dash Celery salt.',
        ingredient: 'Tomato juice, Lemon juice, Celery salt',
        image: 'https://www.thecocktaildb.com/images/media/drink/869qr81487603278.jpg'
    },
    {
        name: 'Ipamena',
        instruction: 'Cut half a lime into pieces, place in a shaker, add the sugar and crush. Measure the passion fruit juice, add it to the shaker and fill up with ice cubes. Close the shaker and shake vigorously. Pour the liquid into a glass, top up with ginger ale, stir with a teaspoon and then garnish the rim of the glass with a slice of lime. Use half a Lime, 2 tsp brown sugar, 40 ml Passion fruit juice, fill with Ice, and top up with Ginger ale.',
        ingredient: 'Lime, brown sugar, Passion fruit juice, Ginger ale, Ice',
        image: 'https://www.thecocktaildb.com/images/media/drink/yswuwp1469090992.jpg'
    },
    {
        name: 'Kill the cold Smoothie',
        instruction: 'Juice 1 inch of peeled fresj ginger and use juice of 1/4 of lemon and add it to 1 cup hot water. You may add cardomom to taste.',
        ingredient: 'Fresh ginger root, Lemon, Water',
        image: 'https://www.thecocktaildb.com/images/media/drink/7j1z2e1487603414.jpg'
    },
    {
        name: 'Rail Splitter',
        instruction: 'Mix sugar syrup with lemon juice in a tall glass. Fill up with ginger ale.',
        ingredient: 'Sugar syrup, Lemon juice, Gigner ale',
        image: 'https://www.thecocktaildb.com/images/media/drink/stsuqq1441207660.jpg'
    }

];

const nonalcoholicDrinks = () => Drink.bulkCreate(nonalcoholicDrinksData);

module.exports = nonalcoholicDrinks;