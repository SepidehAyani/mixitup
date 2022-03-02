
const { Drink } = require('../models');

const rumDrinksData = [
    {
        name: "Adam Bomb",
        image: "https://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg"
    },
    {
        name: "Adios Amigos Cocktail",
        image: "https://www.thecocktaildb.com/images/media/drink/8nk2mp1504819893.jpg"
    },
    {
        name: "Aztec Punch",
        image: "https://www.thecocktaildb.com/images/media/drink/uqwuyp1454514591.jpg"
    },
    {
        name: "Bahama Mama",
        image: "https://www.thecocktaildb.com/images/media/drink/tyb4a41515793339.jpg"
    },
    {
        name: "Barracuda",
        image: "https://www.thecocktaildb.com/images/media/drink/jwmr1x1504372337.jpg"
    },
    {
        name: "Blue Hurricane",
        image: "https://www.thecocktaildb.com/images/media/drink/nwx02s1515795822.jpg"
    },
    {
        name: "Bounty Hunter",
        image: "https://www.thecocktaildb.com/images/media/drink/t8bgxl1596018175.jpg"
    },
    {
        name: "Captain Kidd's Punch",
        image: "https://www.thecocktaildb.com/images/media/drink/d83spj1596017390.jpg"
    },
    {
        name: "Espresso Rumtini",
        image: "https://www.thecocktaildb.com/images/media/drink/acvf171561574403.jpg"
    },
    {
        name: "Funk and Soul",
        image: "https://www.thecocktaildb.com/images/media/drink/qtv83q1596015790.jpg"
    },
    {
        name: "Hemingway Special",
        image: "https://www.thecocktaildb.com/images/media/drink/jfcvps1504369888.jpg"
    },
    {
        name: "Jamaican Coffee",
        image: "https://www.thecocktaildb.com/images/media/drink/xqptps1441247257.jpg"
    },
    {
        name: "National Aquarium",
        image: "https://www.thecocktaildb.com/images/media/drink/dlw0om1503565021.jpg"
    },
    {
        name: "Orange Whip",
        image: "https://www.thecocktaildb.com/images/media/drink/ttyrxr1454514759.jpg"
    },
    {
        name: "Pure Passion",
        image: "https://www.thecocktaildb.com/images/media/drink/4tymma1604179273.jpg"
    },
    {
        name: "Radioactive Long Island Iced Tea",
        image: "https://www.thecocktaildb.com/images/media/drink/rdvqmh1503563512.jpg"
    },
    {
        name: "Rum Cooler",
        image: "https://www.thecocktaildb.com/images/media/drink/2hgwsb1504888674.jpg"
    },
    {
        name: "Rum Punch",
        image: "https://www.thecocktaildb.com/images/media/drink/wyrsxu1441554538.jpg"
    },
    {
        name: "Rum Toddy",
        image: "https://www.thecocktaildb.com/images/media/drink/athdk71504886286.jpg"
    },
    {
        name: "Spice 75",
        image: "https://www.thecocktaildb.com/images/media/drink/0108c41576797064.jpg"
    },
    {
        name: "Zippy's Revenge",
        image: "https://www.thecocktaildb.com/images/media/drink/1sqm7n1485620312.jpg"
    },
    {
        name: "Zombie",
        image: "https://www.thecocktaildb.com/images/media/drink/2en3jk1509557725.jpg"
    }

];
const seedRumDrinks = () => Drink.bulkCreate(rumDrinksData);

module.exports = seedRumDrinks;