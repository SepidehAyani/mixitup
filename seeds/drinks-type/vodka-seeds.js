const { Drink } = require('../models');

const vodkaDrinksData = [

    {
        name: '155 Belmont',
        instruction: 'Blend 1 shot of dark rum, 2 shots of light rum, 1 shot of vodka and 1 shot of orange juice with ice. Serve in a wine glass. Garnish with carrot.',
        ingredient: 'Dark rum, Light rum, Vodka, Orange juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg'
    },
    {
        name: '501 Blue',
        instruction: '"Mix equal amounts into a glass with ice.',
        ingredient: 'Blue Curacao, Blueberry schnapps, Vodka, Sour mix, 7-Up',
        image: 'https://www.thecocktaildb.com/images/media/drink/ywxwqs1461867097.jpg'
    },
    {
        name: '57 Chevy with a White License Plate',
        instruction: '1. Fill a rocks glass with ice 2.add 1 oz of white creme de cacao and 1 oz of vodka 3.stir',
        ingredient: 'Creme de Cacao, Vodka',
        image: 'https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg'
    },
    {
        name: '747 Drink',
        instruction: 'Fill a 1 oz of Collins glass with ice. Pour in 1 oz of vodka, 1 oz of lime cordial, and 1 oz of cranberry juice. Fill up with Sprite. Garnish with a Lime wheel or some cranberries',
        ingredient: 'Vodka, Roses sweetened lime juice, Cranberry Juice, Sprite',
        image: 'https://www.thecocktaildb.com/images/media/drink/i9suxb1582474926.jpg'
    },
    {
        name: 'A midsummernight dream',
        instruction: 'Mix 5 strawberries in a blender Pour it together with 2 oz of vodka, 1 oz of kirch and 1 tsp strawberry liqueur over ice in a shaker. Shake well and pour in a highball glass. Fill up with the Russchian water',
        ingredient: 'Vodka, Kirschwasser, Strawberry liqueur, Strawberries, Schweppes Russchian',
        image: 'https://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg'
    },
    {
        name: 'A.D.M. (After Dinner Mint)',
        instruction: 'Shake 1/2 oz of white Creme de Menthe, 3/4 oz of southern Comfort, 1/2 oz of vodka and fill with hot chocolate vigorously',
        ingredient: 'White Creme de Menthe, Southern Comfort, Vodka, Hot chocolate',
        image: 'https://www.thecocktaildb.com/images/media/drink/ruxuvp1472669600.jpg'
    },
    {
        name: 'Absinthe #2',
        instruction: 'Mix 1 bottle of vodka, 50 gr of sugar, 50 ml pure of anise, 1 tblsp of licorice root, and 1 wormwood together and let sit a few days. Strain through a coffee filter. To serve mix 1 part absinthe to 4 parts water, add ice, enjoy.',
        ingredient: 'Vodka, Sugar, Anise, Licorice root, Wormwood',
        image: 'https://www.thecocktaildb.com/images/media/drink/uxxtrt1472667197.jpg'
    },
    {
        name: 'Absolutely Fabulous',
        instruction: 'Mix 1 shot of Vodka and 2 shots of Cranberry juice together in a shaker and strain into a glass. Top up with Champagne.',
        ingredient: 'Vodka, Cranberry Juice, Champagne',
        image: 'https://www.thecocktaildb.com/images/media/drink/abcpwr1504817734.jpg'
    },
    {
        name: 'Adam Bomb',
        instruction: 'Add ice to blender (or to glass if prefer on the rocks) then fruit, and fruit juice depending on personal preference then add the 1 shot of Rum, 1 shot of Vodka, 1 shot of Tequila, and 1/2 shot of triple sec. blend till smooth, rim glass with sugar or salt and pour mixture in. garnish with lemon or lime slice.',
        ingredient: 'Rum, Vodka, Tequila, Triple sec, Fruit, Ice, Salt, Fruit juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg'
    },
    {
        name: 'Adam Sunrise',
        image: 'https://www.thecocktaildb.com/images/media/drink/vtuyvu1472812112.jpg'
    },
    {
        name: 'Addison Special',
        image: 'https://www.thecocktaildb.com/images/media/drink/4vo5651493068493.jpg'
    },
    {
        name: 'After sex',
        image: 'https://www.thecocktaildb.com/images/media/drink/xrl66i1493068702.jpg'
    },
    {
        name: 'Apricot punch',
        image: 'https://www.thecocktaildb.com/images/media/drink/tuxxtp1472668667.jpg'
    },
    {
        name: 'Arctic Fish',
        image: 'https://www.thecocktaildb.com/images/media/drink/ttsvwy1472668781.jpg'
    },
    {
        name: 'Arizona Antifreeze',
        image: 'https://www.thecocktaildb.com/images/media/drink/dbtylp1493067262.jpg'
    },
    {
        name: 'Arizona Twister',
        image: 'https://www.thecocktaildb.com/images/media/drink/ido1j01493068134.jpg'
    },
    {
        name: 'Army special',
        image: 'https://www.thecocktaildb.com/images/media/drink/55muhh1493068062.jpg'
    },
    {
        name: 'Atlantic Sun',
        image: 'https://www.thecocktaildb.com/images/media/drink/doyxqb1493067556.jpg'
    },
    {
        name: 'Atomic Lokade',
        image: 'https://www.thecocktaildb.com/images/media/drink/n3zfrh1493067412.jpg'
    },
    {
        name: 'Autodafé',
        image: 'https://www.thecocktaildb.com/images/media/drink/7dkf0i1487602928.jpg'
    },
    {
        name: 'Avalon',
        image: 'https://www.thecocktaildb.com/images/media/drink/3k9qic1493068931.jpg'
    },
    {
        name: 'Aztec Punch',
        image: 'https://www.thecocktaildb.com/images/media/drink/uqwuyp1454514591.jpg'
    },
    {
        name: 'Belgian Blue',
        image: 'https://www.thecocktaildb.com/images/media/drink/jylbrq1582580066.jpg'
    },
    {
        name: 'Bellini Martini',
        image: 'https://www.thecocktaildb.com/images/media/drink/3h9wv51504389379.jpg'
    },
    {
        name: 'Black Russian',
        image: 'https://www.thecocktaildb.com/images/media/drink/8oxlqf1606772765.jpg'
    },
    {
        name: 'Bloody Mary',
        image: 'https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg'
    },
    {
        name: 'Bloody Punch',
        image: 'https://www.thecocktaildb.com/images/media/drink/5yhd3n1571687385.jpg'
    },
    {
        name: 'Blue Lagoon',
        image: 'https://www.thecocktaildb.com/images/media/drink/5wm4zo1582579154.jpg'
    },
    {
        name: 'Blue Mountain',
        image: 'https://www.thecocktaildb.com/images/media/drink/bih7ln1582485506.jpg'
    },
    {
        name: 'Brain Fart',
        image: 'https://www.thecocktaildb.com/images/media/drink/rz5aun1504389701.jpg'
    },
    {
        name: 'Bruised Heart',
        image: 'https://www.thecocktaildb.com/images/media/drink/7if5kq1503564209.jpg'
    },
    {
        name: 'Bubble Gum',
        image: 'https://www.thecocktaildb.com/images/media/drink/spuurv1468878783.jpg'
    },
    {
        name: 'Caribbean Orange Liqueur',
        image: 'https://www.thecocktaildb.com/images/media/drink/qwxuwy1472667570.jpg'
    },
    {
        name: 'Cherry Electric Lemonade',
        image: 'https://www.thecocktaildb.com/images/media/drink/tquyyt1451299548.jpg'
    },
    {
        name: 'Chocolate Black Russian',
        image: 'https://www.thecocktaildb.com/images/media/drink/yyvywx1472720879.jpg'
    },
    {
        name: 'Cosmopolitan Martini',
        image: 'https://www.thecocktaildb.com/images/media/drink/upxxpq1439907580.jpg'
    },
    {
        name: 'Dirty Martini',
        image: 'https://www.thecocktaildb.com/images/media/drink/vcyvpq1485083300.jpg'
    },
    {
        name: 'Espresso Martini',
        image: 'https://www.thecocktaildb.com/images/media/drink/n0sx531504372951.jpg'
    },
    {
        name: 'Figgy Thyme',
        image: 'https://www.thecocktaildb.com/images/media/drink/pbw4e51606766578.jpg'
    },
    {
        name: 'Flaming Dr. Pepper',
        image: 'https://www.thecocktaildb.com/images/media/drink/d30z931503565384.jpg'
    },
    {
        name: 'Freddy Kruger',
        image: 'https://www.thecocktaildb.com/images/media/drink/tuppuq1461866798.jpg'
    },
    {
        name: 'French Martini',
        image: 'https://www.thecocktaildb.com/images/media/drink/clth721504373134.jpg'
    },
    {
        name: 'Gideons Green Dinosaur',
        image: 'https://www.thecocktaildb.com/images/media/drink/p5r0tr1503564636.jpg'
    },
    {
        name: 'Godchild',
        image: 'https://www.thecocktaildb.com/images/media/drink/m5nhtr1504820829.jpg'
    }

];
const seedVodkaDrinks = () => Drink.bulkCreate(vodkaDrinksData);

module.exports = seedVodkaDrinks;