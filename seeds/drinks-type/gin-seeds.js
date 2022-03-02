const { Drink } = require('../models');

const ginDrinksData = [

    {
        name: '3-Mile Long Island Iced Tea',
        image: 'https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg'
        },
        {
        name: '69 Special',
        image: 'https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg'
        },
        {
        name: 'A1',
        image: 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg'
        },
        {
        name: 'Abbey Cocktail',
        image: 'https://www.thecocktaildb.com/images/media/drink/mr30ob1582479875.jpg'
        },
        {
        name: 'Abbey Martini',
        image: 'https://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg'
        },
        {
        name: 'Ace',
        image: 'https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg'
        },
        {
        name: 'Adam & Eve',
        image: 'https://www.thecocktaildb.com/images/media/drink/vfeumw1504819077.jpg'
        },
        {
        name: 'Addison',
        image: 'https://www.thecocktaildb.com/images/media/drink/yzva7x1504820300.jpg'
        },
        {
        name: 'Alaska Cocktail',
        image: 'https://www.thecocktaildb.com/images/media/drink/wsyryt1483387720.jpg'
        },
        {
        name: 'Alexander',
        image: 'https://www.thecocktaildb.com/images/media/drink/0clus51606772388.jpg'
        },
        {
        name: 'Allies Cocktail',
        image: 'https://www.thecocktaildb.com/images/media/drink/qvprvp1483388104.jpg'
        },
        {
        name: 'Angel Face',
        image: 'https://www.thecocktaildb.com/images/media/drink/vaukir1606772580.jpg'
        },
        {
        name: 'Archbishop',
        image: 'https://www.thecocktaildb.com/images/media/drink/4g6xds1582579703.jpg'
        },
        {
        name: 'Army special',
        image: 'https://www.thecocktaildb.com/images/media/drink/55muhh1493068062.jpg'
        },
        {
        name: 'Arthur Tompkins',
        image: 'https://www.thecocktaildb.com/images/media/drink/7onfhz1493067921.jpg'
        },
        {
        name: 'Artillery',
        image: 'https://www.thecocktaildb.com/images/media/drink/g1vnbe1493067747.jpg'
        },
        {
        name: 'AT&T',
        image: 'https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg'
        },
        {
        name: 'Aviation',
        image: 'https://www.thecocktaildb.com/images/media/drink/trbplb1606855233.jpg'
        },
        {
        name: 'Bermuda Highball',
        image: 'https://www.thecocktaildb.com/images/media/drink/qrvtww1441206528.jpg'
        },
        {
        name: 'Bijou',
        image: 'https://www.thecocktaildb.com/images/media/drink/rysb3r1513706985.jpg'
        },
        {
        name: 'Bluebird',
        image: 'https://www.thecocktaildb.com/images/media/drink/5jhyd01582579843.jpg'
        },
        {
        name: 'Bombay Cassis',
        image: 'https://www.thecocktaildb.com/images/media/drink/h1e0e51510136907.jpg'
        },
        {
        name: 'Boomerang',
        image: 'https://www.thecocktaildb.com/images/media/drink/3m6yz81504389551.jpg'
        },
        {
        name: 'Boxcar',
        image: 'https://www.thecocktaildb.com/images/media/drink/pwgtpa1504366376.jpg'
        },
        {
        name: 'Bramble',
        image: 'https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg'
        },
        {
        name: 'Casino',
        image: 'https://www.thecocktaildb.com/images/media/drink/1mvjxg1504348579.jpg'
        },
        {
        name: 'Casino Royale',
        image: 'https://www.thecocktaildb.com/images/media/drink/3qpv121504366699.jpg'
        },
        {
        name: 'Cherry Electric Lemonade',
        image: 'https://www.thecocktaildb.com/images/media/drink/tquyyt1451299548.jpg'
        },
        {
        name: 'Clover Club',
        image: 'https://www.thecocktaildb.com/images/media/drink/t0aja61504348715.jpg'
        },
        {
        name: 'Corpse Reviver',
        image: 'https://www.thecocktaildb.com/images/media/drink/gifgao1513704334.jpg'
        },
        {
        name: 'Derby',
        image: 'https://www.thecocktaildb.com/images/media/drink/52weey1606772672.jpg'
        },
        {
        name: 'Dragonfly',
        image: 'https://www.thecocktaildb.com/images/media/drink/uc63bh1582483589.jpg'
        },
        {
        name: 'Dry Martini',
        image: 'https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg'
        },
        {
        name: 'Dubonnet Cocktail',
        image: 'https://www.thecocktaildb.com/images/media/drink/pfz3hz1582483111.jpg'
        },
        {
        name: 'English Highball',
        image: 'https://www.thecocktaildb.com/images/media/drink/dhvr7d1504519752.jpg'
        },
        {
        name: 'English Rose Cocktail',
        image: 'https://www.thecocktaildb.com/images/media/drink/yxwrpp1441208697.jpg'
        },
        {
        name: 'Flying Dutchman',
        image: 'https://www.thecocktaildb.com/images/media/drink/mwko4q1582482903.jpg'
        },
        {
        name: 'French 75',
        image: 'https://www.thecocktaildb.com/images/media/drink/hrxfbl1606773109.jpg'
        },
        {
        name: 'French Negroni',
        image: 'https://www.thecocktaildb.com/images/media/drink/x8lhp41513703167.jpg'
        },
        {
        name: 'Garibaldi Negroni',
        image: 'https://www.thecocktaildb.com/images/media/drink/kb4bjg1604179771.jpg'
        },
        {
        name: 'Gentleman's Club',
        image: 'https://www.thecocktaildb.com/images/media/drink/k2r7wv1582481454.jpg'
        },
        {
        name: 'Gimlet',
        image: 'https://www.thecocktaildb.com/images/media/drink/3xgldt1513707271.jpg'
        },
        {
        name: 'Gin and Soda',
        image: 'https://www.thecocktaildb.com/images/media/drink/nzlyc81605905755.jpg'
        },
        {
        name: 'Gin And Tonic',
        image: 'https://www.thecocktaildb.com/images/media/drink/z0omyp1582480573.jpg'
        },
        {
        name: 'Gin Basil Smash',
        image: 'https://www.thecocktaildb.com/images/media/drink/jqh2141572807327.jpg'
        },
        {
        name: 'Gin Cooler',
        image: 'https://www.thecocktaildb.com/images/media/drink/678xt11582481163.jpg'
        },
        {
        name: 'Gin Daisy',
        image: 'https://www.thecocktaildb.com/images/media/drink/z6e22f1582581155.jpg'
        },
        {
        name: 'Gin Fizz',
        image: 'https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg'
        },
        {
        name: 'Gin Lemon',
        image: 'https://www.thecocktaildb.com/images/media/drink/yhzvk91643821739.jpg'
        },
        {
        name: 'Gin Rickey',
        image: 'https://www.thecocktaildb.com/images/media/drink/s00d6f1504883945.jpg'
        },
        {
        name: 'Gin Sling',
        image: 'https://www.thecocktaildb.com/images/media/drink/8cl9sm1582581761.jpg'
        },
        {
        name: 'Gin Smash',
        image: 'https://www.thecocktaildb.com/images/media/drink/iprva61606768774.jpg'
        },
        {
        name: 'Gin Sour',
        image: 'https://www.thecocktaildb.com/images/media/drink/noxp7e1606769224.jpg'
        },
        {
        name: 'Gin Squirt',
        image: 'https://www.thecocktaildb.com/images/media/drink/xrbhz61504883702.jpg'
        },
        {
        name: 'Gin Swizzle',
        image: 'https://www.thecocktaildb.com/images/media/drink/sybce31504884026.jpg'
        },
        {
        name: 'Gin Toddy',
        image: 'https://www.thecocktaildb.com/images/media/drink/jxstwf1582582101.jpg'
        },
        {
        name: 'Gin Tonic',
        image: 'https://www.thecocktaildb.com/images/media/drink/qcgz0t1643821443.jpg'
        },
        {
        name: 'Grass Skirt',
        image: 'https://www.thecocktaildb.com/images/media/drink/qyvprp1473891585.jpg'
        },
        {
        name: 'Hawaiian Cocktail',
        image: 'https://www.thecocktaildb.com/images/media/drink/ujoh9x1504882987.jpg'
        },
        {
        name: 'Imperial Cocktail',
        image: 'https://www.thecocktaildb.com/images/media/drink/bcsj2e1487603625.jpg'
        },
        {
        name: 'Jewel Of The Nile',
        image: 'https://www.thecocktaildb.com/images/media/drink/hx4nrb1504884947.jpg'
        },
        {
        name: 'Jitterbug',
        image: 'https://www.thecocktaildb.com/images/media/drink/wwqvrq1441245318.jpg'
        },
        {
        name: 'Lady Love Fizz',
        image: 'https://www.thecocktaildb.com/images/media/drink/20d63k1504885263.jpg'
        },
        {
        name: 'London Town',
        image: 'https://www.thecocktaildb.com/images/media/drink/rpsrqv1468923507.jpg'
        },
        {
        name: 'Lone Tree Cocktail',
        image: 'https://www.thecocktaildb.com/images/media/drink/tsxpty1468923417.jpg'
        },
        {
        name: 'Lone Tree Cooler',
        image: 'https://www.thecocktaildb.com/images/media/drink/wsyqry1479298485.jpg'
        },
        {
        name: 'Long Island Tea',
        image: 'https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg'
        },
        {
        name: 'Martinez 2',
        image: 'https://www.thecocktaildb.com/images/media/drink/fs6kiq1513708455.jpg'
        },
        {
        name: 'Martinez Cocktail',
        image: 'https://www.thecocktaildb.com/images/media/drink/wwxwvr1439906452.jpg'
        },
        {
        name: 'Martini',
        image: 'https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg'
        },
        {
        name: 'Monkey Gland',
        image: 'https://www.thecocktaildb.com/images/media/drink/94psp81504350690.jpg'
        },
        {
        name: 'Mountain Bramble',
        image: 'https://www.thecocktaildb.com/images/media/drink/stwiva1619704025.jpg'
        },
        {
        name: 'Munich Mule',
        image: 'https://www.thecocktaildb.com/images/media/drink/rj55pl1582476101.jpg'
        },
        {
        name: 'National Aquarium',
        image: 'https://www.thecocktaildb.com/images/media/drink/dlw0om1503565021.jpg'
        },
        {
        name: 'Negroni',
        image: 'https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg'
        },
        {
        name: 'Orange Oasis',
        image: 'https://www.thecocktaildb.com/images/media/drink/su1olx1582473812.jpg'
        },
        {
        name: 'Orange Rosemary Collins',
        image: 'https://www.thecocktaildb.com/images/media/drink/mokcas1604179977.jpg'
        },
        {
        name: 'Paradise',
        image: 'https://www.thecocktaildb.com/images/media/drink/ejozd71504351060.jpg'
        },
        {
        name: 'Pegu Club',
        image: 'https://www.thecocktaildb.com/images/media/drink/jfkemm1513703902.jpg'
        },
        {
        name: 'Pink Gin',
        image: 'https://www.thecocktaildb.com/images/media/drink/qyr51e1504888618.jpg'
        },
        {
        name: 'Pink Lady',
        image: 'https://www.thecocktaildb.com/images/media/drink/5ia6j21504887829.jpg'
        },
        {
        name: 'Pink Moon',
        image: 'https://www.thecocktaildb.com/images/media/drink/lnjoc81619696191.jpg'
        },
        {
        name: 'Poppy Cocktail',
        image: 'https://www.thecocktaildb.com/images/media/drink/cslw1w1504389915.jpg'
        },
        {
        name: 'Queen Elizabeth',
        image: 'https://www.thecocktaildb.com/images/media/drink/vpqspv1478963339.jpg'
        },
        {
        name: 'Ramos Gin Fizz',
        image: 'https://www.thecocktaildb.com/images/media/drink/967t911643844053.jpg'
        },
        {
        name: 'Rose',
        image: 'https://www.thecocktaildb.com/images/media/drink/8kxbvq1504371462.jpg'
        },
        {
        name: 'Rosemary Blue',
        image: 'https://www.thecocktaildb.com/images/media/drink/qwc5f91512406543.jpg'
        },
        {
        name: 'Royal Fizz',
        image: 'https://www.thecocktaildb.com/images/media/drink/wrh44j1504390609.jpg'
        },
        {
        name: 'Royal Gin Fizz',
        image: 'https://www.thecocktaildb.com/images/media/drink/pe1x1c1504735672.jpg'
        },
        {
        name: 'Ruby Tuesday',
        image: 'https://www.thecocktaildb.com/images/media/drink/qsyqqq1441553437.jpg'
        },
        {
        name: 'Salted Toffee Martini',
        image: 'https://www.thecocktaildb.com/images/media/drink/3s6mlr1509551211.jpg'
        },
        {
        name: 'Salty Dog',
        image: 'https://www.thecocktaildb.com/images/media/drink/4vfge01504890216.jpg'
        },
        {
        name: 'Singapore Sling',
        image: 'https://www.thecocktaildb.com/images/media/drink/7dozeg1582578095.jpg'
        },
        {
        name: 'Surf City Lifesaver',
        image: 'https://www.thecocktaildb.com/images/media/drink/2rzfer1487602699.jpg'
        },
        {
        name: 'The Laverstoke',
        image: 'https://www.thecocktaildb.com/images/media/drink/6xfj5t1517748412.jpg'
        },
        {
        name: 'The Philosopher',
        image: 'https://www.thecocktaildb.com/images/media/drink/sp8hkp1596017787.jpg'
        },
        {
        name: 'The Strange Weaver',
        image: 'https://www.thecocktaildb.com/images/media/drink/opxjzh1604179528.jpg'
        },
        {
        name: 'Tom Collins',
        image: 'https://www.thecocktaildb.com/images/media/drink/7cll921606854636.jpg'
        },
        {
        name: 'Turf Cocktail',
        image: 'https://www.thecocktaildb.com/images/media/drink/utypqq1441554367.jpg'
        },
        {
        name: 'Tuxedo Cocktail',
        image: 'https://www.thecocktaildb.com/images/media/drink/4u0nbl1504352551.jpg'
        }

];
const seedGinDrinks = () => Drink.bulkCreate(ginDrinksData);

module.exports = seedGinDrinks;