const { Drink } = require('../models');

const vondkaDrinksData = [

    {
        name: '155 Belmont',
        image: 'https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg'
    },
    {
        name: '501 Blue',
        image: 'https://www.thecocktaildb.com/images/media/drink/ywxwqs1461867097.jpg'
    },
    {
        name: '57 Chevy with a White License Plate',
        image: 'https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg'
    },
    {
        name: '747 Drink',
        image: 'https://www.thecocktaildb.com/images/media/drink/i9suxb1582474926.jpg'
    },
    {
        name: 'A midsummernight dream',
        image: 'https://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg'
    },
    {
        name: 'A.D.M. (After Dinner Mint)',
        image: 'https://www.thecocktaildb.com/images/media/drink/ruxuvp1472669600.jpg'
    },
    {
        name: 'Absinthe #2',
        image: 'https://www.thecocktaildb.com/images/media/drink/uxxtrt1472667197.jpg'
    },
    {
        name: 'Absolutely Fabulous',
        image: 'https://www.thecocktaildb.com/images/media/drink/abcpwr1504817734.jpg'
    },
    {
        name: 'Adam Bomb',
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
    },
    {
        name: 'Godmother',
        image: 'https://www.thecocktaildb.com/images/media/drink/quksqg1582582597.jpg'
    },
    {
        name: 'Greyhound',
        image: 'https://www.thecocktaildb.com/images/media/drink/g5upn41513706732.jpg'
    },
    {
        name: 'Harvey Wallbanger',
        image: 'https://www.thecocktaildb.com/images/media/drink/7os4gs1606854357.jpg'
    },
    {
        name: 'Ice Pick',
        image: 'https://www.thecocktaildb.com/images/media/drink/ypsrqp1469091726.jpg'
    },
    {
        name: 'Irish Curdling Cow',
        image: 'https://www.thecocktaildb.com/images/media/drink/yrhutv1503563730.jpg'
    },
    {
        name: 'Irish Russian',
        image: 'https://www.thecocktaildb.com/images/media/drink/swqurw1454512730.jpg'
    },
    {
        name: 'Jello shots',
        image: 'https://www.thecocktaildb.com/images/media/drink/l0smzo1504884904.jpg'
    },
    {
        name: 'Jitterbug',
        image: 'https://www.thecocktaildb.com/images/media/drink/wwqvrq1441245318.jpg'
    },
    {
        name: 'Kamikaze',
        image: 'https://www.thecocktaildb.com/images/media/drink/d7ff7u1606855412.jpg'
    },
    {
        name: 'Kiwi Martini',
        image: 'https://www.thecocktaildb.com/images/media/drink/bmxmyq1630407098.jpg'
    },
    {
        name: 'Kool-Aid Shot',
        image: 'https://www.thecocktaildb.com/images/media/drink/fegm621503564966.jpg'
    },
    {
        name: 'Kool-Aid Slammer',
        image: 'https://www.thecocktaildb.com/images/media/drink/kugu2m1504735473.jpg'
    },
    {
        name: 'Lemon Elderflower Spritzer',
        image: 'https://www.thecocktaildb.com/images/media/drink/125w0o1630407389.jpg'
    },
    {
        name: 'Long Island Iced Tea',
        image: 'https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg'
    },
    {
        name: 'Long Island Tea',
        image: 'https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg'
    },
    {
        name: 'Long vodka',
        image: 'https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg'
    },
    {
        name: 'Moscow Mule',
        image: 'https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg'
    },
    {
        name: 'National Aquarium',
        image: 'https://www.thecocktaildb.com/images/media/drink/dlw0om1503565021.jpg'
    },
    {
        name: 'Orange Crush',
        image: 'https://www.thecocktaildb.com/images/media/drink/zvoics1504885926.jpg'
    },
    {
        name: 'Orange Whip',
        image: 'https://www.thecocktaildb.com/images/media/drink/ttyrxr1454514759.jpg'
    },
    {
        name: 'Oreo Mudslide',
        image: 'https://www.thecocktaildb.com/images/media/drink/tpwwut1468925017.jpg'
    },
    {
        name: 'Passion Fruit Martini',
        image: 'https://www.thecocktaildb.com/images/media/drink/6trfve1582473527.jpg'
    },
    {
        name: 'Pink Panty Pulldowns',
        image: 'https://www.thecocktaildb.com/images/media/drink/squsuy1468926657.jpg'
    },
    {
        name: 'Pink Penocha',
        image: 'https://www.thecocktaildb.com/images/media/drink/6vigjx1503564007.jpg'
    },
    {
        name: 'Popped cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/sxvrwv1473344825.jpg'
    },
    {
        name: 'Pornstar Martini',
        image: 'https://www.thecocktaildb.com/images/media/drink/xjhjdf1630406071.jpg'
    },
    {
        name: 'Radioactive Long Island Iced Tea',
        image: 'https://www.thecocktaildb.com/images/media/drink/rdvqmh1503563512.jpg'
    },
    {
        name: 'Russian Spring Punch',
        image: 'https://www.thecocktaildb.com/images/media/drink/ctt20s1504373488.jpg'
    },
    {
        name: 'San Francisco',
        image: 'https://www.thecocktaildb.com/images/media/drink/szmj2d1504889961.jpg'
    },
    {
        name: 'Screaming Orgasm',
        image: 'https://www.thecocktaildb.com/images/media/drink/x894cs1504388670.jpg'
    },
    {
        name: 'Screwdriver',
        image: 'https://www.thecocktaildb.com/images/media/drink/8xnyke1504352207.jpg'
    },
    {
        name: 'Sea breeze',
        image: 'https://www.thecocktaildb.com/images/media/drink/7rfuks1504371562.jpg'
    },
    {
        name: 'Sex on the Beach',
        image: 'https://www.thecocktaildb.com/images/media/drink/lijtw51551455287.jpg'
    },
    {
        name: 'Shark Attack',
        image: 'https://www.thecocktaildb.com/images/media/drink/uv96zr1504793256.jpg'
    },
    {
        name: 'Snowday',
        image: 'https://www.thecocktaildb.com/images/media/drink/4n1ipk1614009624.jpg'
    },
    {
        name: 'Vesper',
        image: 'https://www.thecocktaildb.com/images/media/drink/mtdxpa1504374514.jpg'
    },
    {
        name: 'Victory Collins',
        image: 'https://www.thecocktaildb.com/images/media/drink/lx0lvs1492976619.jpg'
    },
    {
        name: 'Vodka And Tonic',
        image: 'https://www.thecocktaildb.com/images/media/drink/lmj2yt1504820500.jpg'
    },
    {
        name: 'Vodka Fizz',
        image: 'https://www.thecocktaildb.com/images/media/drink/xwxyux1441254243.jpg'
    },
    {
        name: 'Vodka Lemon',
        image: 'https://www.thecocktaildb.com/images/media/drink/mql55h1643820632.jpg'
    },
    {
        name: 'Vodka Martini',
        image: 'https://www.thecocktaildb.com/images/media/drink/qyxrqw1439906528.jpg'
    },
    {
        name: 'Vodka Russian',
        image: 'https://www.thecocktaildb.com/images/media/drink/rpttur1454515129.jpg'
    },
    {
        name: 'Vodka Slime',
        image: 'https://www.thecocktaildb.com/images/media/drink/apex461643588115.jpg'
    },
    {
        name: 'Vodka Tonic',
        image: 'https://www.thecocktaildb.com/images/media/drink/9koz3f1643821062.jpg'
    },
    {
        name: 'White Russian',
        image: 'https://www.thecocktaildb.com/images/media/drink/vsrupw1472405732.jpg'
    },
    {
        name: 'Zipperhead',
        image: 'https://www.thecocktaildb.com/images/media/drink/r2qzhu1485620235.jpg'
    },
    {
        name: 'Zorbatini',
        image: 'https://www.thecocktaildb.com/images/media/drink/wtkqgb1485621155.jpg'
    }

];
const seedVodkaDrinks = () => Drink.bulkCreate(vodkaDrinksData);

module.exports = seedVodkaDrinks;