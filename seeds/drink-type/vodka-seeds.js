const { Drinks } = require('../drink-type/vodka-seeds');

const vodkaDrinksData = [

    {
        drink_name: '155 Belmont',
        drink_tyep: 'Vodka',
        instruction: 'Blend 1 shot of dark rum, 2 shots of light rum, 1 shot of vodka and 1 shot of orange juice with ice. Serve in a wine glass. Garnish with carrot.',
        ingredient: 'Dark rum, Light rum, Vodka, Orange juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg'
    },
    {
        drink_name: '501 Blue',
        drink_tyep: 'Vodka',
        instruction: '"Mix equal amounts into a glass with ice.',
        ingredient: 'Blue Curacao, Blueberry schnapps, Vodka, Sour mix, 7-Up',
        image: 'https://www.thecocktaildb.com/images/media/drink/ywxwqs1461867097.jpg'
    },
    {
        drink_name: '57 Chevy with a White License Plate',
        drink_tyep: 'Vodka',
        instruction: '1. Fill a rocks glass with ice 2.add 1 oz of white creme de cacao and 1 oz of vodka 3.stir',
        ingredient: 'Creme de Cacao, Vodka',
        image: 'https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg'
    },
    {
        drink_name: '747 Drink',
        drink_tyep: 'Vodka',
        instruction: 'Fill a 1 oz of Collins glass with ice. Pour in 1 oz of vodka, 1 oz of lime cordial, and 1 oz of cranberry juice. Fill up with Sprite. Garnish with a Lime wheel or some cranberries',
        ingredient: 'Vodka, Roses sweetened lime juice, Cranberry Juice, Sprite',
        image: 'https://www.thecocktaildb.com/images/media/drink/i9suxb1582474926.jpg'
    },
    {
        drink_name: 'A midsummernight dream',
        drink_tyep: 'Vodka',
        instruction: 'Mix 5 strawberries in a blender Pour it together with 2 oz of vodka, 1 oz of kirch and 1 tsp strawberry liqueur over ice in a shaker. Shake well and pour in a highball glass. Fill up with the Russchian water',
        ingredient: 'Vodka, Kirschwasser, Strawberry liqueur, Strawberries, Schweppes Russchian',
        image: 'https://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg'
    },
    {
        drink_name: 'A.D.M. (After Dinner Mint)',
        drink_tyep: 'Vodka',
        instruction: 'Shake 1/2 oz of white Creme de Menthe, 3/4 oz of southern Comfort, 1/2 oz of vodka and fill with hot chocolate vigorously',
        ingredient: 'White Creme de Menthe, Southern Comfort, Vodka, Hot chocolate',
        image: 'https://www.thecocktaildb.com/images/media/drink/ruxuvp1472669600.jpg'
    },
    {
        drink_name: 'Absinthe #2',
        drink_tyep: 'Vodka',
        instruction: 'Mix 1 bottle of vodka, 50 gr of sugar, 50 ml pure of anise, 1 tblsp of licorice root, and 1 wormwood together and let sit a few days. Strain through a coffee filter. To serve mix 1 part absinthe to 4 parts water, add ice, enjoy.',
        ingredient: 'Vodka, Sugar, Anise, Licorice root, Wormwood',
        image: 'https://www.thecocktaildb.com/images/media/drink/uxxtrt1472667197.jpg'
    },
    {
        drink_name: 'Absolutely Fabulous',
        drink_tyep: 'Vodka',
        instruction: 'Mix 1 shot of Vodka and 2 shots of Cranberry juice together in a shaker and strain into a glass. Top up with Champagne.',
        ingredient: 'Vodka, Cranberry Juice, Champagne',
        image: 'https://www.thecocktaildb.com/images/media/drink/abcpwr1504817734.jpg'
    },
    {
        drink_name: 'Adam Bomb',
        drink_tyep: 'Vodka',
        instruction: 'Add ice to blender (or to glass if prefer on the rocks) then fruit, and fruit juice depending on personal preference then add the 1 shot of Rum, 1 shot of Vodka, 1 shot of Tequila, and 1/2 shot of triple sec. blend till smooth, rim glass with sugar or salt and pour mixture in. garnish with lemon or lime slice.',
        ingredient: 'Rum, Vodka, Tequila, Triple sec, Fruit, Ice, Salt, Fruit juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg'
    },
    {
        drink_name: 'Adam Sunrise',
        drink_tyep: 'Vodka',
        instruction: 'Fill blender up with ice. Fill half with Bartons Vodka. Put 10 tsp of sugar, add 1/2 can lemonade concentrate, fill to top with water. Blend for 60 seconds. Use 1/2 shot Vodka, 1/2 can Lemonade, 1/2 Water, 10 tsp Sugar',
        ingredient: 'Vodka, Lemonade, Water, Sugar',
        image: 'https://www.thecocktaildb.com/images/media/drink/vtuyvu1472812112.jpg'
    },
    {
        drink_name: 'Addison Special',
        drink_tyep: 'Vodka',
        instruction: 'Combine ingredients in the order listed into a shaker. Fill half full with ice and shake well. Strain into glass with ice and garnish with a cherry and orange wedge. Use 1 shot Vodka, 1 Tbsp Grenadine, fill with Orange juice.',
        ingredient: 'Vodka, Grenadine, Orange juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/4vo5651493068493.jpg'
    },
    {
        drink_name: 'After sex',
        drink_tyep: 'Vodka',
        instruction: 'Pour the vodka and creme over some ice cubes in a tall glass and fill up with juice. To make it beautiful make the top of the glass with a grenadine and sugar. Use 20 ml vodka, 10 ml Creme de Banana, fill with juice.',
        ingredient: 'Vodka, Creme de Banana, Orange juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/xrl66i1493068702.jpg'
    },
    {
        drink_name: 'Apricot punch',
        drink_tyep: 'Vodka',
        instruction: 'Pour all ingrediants into a large punch bowl. Add ice and 4 oranges that are peeled and divided. Use 1 quart Apricot Brandy, 4/5 Champagne, 1/5 Vodka, 4 Liters 7-Up, and 1/2 gallon Orange juice.',
        ingredient: 'Apricot Brandy, Champagne, Vodka, 7-Up, and Orange juice.',
        image: 'https://www.thecocktaildb.com/images/media/drink/tuxxtp1472668667.jpg'
    },
    {
        drink_name: 'Arctic Fish',
        drink_tyep: 'Vodka',
        instruction: 'Fill glass with ice and fish, add vodka, grape soda and orange juice. DO NOT STIR!!!!! Serve well chilled. Use 1/3 part Vodka, 1/3 part Grape soda, 1/3 part Orange juice, lots of Ice, 1 piece candy.',
        ingredient: 'Vodka, Grape soda, Orange juice, Ice, Candy',
        image: 'https://www.thecocktaildb.com/images/media/drink/ttsvwy1472668781.jpg'
    },
    {
        drink_name: 'Arizona Antifreeze',
        drink_tyep: 'Vodka',
        instruction: 'Pour all ingredients into shot glass and slam !!!! Use 1/3 oz Vodka, 1/3 oz Midori melon liqueur, 1/3 oz Sweet and Sour.',
        ingredient: 'Vodka, Midori melon liqueur, Sweet and Sour',
        image: 'https://www.thecocktaildb.com/images/media/drink/dbtylp1493067262.jpg'
    },
    {
        drink_name: 'Arizona Twister',
        drink_tyep: 'Vodka',
        instruction: 'Mix in the shots of rum, vodka, and tequila. Add splashes of the three juices, heavy on the pineapple. Top off with grenadine. Crushed ice should already be in glass. Top off the glass with a pineapple wedge. Use 1 shot Vodka, 1 shot Malibu rum, 1 shot Gold tequila, 1 splash Orange juice, 1 splash Pineapple juice, 1 splash Cream of coconut, 1 dash Grenadine, crushed Ice, 1 wedege Pineapple.',
        ingredient: 'Vodka, Malibu rum, Gold tequila, Orange juice, Pineapple juice, Cream of coconut, Grenadine, Ice, Pineapple',
        image: 'https://www.thecocktaildb.com/images/media/drink/ido1j01493068134.jpg'
    },
    {
        drink_name: 'Army special',
        drink_tyep: 'Vodka',
        instruction: 'Pour Vodka, Gin and lime cordial into glass, and top up with crushed ice. Wait for ice to melt slightly and sip without a straw. Use 30 ml Vodka, 30 ml Gin, 45 ml Lime juice cordial, 1/2 glass crushed ice.',
        ingredient: 'Vodka, Gin, Lime juice cordial, Ice',
        image: 'https://www.thecocktaildb.com/images/media/drink/55muhh1493068062.jpg'
    },
    {
        drink_name: 'Atlantic Sun',
        drink_tyep: 'Vodka',
        instruction: 'Shake all the ingredients, top the drink with soda. Garnish with a slice of orange. Use 20 ml Vodka, 20 ml Southern Comfort, 20 ml Passion fruit syrup, 60 ml Sweet and sour, a dash of Club soda.',
        ingredient: 'Vodka, Southern Comfort, Passion fruit syrup, Sweet and sour, Club soda',
        image: 'https://www.thecocktaildb.com/images/media/drink/doyxqb1493067556.jpg'
    },
    {
        drink_name: 'Atomic Lokade',
        drink_tyep: 'Vodka',
        instruction: 'In a shaker, place lemonade, vodka, blue Curacao, and triple sec together. Shake with ice and strain into glass. Add sugar to taste. Use 5 oz Lemonade, 1 oz Vodka, 1/2 oz Blue Curacao, 1/2 oz Triple sec, sugar to taste, fill with ice.',
        ingredient: 'Lemonade, Vodka, Blue Curacao, Triple sec, Sugar, Ice',
        image: 'https://www.thecocktaildb.com/images/media/drink/n3zfrh1493067412.jpg'
    },
    {
        drink_name: 'Autodafé',
        drink_tyep: 'Vodka',
        instruction: 'Mix and fill up with soda water. Drunk by finns on a sunny day any time of the year and day. Use 40ml Vodka, 1 dash Lime juice, fill with Soda water.',
        ingredient: 'Vodka, Lime juice, Soda water',
        image: 'https://www.thecocktaildb.com/images/media/drink/7dkf0i1487602928.jpg'
    },
    {
        drink_name: 'Avalon',
        drink_tyep: 'Vodka',
        instruction: 'Fill a tall glass with ice. Layer the Finlandia Vodka, lemon and apple juices, Pisang Ambon, and top up with lemonade. Stir slightly and garnish with a spiralled cucumber skin and a red cherry. The cucumber provides zest and looks attractive. This drink, created by Timo Haimi, took first prize in the 1991 Finlandia Vodka Long Drink Competition. Use 3 parts Vodka, 1 part Pisang Ambon, 6 parts Apple juice, 1.5 part lemon juice and top with lemonade.',
        ingredient: 'Vodka, Pisang Ambon, Apple juice, Lemon juice, Lemonade',
        image: 'https://www.thecocktaildb.com/images/media/drink/3k9qic1493068931.jpg'
    },
    {
        drink_name: 'Aztec Punch',
        drink_tyep: 'Vodka',
        instruction: 'Mix all ingredients in a pitcher. Mix thoroughly and pour into whatever is available, the bigger the better! This drink packs a big punch, so be careful! Use 1 can Lemonade, 5 oz Vodka, 7 lz Rum, about 1 bottle of Ginger ale.',
        ingredient: 'Lemonade, Vodka, Rum, Ginger ale',
        image: 'https://www.thecocktaildb.com/images/media/drink/uqwuyp1454514591.jpg'
    },
    {
        drink_name: 'Belgian Blue',
        drink_tyep: 'Vodka',
        instruction: 'Just pour all ingredients in the glass and stir. Use 20 ml Vodka, 10 ml Coconut liqueur, 10 ml Blue Curacao, fill with Sprite.',
        ingredient: 'Vodka, Coconut liqueur, Blue Curacao, Sprite',
        image: 'https://www.thecocktaildb.com/images/media/drink/jylbrq1582580066.jpg'
    },
    {
        drink_name: 'Bellini Martini',
        drink_tyep: 'Vodka',
        instruction: 'Add ice cubes to shaker. Add vodka. Add peach schnapps. Add peach nectar. Shake. Strain into glass. Add lemon twist peel. Use 8 cubes of ice, 3 oz Vodka, 1.5 oz Peach Nectar, 1.5 oz Peach Schnapps, 1 Lemon peel.',
        ingredient: 'Ice, Vodka, Peach Nectar, Peach Schnapps, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/3h9wv51504389379.jpg'
    },
    {
        drink_name: 'Black Russian',
        drink_tyep: 'Vodka',
        instruction: 'Pour the ingredients into an old fashioned glass filled with ice cubes. Stir gently. Use 3/4 oz Coffee Liqueur, 1.5 oz Vodka.',
        ingredient: 'Coffee Liqueur, Vodka',
        image: 'https://www.thecocktaildb.com/images/media/drink/8oxlqf1606772765.jpg'
    },
    {
        drink_name: 'Bloody Mary',
        drink_tyep: 'Vodka',
        instruction: 'Stirring gently, pour all ingredients into highball glass. Garnish. Use 1.5 oz Vodka, 3 oz Tomato juice, 1 dash Lemon juice, 1/2 tsp Worcestershire sauce, 2-3 drops Tabasco sauce, 1 Lime wedge. Add other ingredients as desired; cheese, smoked meat, pickles, celery, celery salt are all popular choices.',
        ingredient: 'Vodka, Tomato juice, Lemon juice, Worcestershire sauce, Tabasco sauce, Lime',
        image: 'https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg'
    },
    {
        drink_name: 'Bloody Punch',
        drink_tyep: 'Vodka',
        instruction: 'Step 1 - Place the thawed strawberries in a large bowl. Mash them with a fork to ensure no large chunks. Step 2 - In a punch bowl or pitcher, combine mashed strawberries, lime pulp and soda. Mix well. Step 3 - Add blueberries and raisins. They will float and look like bugs in the punch. Use 10 shots Vodka, 3 cups Strawberries, 1/2 cup Lime juice, 12 oz Lemon-lime soda, 1 cup raisins, 1 cups blueberries.',
        ingredient: 'Vodka, Strawberries, Lime juice, Lemon-lime soda, raisins, blueberries',
        image: 'https://www.thecocktaildb.com/images/media/drink/5yhd3n1571687385.jpg'
    },
    {
        drink_name: 'Blue Lagoon',
        drink_tyep: 'Vodka',
        instruction: 'Pour vodka and curacao over ice in a highball glass. Fill with lemonade, top with the cherry, and serve. Use 1 oz Vodka, 1 oz Blue Curacao, Lemonade, Cherry.',
        ingredient: 'Vodka, Blue Curacao, Lemonadade, Cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/5wm4zo1582579154.jpg'
    },
    {
        drink_name: 'Blue Mountain',
        drink_tyep: 'Vodka',
        instruction: 'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into an old-fashioned glass almost filled with ice cubes. Use 1.5 oz Añejo rum, 0.5 oz Tia maria, 0.5 oz Vodka, 1 oz Orange juice, 1 tsp Lemon juice.',
        ingredient: 'Añejo rum, Tia maria, Vodka, Orange juice, Lemon juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/bih7ln1582485506.jpg'
    },
    {
        drink_name: 'Brain Fart',
        drink_tyep: 'Vodka',
        instruction: 'Mix all ingredients together. Slowly and gently. Works best if ice is added to punch bowl and sodas are very cold. Use 1/5 Everclear, 1/5 Vodka, 2 liters Mountain Dew, 2 liters Surge, 1 small bottle Lemon juice, 1 pint Rum.',
        ingredient: 'Everclear, Vodka, Mountain Dew, Surge, Lemon juice, Rum',
        image: 'https://www.thecocktaildb.com/images/media/drink/rz5aun1504389701.jpg'
    },
    {
        drink_name: 'Bruised Heart',
        drink_tyep: 'Vodka',
        instruction: 'Pour all ingredients in a mixing tin over ice, stir, and strain into shot glass. Use 1/2 oz Vodka, 1/2 oz Shambord raspberry liqueur, 1/2 oz Peachtree Schnapps, 1/2 oz Cranberry juice.',
        ingredient: 'Vodka, Shambord raspberry liqueur, Peachtree Schnapps, Cranberry juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/7if5kq1503564209.jpg'
    },
    {
        drink_name: 'Bubble Gum',
        drink_tyep: 'Vodka',
        instruction: 'Layer in order into a shot glass. Use 1 part Vodka, 1 part Banana Liqueur, 1 part Orange juice, 1 part Peach Schnapps. ',
        ingredient: 'Vodka, Banana Liqueur, Orange juice, Peach Schnapps',
        image: 'https://www.thecocktaildb.com/images/media/drink/spuurv1468878783.jpg'
    },
    {
        drink_name: 'Caribbean Orange Liqueur',
        drink_tyep: 'Vodka',
        instruction: 'Pare very thinly the bright-colored rind from the oranges (no white). Blot the peel on paper towels to remove any excess oil. Put peel in a 4 cup screw-top jar. Add 2 cups vodka. Close jar. Store in a cool, dark place for 2 days or until the vodka has absorbed the flavor. Remove peel and add remaining vodka. Close jar and add remaining cup of vodka. Close the jar and store in a cool dark place at least 1 month to age.',
        ingredient: 'Orange, Vodka, Sugar',
        image: 'https://www.thecocktaildb.com/images/media/drink/qwxuwy1472667570.jpg'
    },
    {
        drink_name: 'Cherry Electric Lemonade',
        drink_tyep: 'Vodka',
        instruction: 'Stir vigorously and then pour over a large cup of ice. Now drink it with a straw and stir occasionally. Use 1 oz Gin, 1 oz Tequila, 1 oz Vodka, 1 oz White rum, 1 oz Triple sec, 1 oz Cherry Grenadine, 1 oz Sweet and sour, 3 oz Club soda.',
        ingredient: 'Gin, Tequila, Vodka, White Rum, Triple Sec, Cherry Grenadine, Sweet and Sour, Club Soda',
        image: 'https://www.thecocktaildb.com/images/media/drink/tquyyt1451299548.jpg'
    },
    {
        drink_name: 'Chocolate Black Russian',
        drink_tyep: 'Vodka',
        instruction: 'Combine all ingredients in an electric blender and blend at a low speed for a short length of time. Pour into a chilled champagne flute and serve. Use 1 oz Kahlua, 1/2 oz Vodka, 5 oz Chocolate ice cream.',
        ingredient: 'Kahlua, Vodka, Chocolate ice cream',
        image: 'https://www.thecocktaildb.com/images/media/drink/yyvywx1472720879.jpg'
    },
    {
        drink_name: 'Cosmopolitan Martini',
        drink_tyep: 'Vodka',
        instruction: 'Pour all ingredients in mixing glass half filled with ice, shake and strain into chilled Martini glass. Use 1/2 oz Cointreau, 1 oz Vodka, juice of half a Lime, 1 splash Cranberry juice.',
        ingredient: 'Cointreau, Vodka, Lime, Cranberry juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/upxxpq1439907580.jpg'
    },
    {
        drink_name: 'Dirty Martini',
        drink_tyep: 'Vodka',
        instruction: 'Pour the vodka, dry vermouth and olive brine into a cocktail shaker with a handful of ice and shake well.\r\nRub the rim of a martini glass with the wedge of lemon.\r\nStrain the contents of the cocktail shaker into the glass and add the olive.\r\nA dirty Martini contains a splash of olive brine or olive juice and is typically garnished with an olive. Use 70 ml Vodka, 1 Tbsp Dry Vermouth, 1 Tbsp Olive Brine, 1 Lemon wedge, 1 Olive.',
        ingredient: 'Vodka, Dry Vermouth, Olive Brine, Lemon, Olive',
        image: 'https://www.thecocktaildb.com/images/media/drink/vcyvpq1485083300.jpg'
    },
    {
        drink_name: 'Espresso Martini',
        drink_tyep: 'Vodka',
        instruction: 'Pour ingredients into shaker filled with ice, shake vigorously, and strain into chilled martini glass. Use 50 ml Vodka, 10 ml Kahlua, 1 dash sugar syrup.',
        ingredient: 'Vodka, Kahlua, Sugar syrup',
        image: 'https://www.thecocktaildb.com/images/media/drink/n0sx531504372951.jpg'
    },
    {
        drink_name: 'Figgy Thyme',
        drink_tyep: 'Vodka',
        instruction: 'In a loose bag, crush up some ice. Pour your precious ice into a collins glass. In a cocktail shaker, muddle the figs and thyme together. Add honey vodka, lemon juice, and a large ice cube. Shake until well chilled, and strain into glass. Add tonic water and finally 2 dashes of angostura bitters. Garnish with sliced figs and thyme. Use 2oz Vodka, 1 tsp Honey, 3 Figs, 1 sprig Thyme, 2 dashes Angostura Bitters, top with Tonic Water.',
        ingredient: 'Vodka, Honey, Figs, Thyme, Agostura Bitters, Tonic Water',
        image: 'https://www.thecocktaildb.com/images/media/drink/pbw4e51606766578.jpg'
    },
    {
        drink_name: 'Flaming Dr. Pepper',
        drink_tyep: 'Vodka',
        instruction: 'Add Amaretto, Bacardi, and vodka. Mix in the Dr. Pepper and beer. Use 1 oz Amaretto, 1 oz Vodka, 1 oz Bacardi 151 proof Rum, 1 oz Dr. Pepper, 1 oz beer.',
        ingredient: 'Amaretto, Vodka, Rum, Dr. Pepper, Beer',
        image: 'https://www.thecocktaildb.com/images/media/drink/d30z931503565384.jpg'
    },
    {
        drink_name: 'Freddy Kruger',
        drink_tyep: 'Vodka',
        instruction: 'Make it an ample size shot. Use 1/2 oz Jägermeister, 1/2 oz Sambuca, 1/2 oz Vodka.',
        ingredient: 'Jägermeister, Sambuca, Vodka',
        image: 'https://www.thecocktaildb.com/images/media/drink/tuppuq1461866798.jpg'
    },
    {
        drink_name: 'French Martini',
        drink_tyep: 'Vodka',
        instruction: 'Pour all ingredients into shaker with ice cubes. Shake well and strain into a chilled cocktail glass. Squeeze oil from lemon peel onto the drink. Use 45 ml Vodka, 15 ml Raspberry Liqueur, 15 ml Pineapple juice.',
        ingredient: 'Vodka, Raspberry Liqueur, Pineapple juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/clth721504373134.jpg'
    },
    {
        drink_name: 'Gideons Green Dinosaur',
        drink_tyep: 'Vodka',
        instruction: 'Add all ingredients in collins glass with ice and stir. Use 1/2 oz Dark rum, 1/2 oz Vodka, 1/2 oz Triple Sec, 1/2 oz Tequila, 1/2 oz Melon liqueur, fill with Mountain Dew.',
        ingredient: 'Dark rum, Vodka, Triple Sec, Tequila, Melon liqueur, Mountain Dew',
        image: 'https://www.thecocktaildb.com/images/media/drink/p5r0tr1503564636.jpg'
    },
    {
        drink_name: 'Godchild',
        drink_tyep: 'Vodka',
        instruction: 'Shake all ingredients well with cracked ice, strain into a champagne flute, and serve. Use 1 oz Vodka, 1 oz Amaretto, 1 oz Heavy cream.',
        ingredient: 'Vodka, Amaretto, Heavy cream',
        image: 'https://www.thecocktaildb.com/images/media/drink/m5nhtr1504820829.jpg'
    }

];
const seedVodkaDrinks = () => Drink.bulkCreate(vodkaDrinksData);

module.exports = seedVodkaDrinks;