const { Drinks } = require('../drink-type/tequila-seeds');

const tequilaDrinksData = [
  {
    drink_name: '110 in the shade',
    drink_type: 'Tequila',
    instruction: 'Drop 16 oz of lager and 1.5 oz of tequila and mix them in a glass.',
    ingredient: 'Lager, Tequila',
    image: 'https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg'
  },
  {
    drink_name: '3-Mile Long Island Iced Tea',
    drink_type: 'Tequila',
    instruction: 'Fill 14oz glass with ice and alcohol. Fill 2/3 glass with cola and remainder with sweet & sour. Top with dash of bitters and lemon wedge.',
    ingredient: 'Gin, Light rum, Tequila, Triple sec, Vodka, Coca-Cola, Sweet and sour, Bitters, Lemon',
    image: 'https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg'
  },
  {
    drink_name: 'Adam Bomb',
    drink_type: 'Tequila',
    instruction: 'Add ice to blender (or to glass if prefer on the rocks) then fruit, and fruit juice depending on personal preference then add the Rum, Vodka, Tequila, and triple sec. blend till smooth, rim glass with sugar or salt and pour mixture in. garnish with lemon or lime slice.',
    ingredient: 'Rum, Vodka, Tequila, Triple Sec, Fruit, Ice, Salt, Fruit juice',
    image: 'https://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg'
  },
  {
    drink_name: 'Amaretto Stone Sour Alternative',
    drink_type: 'Tequila',
    instruction: 'Shake sour mix, tequila and amaretto with ice. Strain into highball glass. Add a splash of OJ. Garnish with orange slice and a cherry. Use 2 oz Sour mix, 2 oz Amaretto, 2 oz Tequila, splash of Orange juice.',
    ingredient: 'Sour mix, Amaretto, Tequila, Orange juice',
    image: 'https://www.thecocktaildb.com/images/media/drink/wutxqr1472720012.jpg'
  },
  {
    drink_name: 'Apple Grande',
    drink_type: 'Tequila',
    instruction: 'Chill both ingredients!! Mix in a tumbler and enjoy! Use 3 oz Tequila, 12 oz Apple cider.',
    ingredient: 'Tequila, Apple cider',
    image: 'https://www.thecocktaildb.com/images/media/drink/wqrptx1472668622.jpg'
  },
  {
    drink_name: 'Bloody Maria',
    drink_type: 'Tequila',
    instruction: 'Shake all ingredients (except lemon slice) with cracked ice and strain into an old-fashioned glass over ice cubes. Add the slice of lemon and serve. Use 1 oz Tequila, 2 oz Tomato juice, 1 dash Lemon juice, 1 dash Tabasco sauce, 1 dash Celery salt, 1 slice of Lemon.',
    ingredient: 'Tequila, Tomato juice, Lemon juice, Tabasco sauce, Celery salt, Lemon',
    image: 'https://www.thecocktaildb.com/images/media/drink/yz0j6z1504389461.jpg'
  },
  {
    drink_name: 'Blue Margarita',
    drink_type: 'Tequila',
    instruction: 'Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve. Use 1.5 oz Tequila, 1 oz Blue Cruacao, 1 oz Lime juice, coarse salt.',
    ingredient: 'Tequila, Blue Cruacao, Lime juice, coarse salt',
    image: 'https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg'
  },
  {
    drink_name: 'Brave Bull Shooter',
    drink_type: 'Tequila',
    instruction: 'Pour Tabasco into bottom of shot glass and fill with tequila. Use 1/2 oz Tequila, 1/2 oz Tabasco sauce.',
    ingredient: 'Tequila, Tabasco sauce',
    image: 'https://www.thecocktaildb.com/images/media/drink/yrtypx1473344625.jpg'
  },
  {
    drink_name: 'Cherry Electric Lemonade',
    drink_type: 'Tequila',
    instruction: 'Now stir vigorously and then pour over a large cup of ice. Now drink it with a straw and stir occasionally. Use 1 oz Gin,  1 oz Tequila, 1 oz Vodka, 1 oz White rum, 1 oz Triple Sec, 1 oz Cherry Grenadine, 1 oz Sweet and sour, 3 oz Club soda.',
    ingredient: 'Gin, Tequila, Vodka, White rum, Triple Sec, Cherry Grenadine, Sweet and sour, Club soda',
    image: 'https://www.thecocktaildb.com/images/media/drink/tquyyt1451299548.jpg'
  },
  {
    drink_name: 'Downshift',
    drink_type: 'Tequila',
    instruction: 'Start with the Sprite. Next comes the tequila. After that, add the Minute Maid Fruit Punch, then float the 151. Rocks optional. Use 2 parts Fruit punch, 1 part Sprite, 2 shots Tequila, Rum.',
    ingredient: 'Fruit punch, Sprite, Tequila, Rum',
    image: 'https://www.thecocktaildb.com/images/media/drink/y36z8c1503563911.jpg'
  },
  {
    drink_name: 'Long Island Iced Tea',
    drink_type: 'Tequila',
    instruction: 'Mix all contents in a highball glass and sitr gently. Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist. 1/2 oz Vodka, 1/2 oz Tequila, 1/2 oz Light rum, 1/2 oz Gin, 1/2 oz Coca-Cola, twist of Lemon peel.',
    ingredient: 'Vodka, Tequila, Light rum, Gin, Coca-Cola, Lemon peel',
    image: 'https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg'
  },
  {
    drink_name: 'Margarita',
    drink_type: 'Tequila',
    instruction: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass. Use 1.5 oz Tequila, 0.5 oz of Triple sec and 1 oz of lime juice',
    ingredient: 'Tequila, Triple sec, Lime juice, Salt',
    image: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg'
  },
  {
    drink_name: 'Moranguito',
    drink_type: 'Tequila',
    instruction: 'Add 2/5 absinthe, then 2/5 tequila, and then 1/5 Granadine syrup.',
    ingredient: 'Absinthe, Tequila, Granadine syrup',
    image: 'https://www.thecocktaildb.com/images/media/drink/urpsyq1475667335.jpg'
  },
  {
    drink_name: 'Paloma',
    drink_type: 'Tequila',
    instruction: 'Add 3 oz Grape soda to 1.5 oz Tequila. Stir together and serve over ice.',
    ingredient: 'Grape soda, Tequila',
    image: 'https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg'
  },
  {
    drink_name: 'Pineapple Paloma',
    drink_type: 'Tequila',
    instruction: 'Rub the rim of each glass with lime slice and dip into salt. Add ice, tequila, grapefruit juice, lime juice and top with pineapple soda. Give it a quick stir. Garnish with fresh pineapple or lime. Use 4 oz Tequila, 4 oz Grapefruit Juice, 1 oz Fresh Lime Juice, 8 oz Pineapple Juice,  garnish with Lime.',
    ingredient: 'Tequila, Grapefruit Juice, Fresh Lime Juice, Pineapple Juice, Lime',
    image: 'https://www.thecocktaildb.com/images/media/drink/pg8iw31593351601.jpg'
  },
  {
    drink_name: 'Radioactive Long Island Iced Tea',
    drink_type: 'Tequila',
    instruction: 'Pour all ingredients over ice in a very tall glass. Sip cautiously. Use 1 oz Rum, 1 oz Vodka, 1 oz Tequila, 1 oz  Gin, 1 oz Triple sec, 1 oz Chambord raspberry liqueur, 1 oz Midori melon liqueur, 1 oz Malibu rum.',
    ingredient: 'Rum, Vodka, Tequila,  Gin, Triple sec, Chambord Raspberry Liqueur, Midori Melon Liqueur, Malibu Rum',
    image: 'https://www.thecocktaildb.com/images/media/drink/rdvqmh1503563512.jpg'
  },
  {
    drink_name: 'Strawberry Margarita',
    drink_type: 'Tequila',
    instruction: 'Rub rim of cocktail glass with lemon juice and dip rim in salt. Shake schnapps, tequila, triple sec, lemon juice, and strawberries with ice, strain into the salt-rimmed glass, and serve. Use 1/2 oz Straberry Schnapps, 1 oz Tequila, 1/2 oz Triple sec, 1 oz Lemon juice, 1 oz Strawberries, salt.',
    ingredient: 'Straberry Schnapps, Tequila, Triple sec, Lemon juice, Strawberries, salt',
    image: 'https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg'
  },
  {
    drink_name: 'Tequila Fizz',
    drink_type: 'Tequila',
    instruction: 'Shake all ingredients (except ginger ale) with ice and strain into a collins glass over ice cubes. Fill with ginger ale, stir, and serve. Use 2 oz Tequila, 1 Tbsp Lemon juice, 3/4 oz Grenadine, 1 egg white, Ginger ale.',
    ingredient: 'Tequila, Lemon juice, Grenadine, Egg white, Ginger ale',
    image: 'https://www.thecocktaildb.com/images/media/drink/2bcase1504889637.jpg'
  },
  {
    drink_name: 'Tequila Slammer',
    drink_type: 'Tequila',
    instruction: 'Mix carefully to avoid releasing the dissolved CO2. Use 1 shot Tequila, 1 part 7-Up.',
    ingredient: 'Tequila, 7-Up',
    image: 'https://www.thecocktaildb.com/images/media/drink/43uhr51551451311.jpg'
  },
  {
    drink_name: 'Tequila Sour',
    drink_type: 'Tequila',
    instruction: 'Shake tequila, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Add the half-slice of lemon, top with the cherry, and serve. Use 2 oz Tequila, juice of half a Lemon, 1 tsp Powdered sugar, 1/2 slice lemon, 1 cherry.',
    ingredient: 'Tequila, Lemon, Powdered sugar, Cherry',
    image: 'https://www.thecocktaildb.com/images/media/drink/ek0mlq1504820601.jpg'
  },
  {
    drink_name: 'Tequila Sunrise',
    drink_type: 'Tequila',
    instruction: 'Pour the tequila and orange juice into glass over ice. Add the grenadine, which will sink to the bottom. Stir gently to create the sunrise effect. Garnish and serve. Use 2 measures Tequila, Orange juice, Grenadine.',
    ingredient: 'Tequila, Orange juice, Grenadine',
    image: 'https://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg'
  },
  {
    drink_name: 'Tequila Surprise',
    drink_type: 'Tequila',
    instruction: 'Fill shot glass with Tequila. Add drops of Tabasco sauce. Use full shot of Tequila, 8 drops of Tabasco.',
    ingredient: 'Tequila, Tabasco',
    image: 'https://www.thecocktaildb.com/images/media/drink/8189p51504735581.jpg'
  },
  {
    drink_name: 'Tommys Margarita',
    drink_type: 'Tequila',
    instruction: 'Shake and strain into a chilled cocktail glass. Use 45 ml Tequila, 15 ml Lime juice, 2 spoons Agave syrup.',
    ingredient: 'Tequila, Lime juice, Agave syrup',
    image: 'https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg'
  },
  {
    drink_name: 'Vampiro',
    drink_type: 'Tequila',
    instruction: 'Vampiros may be made in a tall glass or an old fashioned glass. Bartenders may first rim the glass with Kosher Salt, which is done by placing a layer of Kosher Salt on a chopping board, moistening the rim of the glass with lime juice or water, and then placing the upside down glass rim onto the Kosher Salt, so that the salt sticks to the moistened rim. The second step is to fill half the glass with ice and add one or two shooter glasses full of high quality Tequila. The next stage is to add the flavouring elements. This is done by squeezing a fresh lime into the glass, adding a few grains of salt, adding citrus-flavoured soda pop, until the glass is 4/5 full, and then adding spicy Viuda de Sanchez (or orange juice, lime juice and pico de gallo). The final step is to stir the ingredients so that the flavours are properly blended. Use 60 ml Tequila, 30 ml Tomato juice, 30 ml Orange juice, 15 ml Lime juice, 1 dash sugar syrup, 1 pinch salt.',
    ingredient: 'Tequila, Tomato juice, Orange juice, Lime juice, Sugar syrup, Salt',
    image: 'https://www.thecocktaildb.com/images/media/drink/yfhn371504374246.jpg'
  },
  {
    drink_name: 'Whitecap Margarita',
    drink_type: 'Tequila',
    instruction: 'Place all ingredients in a blender and blend until smooth. This makes one drink. Use 1 cup Ice, 2 oz Tequila, 1/4 cup Cream of Coconut, 3 Tbsp lime juice.',
    ingredient: 'Ice, Tequila, Cream of Coconut, Lime juice',
    image: 'https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg'
  },
  {
    drink_name: 'Winter Paloma',
    drink_type: 'Tequila',
    instruction: 'The Paloma gets a delicious Indian makeover. Tequila reposado infused with “Timur Pepper” which has citrusy & grapefruit notes and is grown at the foothills of Himalaya. It also produces a slightly numbing and tingling sensation on your lip when consumed. We have also spiced up the fresh grapefruit juice with the warming spice blend from Himalaya. The combination of all these interesting elements has allowed us to elevate your Paloma sipping experience. Use 2 shots Tequila top with Grapefruit juice, juice of 1 lime, 1 tsp Agave syrup, dash of pepper.',
    ingredient: 'Tequila, Grapefruit juice, Lime, Agave syrup, Timur Pepper',
    image: 'https://www.thecocktaildb.com/images/media/drink/u5f0pz1614007748.jpg'
  },
  {
    drink_name: 'Winter Rita',
    drink_type: 'Tequila',
    instruction: 'Salt rim. Combine all ingredients, shake with ice, and strain over fresh ice. Use 1.75 oz Tequila, 0.25 oz Campari, 0.75 oz Lime juice, 0.5 oz Rosemary Syrup, dash of salt. ',
    ingredient: 'Tequila, Campari, Lime juice, Rosemary Syrup, Salt',
    image: 'https://www.thecocktaildb.com/images/media/drink/fwpd0v1614006733.jpg'
  }
];
const seedTequilaDrinks = () => Drink.bulkCreate(tequilaDrinksData);

module.exports = seedTequilaDrinks;