const { Drink } = require("../models");

const tequilaDrinksData = [
  {
    name: "110 in the shade",
    image:
      "https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg"
  },
  {
    name: "3-Mile Long Island Iced Tea",
    image:
      "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg"
  },
  {
    name: "Adam Bomb",
    image:
      "https://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg"
  },
  {
    name: "Amaretto Stone Sour Alternative",
    image:
      "https://www.thecocktaildb.com/images/media/drink/wutxqr1472720012.jpg"
  },
  {
    name: "Apple Grande",
    image:
      "https://www.thecocktaildb.com/images/media/drink/wqrptx1472668622.jpg"
  },
  {
    name: "Bloody Maria",
    image:
      "https://www.thecocktaildb.com/images/media/drink/yz0j6z1504389461.jpg"
  },
  {
    name: "Blue Margarita",
    image:
      "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg"
  },
  {
    name: "Brave Bull Shooter",
    image:
      "https://www.thecocktaildb.com/images/media/drink/yrtypx1473344625.jpg"
  },
  {
    name: "Cherry Electric Lemonade",
    image:
      "https://www.thecocktaildb.com/images/media/drink/tquyyt1451299548.jpg"
  },
  {
    name: "Downshift",
    image:
      "https://www.thecocktaildb.com/images/media/drink/y36z8c1503563911.jpg"
  },
  {
    name: "Long Island Iced Tea",
    image:
      "https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg"
  },
  {
    name: "Margarita",
    image:
      "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
  },
  {
    name: "Moranguito",
    image:
      "https://www.thecocktaildb.com/images/media/drink/urpsyq1475667335.jpg"
  },
  {
    name: "Paloma",
    image:
      "https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg"
  },
  {
    name: "Pineapple Paloma",
    image:
      "https://www.thecocktaildb.com/images/media/drink/pg8iw31593351601.jpg"
  },
  {
    name: "Radioactive Long Island Iced Tea",
    image:
      "https://www.thecocktaildb.com/images/media/drink/rdvqmh1503563512.jpg"
  },
  {
    name: "Strawberry Margarita",
    image:
      "https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg"
  },
  {
    name: "Tequila Fizz",
    image:
      "https://www.thecocktaildb.com/images/media/drink/2bcase1504889637.jpg"
  },
  {
    name: "Tequila Slammer",
    image:
      "https://www.thecocktaildb.com/images/media/drink/43uhr51551451311.jpg"
  },
  {
    name: "Tequila Sour",
    image:
      "https://www.thecocktaildb.com/images/media/drink/ek0mlq1504820601.jpg"
  },
  {
    name: "Tequila Sunrise",
    image:
      "https://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg"
  },
  {
    name: "Tequila Surprise",
    image:
      "https://www.thecocktaildb.com/images/media/drink/8189p51504735581.jpg"
  },
  {
    name: "Tommy's Margarita",
    image:
      "https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg"
  },
  {
    name: "Vampiro",
    image:
      "https://www.thecocktaildb.com/images/media/drink/yfhn371504374246.jpg"
  },
  {
    name: "Whitecap Margarita",
    image:
      "https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg"
  },
  {
    name: "Winter Paloma",
    image:
      "https://www.thecocktaildb.com/images/media/drink/u5f0pz1614007748.jpg"
  },
  {
    name: "Winter Rita",
    image:
      "https://www.thecocktaildb.com/images/media/drink/fwpd0v1614006733.jpg"
  },
];
const seedTequilaDrinks = () => Drink.bulkCreate(tequilaDrinksData);

module.exports = seedTequilaDrinks;
