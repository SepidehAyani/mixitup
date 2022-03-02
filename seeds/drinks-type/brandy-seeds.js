const { Drink } = require('../models');

const brandyDrinksData = [

    {
        name: 'Amaretto Shake',
        image: 'https://www.thecocktaildb.com/images/media/drink/xk79al1493069655.jpg'
    },
    {
        name: 'Bermuda Highball',
        image: 'https://www.thecocktaildb.com/images/media/drink/qrvtww1441206528.jpg'
    },
    {
        name: 'Between The Sheets',
        image: 'https://www.thecocktaildb.com/images/media/drink/of1rj41504348346.jpg'
    },
    {
        name: 'Boston Sidecar',
        image: 'https://www.thecocktaildb.com/images/media/drink/qzs5d11504365962.jpg'
    },
    {
        name: 'Brandy Alexander',
        image: 'https://www.thecocktaildb.com/images/media/drink/mlyk1i1606772340.jpg'
    },
    {
        name: 'Brandy Flip',
        image: 'https://www.thecocktaildb.com/images/media/drink/6ty09d1504366461.jpg'
    },
    {
        name: 'Brandy Sour',
        image: 'https://www.thecocktaildb.com/images/media/drink/b1bxgq1582484872.jpg'
    },
    {
        name: 'City Slicker',
        image: 'https://www.thecocktaildb.com/images/media/drink/dazdlg1504366949.jpg'
    },
    {
        name: 'English Highball',
        image: 'https://www.thecocktaildb.com/images/media/drink/dhvr7d1504519752.jpg'
    },
    {
        name: 'Gentleman's Club',
        image: 'https://www.thecocktaildb.com/images/media/drink/k2r7wv1582481454.jpg'
    },
    {
        name: 'Horse's Neck',
        image: 'https://www.thecocktaildb.com/images/media/drink/006k4e1504370092.jpg'
    },
    {
        name: 'Kioki Coffee',
        image: 'https://www.thecocktaildb.com/images/media/drink/uppqty1441247374.jpg'
    },
    {
        name: 'Mississippi Planters Punch',
        image: 'https://www.thecocktaildb.com/images/media/drink/urpyqs1439907531.jpg'
    },
    {
        name: 'Port Wine Cocktail',
        image: 'https://www.thecocktaildb.com/images/media/drink/qruprq1441553976.jpg'
    },
    {
        name: 'Porto flip',
        image: 'https://www.thecocktaildb.com/images/media/drink/64x5j41504351518.jpg'
    },
    {
        name: 'Quaker's Cocktail',
        image: 'https://www.thecocktaildb.com/images/media/drink/yrqppx1478962314.jpg'
    },
    {
        name: 'Scooter',
        image: 'https://www.thecocktaildb.com/images/media/drink/twuptu1483388307.jpg'
    },
    {
        name: 'Scotch Cobbler',
        image: 'https://www.thecocktaildb.com/images/media/drink/1q7coh1504736227.jpg'
    },
    {
        name: 'Sidecar Cocktail',
        image: 'https://www.thecocktaildb.com/images/media/drink/ewjxui1504820428.jpg'
    },
    {
        name: 'Sol Y Sombra',
        image: 'https://www.thecocktaildb.com/images/media/drink/3gz2vw1503425983.jpg'
    },
    {
        name: 'Stinger',
        image: 'https://www.thecocktaildb.com/images/media/drink/2ahv791504352433.jpg'
    },
    {
        name: 'Victor',
        image: 'https://www.thecocktaildb.com/images/media/drink/voapgc1492976416.jpg'
    }

];
const seedBrandyDrinks = () => Drink.bulkCreate(brandyDrinksData);

module.exports = seedBrandyDrinks;