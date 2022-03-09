const { Drink } = require('../models');

const drinksData = [
  {
    drink_name: 'Amaretto Shake',
    drink_type: 'Brandy',
    instruction:
      'Combine all ingredients in a blender and blend at high speed until smooth. Serve in chilled glass garnished with bittersweet chocolate shavings. Use two scoops of Chocolate ice-cream, 2 oz of Brandy, and 2 oz Amaretto.',
    ingredient: 'Chocolate ice-cream, Brandy, Amaretto',
    image:
      'https://www.thecocktaildb.com/images/media/drink/xk79al1493069655.jpg',
    user_id: 1,
  },
  {
    drink_name: 'Boston Sidecar',
    drink_type: 'Brandy',
    instruction:
      'Shake all ingredients with ice, strain into a cocktail glass, and serve. Use: 1 oz Brandy, 1 oz Light rum, 1 oz Triple sec, 1 oz Lemon juice',
    ingredient: 'Brandy, Light rum, Triple sec, Lemon juice',
    image:
      'https://www.thecocktaildb.com/images/media/drink/qzs5d11504365962.jpg',
    user_id: 1,
  },
  {
    drink_name: 'Brandy Alexander',
    drink_type: 'Brandy',
    instruction:
      'Shake all ingredients (except nutmeg) with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve. Use 1 oz Brandy, 1 oz white Creme de Cacao, 1 oz light cream, sprinkle of nutmeg.',
    ingredient: 'Brandy, Creme de Cacao, Light cream, Nutmeg',
    image:
      'https://www.thecocktaildb.com/images/media/drink/mlyk1i1606772340.jpg',
    user_id: 1,
  },
  {
    drink_name: 'Brandy Sour',
    drink_type: 'Brandy',
    instruction:
      'Shake brandy, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with the lemon slice, top with the cherry, and serve. Use 2 oz Brandy, juice of half a lemon, 1/2 tsp powdered sugar, 1/2 lemon slice, 1 cherry.',
    ingredient: 'Brandy, Lemon, Powdered sugar, Lemon, Cherry.',
    image:
      'https://www.thecocktaildb.com/images/media/drink/b1bxgq1582484872.jpg',
    user_id: 1,
  },
  {
    drink_name: 'City Slicker',
    drink_type: 'Brandy',
    instruction:
      'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass. Use 2 oz Brandy, 1/2 oz Triple sec, 1 Tbsp Lemon juice.',
    ingredient: 'Brandy, Triple sec, Lemon juice',
    image:
      'https://www.thecocktaildb.com/images/media/drink/dazdlg1504366949.jpg',
    user_id: 1,
  },
  {
    drink_name: 'Scooter',
    drink_type: 'Brandy',
    instruction:
      'Shake all ingredients well with cracked ice, strain into a cocktail glass, and serve. Use 1 oz Brandy, 1 oz Amaretto, 1 oz Light cream',
    ingredient: 'Brandy, Amaretto, Light cream',
    image:
      'https://www.thecocktaildb.com/images/media/drink/twuptu1483388307.jpg',
    user_id: 1,
  },
  {
    drink_name: 'Scotch Cobbler',
    drink_type: 'Brandy',
    instruction:
      'Pour scotch, brandy, and curacao over ice in an old-fashioned glass. Add the orange slice, top with the mint sprig, and serve. Use 2 oz Scotch, 4 dashes Brandy, 4 dashes Curacao, 1 slice Orange, 1 Mint leaf',
    ingredient: 'Scotch, Brandy, Curacao, Orange, Mint',
    image:
      'https://www.thecocktaildb.com/images/media/drink/1q7coh1504736227.jpg',
    user_id: 1,
  },
  {
    drink_name: 'Sidecar Cocktail',
    drink_type: 'Brandy',
    instruction:
      'Shake all ingredients with ice, strain into a cocktail glass, and serve. Use 1 oz Brandy, 1/2 oz Triple sec, juice of 1/4 Lemon',
    ingredient: 'Brandy, Triple sec, Lemon',
    image:
      'https://www.thecocktaildb.com/images/media/drink/ewjxui1504820428.jpg',
    user_id: 1,
  },
  {
    drink_name: 'Sol Y Sombra',
    drink_type: 'Brandy',
    instruction:
      'hake ingredients with ice, strain into a brandy snifter, and serve. (The English translation of the name of this drink is "Sun and Shade", and after sampling this drink, you will understand why. Thanks, Kirby.) Use 1.5 oz Brandy, 1.5 oz Anisette.',
    ingredient: 'Brandy, Anisette.',
    image:
      'https://www.thecocktaildb.com/images/media/drink/3gz2vw1503425983.jpg',
    user_id: 1,
  },
  {
    drink_name: 'Stinger',
    drink_type: 'Brandy',
    instruction:
      'Pour in a mixing glass with ice, stir and strain into a cocktail glass. May also be served on rocks in a rocks glass. Use 1.5 oz Brandy, 1/2 oz Creme de Menthe',
    ingredient: 'Brandy, Creme de Menthe',
    image:
      'https://www.thecocktaildb.com/images/media/drink/2ahv791504352433.jpg',
    user_id: 1,
  },
  {
    drink_name: '69 Special',
    drink_type: 'Gin',
    instruction:
      'Pour 2 oz. gin. Add 4 oz. 7-up. Add Lemon Juice for flavor. If you are weak, top up glass with more 7-Up. Use 2oz dry Gin, 4 oz 7-Up, 0.75 oz lemon juice.',
    ingredient: 'Gin, 7-Up, Lemon juice',
    image:
      'https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg',
    user_id: 2,
  },
  {
    drink_name: 'A1',
    drink_type: 'Gin',
    instruction:
      'Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass. Use 1.75 shot Gin, 1 shot Grand Marnier, 1/4 shot Lemon juice, 1/8 shot Grenadine',
    ingredient: 'Gin, Grand Marnier, Lemon juice, Grenadine',
    image:
      'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Abbey Cocktail',
    drink_type: 'Gin',
    instruction:
      'Shake all ingredients (except for the cherry) with ice and strain into a cocktail glass. Top with the cherry and serve. Use 1.5 oz Gin, 1 dash orange bitters, juice of 1/4 orange, 1 cherry.',
    ingredient: 'Gin, Orange bitters, Orange, Cherry',
    image:
      'https://www.thecocktaildb.com/images/media/drink/mr30ob1582479875.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Abbey Martini',
    drink_type: 'Gin',
    instruction:
      'Put all ingredients into a shaker and mix, then strain contents into a chilled cocktail glass. Use 2 shots Gin, 1 shot Sweet Vermouth, 1 shot orange juice, 3 dashes Angostura Bitters',
    ingredient: 'Gin, Sweet Vermouth, Orange juice, Angostura Bitters.',
    image:
      'https://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Ace',
    drink_type: 'Gin',
    instruction:
      'Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass. Use 2 shots Gin, 1/2 shot Grenadine, 1/2 shot heavy cream, 1/2 shot milk, 1/2 fresh egg white.',
    ingredient: 'Gin, Grenadine, Heavy cream, Milk, Egg White',
    image:
      'https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Alexander',
    drink_type: 'Gin',
    instruction:
      'Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve. Use 1/2 oz Gin, 1/2 oz white Creme de Cacao, 2 oz light cream.',
    ingredient: 'Gin, Creme de Cacao, light cream',
    image:
      'https://www.thecocktaildb.com/images/media/drink/0clus51606772388.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Archbishop',
    drink_type: 'Gin',
    instruction:
      'In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well. Use 2 oz Gin, 1 oz Green Ginger Wine, 1 tsp Benedictine, 1 Lime',
    ingredient: 'Gin, Wine, Benedictine, Lime',
    image:
      'https://www.thecocktaildb.com/images/media/drink/4g6xds1582579703.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Aviation',
    drink_type: 'Gin',
    instruction:
      'Add all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass. Garnish with a cherry. Use 45 ml Gin, 15 ml lemon juice, 15 ml maraschino liqueur.',
    ingredient: 'Gin, lemon juice, maraschino liqueur',
    image:
      'https://www.thecocktaildb.com/images/media/drink/trbplb1606855233.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Bluebird',
    drink_type: 'Gin',
    instruction:
      'In a mixing glass half-filled with crushed ice, combine the gin, triple sec, Curacao, and bitters. Stir well. Strain into a cocktail glass and garnish with the lemon twist and the cherry. Use 1.5 oz Gin, 0.5 oz Triple sec, 0.5 oz Blue Curacao, 2 dashes of bitters, 1 Maraschino cherry, one twist of Lemon peel.',
    ingredient:
      'Gin, Triple sec, Blue Curacao, Bitters, Maraschino cherry, Lemon peel',
    image:
      'https://www.thecocktaildb.com/images/media/drink/5jhyd01582579843.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Bombay Cassis',
    drink_type: 'Gin',
    instruction:
      'Add the Bombay Sapphire, Crème de Cassis and lime juice to a balloon glass and swirl well to mix. Fill the glass with good quality cubed ice. Top up with chilled and freshly opened Fever-Tree Ginger Beer. Gently stir to combine, top with a gently squeezed lime wedge and finish with a fresh ginger slice. Use 50 ml Gin, 20 ml Creme de Cassis, 15 ml Fresh Lime Juice, 75 ml Ginger beer, 1 Lime, 1 long strip of ginger.',
    ingredient:
      'Gin, Creme de Cassis, Fresh Lime Juice, Ginger beer, Lime, Ginger',
    image:
      'https://www.thecocktaildb.com/images/media/drink/h1e0e51510136907.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Boomerang',
    drink_type: 'Gin',
    instruction:
      'In a mixing glass half-filled with ice cubes, combine the gin, vermouth, bitters, and maraschino liqueur. Stir well. Strain into a cocktail glass and garnish with the cherry. Use 2 oz Gin, 1/2 oz Dry Vermouth, 2 dashes Bitters, 1/2 tsp Marachino liqueur, 1 Maraschino cherry.',
    ingredient:
      'Gin, Dry Vermouth, Bitters, Marachino liqueur, Maraschino cherry',
    image:
      'https://www.thecocktaildb.com/images/media/drink/3m6yz81504389551.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Boxcar',
    drink_type: 'Gin',
    instruction:
      'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass. 1.5 oz Gin, 1 oz Triple sec, 1 tsp Lemon juice, 1/2 tsp Grenadine, 1 egg white.',
    ingredient: 'Gin, Triple sec, Lemon juice, Grenadine, Egg white',
    image:
      'https://www.thecocktaildb.com/images/media/drink/pwgtpa1504366376.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Bramble',
    drink_type: 'Gin',
    instruction:
      'Fill glass with crushed ice. Build gin, lemon juice and simple syrup over. Stir, and then pour blackberry liqueur over in a circular fashion to create marbling effect. Garnish with two blackberries and lemon slice. Use 40 ml Gin, 15 ml lemon juice, 10 ml Sugar syrup, 15 ml Creme de Mure.',
    ingredient: 'Gin, lemon juice, Sugar syrup, Creme de Mure',
    image:
      'https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Casino',
    drink_type: 'Gin',
    instruction:
      'Pour all ingredients into shaker with ice cubes. Shake well. Strain into chilled cocktail glass. Garnish with a lemon twist and a maraschino cherry. Serve without a straw. Use 2 oz Gin, 1/4 tsp Maraschino liqueur, 1/4 tsp Lemon juice, 2 dashes orange bitters, 1 cherry.',
    ingredient: 'Gin, Maraschino liqueur, Lemon juice, Orange bitters, Cherry',
    image:
      'https://www.thecocktaildb.com/images/media/drink/1mvjxg1504348579.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Casino Royale',
    drink_type: 'Gin',
    instruction:
      'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass. Use 2 oz Gin, 1/2 oz Lemon juice, 1 tsp Maraschino liqueur, 1 dash orange bitters, 1 egg yolk.',
    ingredient:
      'Gin, Lemon juice, Maraschino liqueur, Orange bitters, Egg yolk',
    image:
      'https://www.thecocktaildb.com/images/media/drink/3qpv121504366699.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Cherry Electric Lemonade',
    drink_type: 'Gin',
    instruction:
      'Stir vigorously and then pour over a large cup of ice. Drink with a straw and stir occasionally. Use 1 oz Gin, 1 oz Tequila, 1 oz Vodka, 1 oz White rum, 1 oz Triple Sec, 1 oz Cherry Grenadine, 1 oz Sweet and sour, 3 oz Club soda.',
    ingredient:
      'Gin, Tequila, Vodka, White rum, Triple Sec, Cherry Grenadine, Sweet and sour, Club soda',
    image:
      'https://www.thecocktaildb.com/images/media/drink/tquyyt1451299548.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Flying Dutchman',
    drink_type: 'Gin',
    instruction:
      'Pour brandy, gin, and sweet vermouth into a highball glass over ice cubes. Fill with carbonated water. Add the twist of lemon peel, stir, and serve. (Ginger ale may be substituted for carbonated water, if preferred.) Use 3/4 oz Brandy, 3/4 oz Gin, 3/4 oz Sweet Vermouth, Carbonated water, Lemon peel',
    ingredient: 'Brandy, Gin, Sweet Vermouth, Carbonated water, Lemon peel',
    image:
      'https://www.thecocktaildb.com/images/media/drink/mwko4q1582482903.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Gimlet',
    drink_type: 'Gin',
    instruction:
      'Add all the ingredients to a shaker and fill with ice. Shake, and strain into a chilled cocktail glass or an Old Fashioned glass filled with fresh ice. Garnish with a lime wheel. Use 2.5 oz Gin, 0.5 oz Lime Juice, 0.5 oz Sugar Syrup, 1 Lime wheel.',
    ingredient: 'Gin, Lime Juice, Sugar Syrup, Lime',
    image:
      'https://www.thecocktaildb.com/images/media/drink/3xgldt1513707271.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Gin Fizz',
    drink_type: 'Gin',
    instruction:
      'Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water. Use 2 oz Gin, juice of half a lemon, 1 tsp powdered sugar, Carbonated water.',
    ingredient: 'Gin, Lemon, Powdered sugar, Carbonated water',
    image:
      'https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Gin Lemon',
    drink_type: 'Gin',
    instruction:
      'For the preparation of the gin lemon you will not need the shaker. Fill the tumbler with ice, pour the gin and lemonade over it. Gently mix and decorate with a slice of lemon. Those who prefer can also add a few mint leaves. Your gin lemon is ready to be served. Use  60 ml Gin, 80 ml Lemon Juice, 1 slice Lemon Peel, ice cubes.',
    ingredient: 'Gin, Lemon Juice, Lemon Peel, Ice',
    image:
      'https://www.thecocktaildb.com/images/media/drink/yhzvk91643821739.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Gin Sling',
    drink_type: 'Gin',
    instruction:
      'Dissolve powdered sugar in mixture of water and juice of lemon. Add gin. Pour into an old-fashioned glass over ice cubes and stir. Add the twist of orange peel and serve. Use 2 oz Gin, juice of 1/2 Lemon, 1 tsp powdered sugar, 1 tsp water, twist of orange peel.',
    ingredient: 'Gin, Lemon, Powdered sugar, Water, orange peel',
    image:
      'https://www.thecocktaildb.com/images/media/drink/8cl9sm1582581761.jpg',
    user_id: 2,
  },
  {
    drink_name: 'Afterglow',
    drink_type: 'Non-Alcoholic',
    instruction:
      'Use 1 part grenadine, 4 parts orange juice, 4 parts pineapple juice. Mix. Serve over ice. ',
    ingredient: 'Grenadine, Orange juice, Pineapple juice',
    image:
      'https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg',
    user_id: 3,
  },
  {
    drink_name: 'Aloha Fruit punch',
    drink_type: 'Non-Alcoholic',
    instruction:
      'Good for a group! Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly. Use: 3/4 cup Water, 2 tsp Ginger, 2 cups Guava juice, 1.5 Tbsp Lemon juice, 1.5 cup Pineapple, 1 cup Sugar, 3-4 cups Pineapple juice',
    ingredient:
      'Water, Ginger, Guava juice, Lemon juice, Pineapple, Sugar, Pineapple juice',
    image:
      'https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg',
    user_id: 3,
  },
  {
    drink_name: 'Apple Berry Smoothie',
    drink_type: 'Non-Alcoholic',
    instruction:
      'Throw everything into a blender and liquify. Use 1 cup berries, 2 apples, cored.',
    ingredient: 'Berries, Apple',
    image:
      'https://www.thecocktaildb.com/images/media/drink/xwqvur1468876473.jpg',
    user_id: 3,
  },
  {
    drink_name: 'Banana Milk Shake',
    drink_type: 'Non-Alcoholic',
    instruction:
      'Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana. Use: 100 ml Milk, 40 ml Orange juice, 2 tsp Sugar syrup, 1/2 Banana.',
    ingredient: 'Milk, Orange juice, Sugar syrup, Banana',
    image:
      'https://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg',
    user_id: 3,
  },
  {
    drink_name: 'Bora Bora',
    drink_type: 'Non-Alcoholic',
    instruction:
      'Prepare in a blender or shaker, serve in a highball glass on the rocks. Garnish with 1 slice of pineapple and one cherry. Use: 100 ml Pineapple juice, 60 ml Passion fruit juice, 10 ml Lemon juice, 10 ml Grenadine.',
    ingredient: 'Pineapple juice, Passion fruit juice, Lemon juice, Grenadine',
    image:
      'https://www.thecocktaildb.com/images/media/drink/xwuqvw1473201811.jpg',
    user_id: 3,
  },
  {
    drink_name: 'Just a Moonmint',
    drink_type: 'Non-Alcoholic',
    instruction:
      'Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up. Use 2 cups Milk, Chocolate syrup and Mint syrup to taste.',
    ingredient: ' Milk, Chocolate syrup, Mint syrup',
    image:
      'https://www.thecocktaildb.com/images/media/drink/znald61487604035.jpg',
    user_id: 3,
  },
  {
    drink_name: 'Lassi - Plain',
    drink_type: 'Non-Alcoholic',
    instruction:
      'Blend in a blender for 3 seconds. Lassi is one of the easiest things to make, and there are many ways of making it. Basically, it is buttermilk (yogurt whisked with water), and you can choose almost any consistency that you like, from the thinnest to the thickest. Serve cold. Use 1/5 cup Yogurt, 1.25 cup cold Water, 1/2 tsp ground roasted Cumin seed, 1/4 tsp Salt, 1/4 tsp dried Mint.',
    ingredient: 'Yogurt, Water, Cumin seed, Salt, Mint',
    image:
      'https://www.thecocktaildb.com/images/media/drink/iq6scx1487603980.jpg',
    user_id: 3,
  },
  {
    drink_name: 'Lassi - Mango',
    drink_type: 'Non-Alcoholic',
    instruction:
      'Put it all in a blender and pour over crushed ice. You can also use other fruits like strawberries and bananas. Use 2 Mangoes, 2 cups Yogurt, 1/2 cup Sugar, 1 cup ice Water.',
    ingredient: 'Mango, Yogurt, Sugar, Water',
    image:
      'https://www.thecocktaildb.com/images/media/drink/1bw6sd1487603816.jpg',
    user_id: 3,
  },
  {
    drink_name: 'Lassi Raita',
    drink_type: 'Non-Alcoholic',
    instruction:
      'Blend the yogurt and ice cubes together, until the yogurt becomes more liquid. Add sugar to taste. The lemon/lime is optional but it gives it a slightly tart taste. Dash of salt. Raita is also good for the summer. Instead of having a traditional salad you can make raita instead. Use 2 cups Yogurt, 4-6 cups Ice. Add Sugar, Lime and Salt to taste.',
    ingredient: 'Yogurt, Ice, Sugar, Lime, Salt',
    image:
      'https://www.thecocktaildb.com/images/media/drink/s4x0qj1487603933.jpg',
    user_id: 3,
  },
  {
    drink_name: 'Limeade',
    drink_type: 'Non-Alcoholic',
    instruction:
      'In a large glass, put the lime juice and sugar, and stir well. Add cold seltzer water to fill. Put the lime peels in the glass. Drink. Repeat until limes or soda run out. Use Juice of 1 Lime, 1 Tbsp Sugar, Soda water, Lime peel',
    ingredient: 'Lime, Sugar, Soda water, Lime peel',
    image:
      'https://www.thecocktaildb.com/images/media/drink/5jdp5r1487603680.jpg',
    user_id: 3,
  },
  {
    drink_name: 'Strawberry Shivers',
    drink_type: 'Non-Alcoholic',
    instruction:
      'Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up. Use 1.5 cup Strawberries, 4 tsp Honey, 1/2 cup Water.',
    ingredient: 'Strawberries, Honey, Water',
    image:
      'https://www.thecocktaildb.com/images/media/drink/9h1vvt1487603404.jpg',
    user_id: 3,
  },
  {
    drink_name: 'Tomato Tang',
    drink_type: 'Non-Alcoholic',
    instruction:
      'Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up. Use 2 cups Tomato juice, 1-2 Tbsp Lemon juice, 1 dash Celery salt.',
    ingredient: 'Tomato juice, Lemon juice, Celery salt',
    image:
      'https://www.thecocktaildb.com/images/media/drink/869qr81487603278.jpg',
    user_id: 3,
  },
  {
    drink_name: 'Ipamena',
    drink_type: 'Non-Alcoholic',
    instruction:
      'Cut half a lime into pieces, place in a shaker, add the sugar and crush. Measure the passion fruit juice, add it to the shaker and fill up with ice cubes. Close the shaker and shake vigorously. Pour the liquid into a glass, top up with ginger ale, stir with a teaspoon and then garnish the rim of the glass with a slice of lime. Use half a Lime, 2 tsp brown sugar, 40 ml Passion fruit juice, fill with Ice, and top up with Ginger ale.',
    ingredient: 'Lime, brown sugar, Passion fruit juice, Ginger ale, Ice',
    image:
      'https://www.thecocktaildb.com/images/media/drink/yswuwp1469090992.jpg',
    user_id: 3,
  },
  {
    drink_name: 'Kill the cold Smoothie',
    drink_type: 'Non-Alcoholic',
    instruction:
      'Juice 1 inch of peeled fresj ginger and use juice of 1/4 of lemon and add it to 1 cup hot water. You may add cardomom to taste.',
    ingredient: 'Fresh ginger root, Lemon, Water',
    image:
      'https://www.thecocktaildb.com/images/media/drink/7j1z2e1487603414.jpg',
    user_id: 3,
  },
  {
    drink_name: 'Rail Splitter',
    drink_type: 'Non-Alcoholic',
    instruction:
      'Mix sugar syrup with lemon juice in a tall glass. Fill up with ginger ale.',
    ingredient: 'Sugar syrup, Lemon juice, Gigner ale',
    image:
      'https://www.thecocktaildb.com/images/media/drink/stsuqq1441207660.jpg',
    user_id: 3,
  },
  {
    drink_name: 'Adam Bomb',
    drink_type: 'Rum',
    instruction:
      'Add ice to blender then fruit, and 1 - 3 oz fruit juice then add the 1 oz Rum, 1 oz Vodka, 1 oz Tequila, and 1/2 oz triple sec. blend till smooth, rim glass with sugar or salt and pour mixture in. garnish with lemon or lime slice.',
    ingredient: 'Rum, Vodka, Tequila, triple sec, Fruit, Fruit juice',
    image:
      'https://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg',
    user_id: 4,
  },
  {
    drink_name: 'Adios Amigos Cocktail',
    drink_type: 'Rum',
    instruction:
      'Shake together 1 shot Rum, 1/2 shot Dry Vermouth, 1/2 shot Cognac, 1/2 shot Gin, 1/4 shot Lime juice, 1/4 shot Sugar syrup, 1/2 Water and strain into a cold glass.',
    ingredient:
      '1 shot Rum, 1/2 shot Dry Vermouth, 1/2 shot Cognac, 1/2 shot Gin, 1/4 shot Lime juice, 1/4 shot Sugar syrup, 1/2 Water',
    image:
      'https://www.thecocktaildb.com/images/media/drink/8nk2mp1504819893.jpg',
    user_id: 4,
  },
  {
    drink_name: 'Aztec Punch',
    drink_type: 'Rum',
    instruction:
      'Mix 1 can Lemonade, 5 oz Vodka, 7 oz Rum, 2 liter bottle Ginger ale in a pitcher, and serve!',
    ingredient: 'Lemonade, Vodka, Rum, Ginger ale',
    image:
      'https://www.thecocktaildb.com/images/media/drink/uqwuyp1454514591.jpg',
    user_id: 4,
  },
  {
    drink_name: 'Bahama Mama',
    drink_type: 'Rum',
    instruction:
      'Add 2 parts club soda. Mix it all together and pour over a bunch of ice. Drink with a straw.',
    ingredient:
      'Rum, Dark rum, Banana liqueur, Grenadine, Pineapple juice, Orange juice, Sweet and Sour',
    image:
      'https://www.thecocktaildb.com/images/media/drink/tyb4a41515793339.jpg',
    user_id: 4,
  },
  {
    drink_name: 'Barracuda',
    drink_type: 'Rum',
    instruction:
      'Shake pour ingredients with ice. Strain into glass, top with Sparkling wine.',
    ingredient: 'Rum, Galliano, Pineapple juice, Lime juice, Prosecco',
    image:
      'https://www.thecocktaildb.com/images/media/drink/jwmr1x1504372337.jpg',
    user_id: 4,
  },
  {
    drink_name: 'Blue Hurricane',
    drink_type: 'Rum',
    instruction:
      'If each part is 1/2 oz then use about 2.5 cups of ice. Blend it all together.',
    ingredient: 'Rum, Dark rum, Passoa, Blue Curacao, Sweet and sour',
    image:
      'https://www.thecocktaildb.com/images/media/drink/nwx02s1515795822.jpg',
    user_id: 4,
  },
  {
    drink_name: 'Bounty Hunter',
    drink_type: 'Rum',
    instruction:
      'Add the 1 shot Rum, 1 Shot Liqueur into a shaker as well as the pineapple juice, strain into a Margarita glass. Top with Prosecco and garnish with Blueberries.',
    ingredient: 'Rum, Coconut liqueur, Blueberries, Pineapple juice, Prosecco',
    image:
      'https://www.thecocktaildb.com/images/media/drink/t8bgxl1596018175.jpg',
    user_id: 4,
  },
  {
    drink_name: 'Captain Kidds Punch',
    drink_type: 'Rum',
    instruction:
      'Mix 2 shot Rum, 1 shot Lime juice, 1 shot Egg White, a dash bitters, and sugar together in a shaker and strain into a collins glass. Use Caribbean dark Rum for a sweeter taste.',
    ingredient: 'Rum, Lime juice, Egg White, bitters, Sugar, Nutmeg ',
    image:
      'https://www.thecocktaildb.com/images/media/drink/d83spj1596017390.jpg',
    user_id: 4,
  },
  {
    drink_name: 'Rum Punch',
    drink_type: 'Rum',
    instruction: 'Mix all ingredients in a punch bowl and serve.',
    ingredient: 'Rum, Ginger ale, Fruit punch, Orange juice, ice',
    image:
      'https://www.thecocktaildb.com/images/media/drink/wyrsxu1441554538.jpg',
    user_id: 4,
  },
  {
    drink_name: 'Rum Toddy',
    drink_type: 'Rum',
    instruction:
      '"Dissolve powdered sugar in water in an old-fashioned glass. Add rum and one ice cube and stir. Add the twist of lemon peel and serve.',
    ingredient: 'Rum, Powdered sugar, Lemon peel, Water',
    image:
      'https://www.thecocktaildb.com/images/media/drink/athdk71504886286.jpg',
    user_id: 4,
  },
  {
    drink_name: 'Highland Fling Cocktail',
    drink_type: 'Scotch',
    instruction:
      'Stir 1.5 oz Scotch, 3/4 oz Sweet Vermouth, 2 dashes Orange bitters (except olive) with ice and strain into a cocktail glass. Add the olive and serve.',
    ingredient: 'Scotch, Sweet Vermouth, Orange bitters, Olive',
    image:
      'https://www.thecocktaildb.com/images/media/drink/0bkwca1492975553.jpg',
    user_id: 5,
  },
  {
    drink_name: 'Irish Cream',
    drink_type: 'Scotch',
    instruction:
      'Mix 1 cup scotch with 1 can sweetened condensed milk 3 drops of coconut syrup, 1 tblsp Chocolate syrup . Add 1.25 cup half-and-half. Add rest.',
    ingredient:
      'Scotch, Half-and-half, Condensed milk, Coconut syrup, Chocolate Syrup',
    image:
      'https://www.thecocktaildb.com/images/media/drink/90etyl1504884699.jpg',
    user_id: 5,
  },
  {
    drink_name: 'Loch Lomond',
    drink_type: 'Scotch',
    instruction:
      'In a mixing glass half-filled with ice cubes, combine 2 oz Scotch, 1/2 oz Drambuie, and 1/2 Vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.',
    ingredient: 'Scotch, Drambulie, Dry Vermouth, Lemon peel',
    image:
      'https://www.thecocktaildb.com/images/media/drink/rpvtpr1468923881.jpg',
    user_id: 5,
  },
  {
    drink_name: 'Rusty Nail',
    drink_type: 'Scotch',
    instruction:
      'Pour 1.5 oz Scotch and 1/2 oz Drambuie into an old-fashioned glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.',
    ingredient: 'Scotch, Drambuie, Lemon peel',
    image:
      'https://www.thecocktaildb.com/images/media/drink/yqsvtw1478252982.jpg',
    user_id: 5,
  },
  {
    drink_name: 'Scotch Cobbler',
    drink_type: 'Scotch',
    instruction:
      'Pour 2 oz scotch, 4 dashes brandy, and 4 dashes curacao over ice in an old-fashioned glass. Add the orange slice, top with the mint sprig, and serve.',
    ingredient: 'Scotch, Brandy, Curacao, Mint',
    image:
      'https://www.thecocktaildb.com/images/media/drink/1q7coh1504736227.jpg',
    user_id: 5,
  },
  {
    drink_name: 'Scotch Sour',
    drink_type: 'Scotch',
    instruction:
      'Shake 1.5 oz scotch, juice of 1/2 lime, and 1/2 powdered sugar with ice and strain into a whiskey sour glass. Decorate with 1/2 slice lemon, top with the cherry, and serve.',
    ingredient: 'Scotch, Lime, Powdered sugar, Lemon, Cherry',
    image:
      'https://www.thecocktaildb.com/images/media/drink/0dnb6k1504890436.jpg',
    user_id: 5,
  },
  {
    drink_name: 'Thriller',
    drink_type: 'Scotch',
    instruction:
      'In a shaker half-filled with ice cubes, combine 1.5 oz Scotch, 1 oz Wine, 1 oz Orange juice. Shake well. Strain into a cocktail glass.',
    ingredient: 'Scotch, Wine, Orange juice',
    image:
      'https://www.thecocktaildb.com/images/media/drink/rvuswq1461867714.jpg',
    user_id: 5,
  },
  {
    drink_name: 'Whisky Mac',
    drink_type: 'Scotch',
    instruction:
      'Pour both 1.5 oz scotch and 1 oz wine into a wine goblet with no ice.',
    ingredient: 'Scotch, Wine',
    image:
      'https://www.thecocktaildb.com/images/media/drink/yvvwys1461867858.jpg',
    user_id: 5,
  },
  {
    drink_name: 'Bloody Maria',
    drink_type: 'Tequila',
    instruction:
      'Shake all ingredients (except lemon slice) with cracked ice and strain into an old-fashioned glass over ice cubes. Add the slice of lemon and serve. Use 1 oz Tequila, 2 oz Tomato juice, 1 dash Lemon juice, 1 dash Tabasco sauce, 1 dash Celery salt, 1 slice of Lemon.',
    ingredient:
      'Tequila, Tomato juice, Lemon juice, Tabasco sauce, Celery salt, Lemon',
    image:
      'https://www.thecocktaildb.com/images/media/drink/yz0j6z1504389461.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Blue Margarita',
    drink_type: 'Tequila',
    instruction:
      'Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve. Use 1.5 oz Tequila, 1 oz Blue Cruacao, 1 oz Lime juice, coarse salt.',
    ingredient: 'Tequila, Blue Cruacao, Lime juice, coarse salt',
    image:
      'https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Brave Bull Shooter',
    drink_type: 'Tequila',
    instruction:
      'Pour Tabasco into bottom of shot glass and fill with tequila. Use 1/2 oz Tequila, 1/2 oz Tabasco sauce.',
    ingredient: 'Tequila, Tabasco sauce',
    image:
      'https://www.thecocktaildb.com/images/media/drink/yrtypx1473344625.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Cherry Electric Lemonade',
    drink_type: 'Tequila',
    instruction:
      'Now stir vigorously and then pour over a large cup of ice. Now drink it with a straw and stir occasionally. Use 1 oz Gin,  1 oz Tequila, 1 oz Vodka, 1 oz White rum, 1 oz Triple Sec, 1 oz Cherry Grenadine, 1 oz Sweet and sour, 3 oz Club soda.',
    ingredient:
      'Gin, Tequila, Vodka, White rum, Triple Sec, Cherry Grenadine, Sweet and sour, Club soda',
    image:
      'https://www.thecocktaildb.com/images/media/drink/tquyyt1451299548.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Downshift',
    drink_type: 'Tequila',
    instruction:
      'Start with the Sprite. Next comes the tequila. After that, add the Minute Maid Fruit Punch, then float the 151. Rocks optional. Use 2 parts Fruit punch, 1 part Sprite, 2 shots Tequila, Rum.',
    ingredient: 'Fruit punch, Sprite, Tequila, Rum',
    image:
      'https://www.thecocktaildb.com/images/media/drink/y36z8c1503563911.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Long Island Iced Tea',
    drink_type: 'Tequila',
    instruction:
      'Mix all contents in a highball glass and sitr gently. Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist. 1/2 oz Vodka, 1/2 oz Tequila, 1/2 oz Light rum, 1/2 oz Gin, 1/2 oz Coca-Cola, twist of Lemon peel.',
    ingredient: 'Vodka, Tequila, Light rum, Gin, Coca-Cola, Lemon peel',
    image:
      'https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Margarita',
    drink_type: 'Tequila',
    instruction:
      'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass. Use 1.5 oz Tequila, 0.5 oz of Triple sec and 1 oz of lime juice',
    ingredient: 'Tequila, Triple sec, Lime juice, Salt',
    image:
      'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Moranguito',
    drink_type: 'Tequila',
    instruction:
      'Add 2/5 absinthe, then 2/5 tequila, and then 1/5 Granadine syrup.',
    ingredient: 'Absinthe, Tequila, Granadine syrup',
    image:
      'https://www.thecocktaildb.com/images/media/drink/urpsyq1475667335.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Paloma',
    drink_type: 'Tequila',
    instruction:
      'Add 3 oz Grape soda to 1.5 oz Tequila. Stir together and serve over ice.',
    ingredient: 'Grape soda, Tequila',
    image:
      'https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Pineapple Paloma',
    drink_type: 'Tequila',
    instruction:
      'Rub the rim of each glass with lime slice and dip into salt. Add ice, tequila, grapefruit juice, lime juice and top with pineapple soda. Give it a quick stir. Garnish with fresh pineapple or lime. Use 4 oz Tequila, 4 oz Grapefruit Juice, 1 oz Fresh Lime Juice, 8 oz Pineapple Juice,  garnish with Lime.',
    ingredient:
      'Tequila, Grapefruit Juice, Fresh Lime Juice, Pineapple Juice, Lime',
    image:
      'https://www.thecocktaildb.com/images/media/drink/pg8iw31593351601.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Radioactive Long Island Iced Tea',
    drink_type: 'Tequila',
    instruction:
      'Pour all ingredients over ice in a very tall glass. Sip cautiously. Use 1 oz Rum, 1 oz Vodka, 1 oz Tequila, 1 oz  Gin, 1 oz Triple sec, 1 oz Chambord raspberry liqueur, 1 oz Midori melon liqueur, 1 oz Malibu rum.',
    ingredient:
      'Rum, Vodka, Tequila,  Gin, Triple sec, Chambord Raspberry Liqueur, Midori Melon Liqueur, Malibu Rum',
    image:
      'https://www.thecocktaildb.com/images/media/drink/rdvqmh1503563512.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Strawberry Margarita',
    drink_type: 'Tequila',
    instruction:
      'Rub rim of cocktail glass with lemon juice and dip rim in salt. Shake schnapps, tequila, triple sec, lemon juice, and strawberries with ice, strain into the salt-rimmed glass, and serve. Use 1/2 oz Straberry Schnapps, 1 oz Tequila, 1/2 oz Triple sec, 1 oz Lemon juice, 1 oz Strawberries, salt.',
    ingredient:
      'Straberry Schnapps, Tequila, Triple sec, Lemon juice, Strawberries, salt',
    image:
      'https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Tequila Fizz',
    drink_type: 'Tequila',
    instruction:
      'Shake all ingredients (except ginger ale) with ice and strain into a collins glass over ice cubes. Fill with ginger ale, stir, and serve. Use 2 oz Tequila, 1 Tbsp Lemon juice, 3/4 oz Grenadine, 1 egg white, Ginger ale.',
    ingredient: 'Tequila, Lemon juice, Grenadine, Egg white, Ginger ale',
    image:
      'https://www.thecocktaildb.com/images/media/drink/2bcase1504889637.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Tequila Slammer',
    drink_type: 'Tequila',
    instruction:
      'Mix carefully to avoid releasing the dissolved CO2. Use 1 shot Tequila, 1 part 7-Up.',
    ingredient: 'Tequila, 7-Up',
    image:
      'https://www.thecocktaildb.com/images/media/drink/43uhr51551451311.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Tequila Sour',
    drink_type: 'Tequila',
    instruction:
      'Shake tequila, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Add the half-slice of lemon, top with the cherry, and serve. Use 2 oz Tequila, juice of half a Lemon, 1 tsp Powdered sugar, 1/2 slice lemon, 1 cherry.',
    ingredient: 'Tequila, Lemon, Powdered sugar, Cherry',
    image:
      'https://www.thecocktaildb.com/images/media/drink/ek0mlq1504820601.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Tequila Sunrise',
    drink_type: 'Tequila',
    instruction:
      'Pour the tequila and orange juice into glass over ice. Add the grenadine, which will sink to the bottom. Stir gently to create the sunrise effect. Garnish and serve. Use 2 measures Tequila, Orange juice, Grenadine.',
    ingredient: 'Tequila, Orange juice, Grenadine',
    image:
      'https://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Whitecap Margarita',
    drink_type: 'Tequila',
    instruction:
      'Place all ingredients in a blender and blend until smooth. This makes one drink. Use 1 cup Ice, 2 oz Tequila, 1/4 cup Cream of Coconut, 3 Tbsp lime juice.',
    ingredient: 'Ice, Tequila, Cream of Coconut, Lime juice',
    image:
      'https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Winter Paloma',
    drink_type: 'Tequila',
    instruction:
      'The Paloma gets a delicious Indian makeover. Tequila reposado infused with “Timur Pepper” which has citrusy & grapefruit notes and is grown at the foothills of Himalaya. It also produces a slightly numbing and tingling sensation on your lip when consumed. We have also spiced up the fresh grapefruit juice with the warming spice blend from Himalaya. The combination of all these interesting elements has allowed us to elevate your Paloma sipping experience. Use 2 shots Tequila top with Grapefruit juice, juice of 1 lime, 1 tsp Agave syrup, dash of pepper.',
    ingredient: 'Tequila, Grapefruit juice, Lime, Agave syrup, Timur Pepper',
    image:
      'https://www.thecocktaildb.com/images/media/drink/u5f0pz1614007748.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Winter Rita',
    drink_type: 'Tequila',
    instruction:
      'Salt rim. Combine all ingredients, shake with ice, and strain over fresh ice. Use 1.75 oz Tequila, 0.25 oz Campari, 0.75 oz Lime juice, 0.5 oz Rosemary Syrup, dash of salt. ',
    ingredient: 'Tequila, Campari, Lime juice, Rosemary Syrup, Salt',
    image:
      'https://www.thecocktaildb.com/images/media/drink/fwpd0v1614006733.jpg',
    user_id: 6,
  },
  {
    drink_name: 'Adam Sunrise',
    drink_type: 'Vodka',
    instruction:
      'Fill blender up with ice. Fill half with Bartons Vodka. Put 10 tsp of sugar, add 1/2 can lemonade concentrate, fill to top with water. Blend for 60 seconds. Use 1/2 shot Vodka, 1/2 can Lemonade, 1/2 Water, 10 tsp Sugar',
    ingredient: 'Vodka, Lemonade, Water, Sugar',
    image:
      'https://www.thecocktaildb.com/images/media/drink/vtuyvu1472812112.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Addison Special',
    drink_type: 'Vodka',
    instruction:
      'Combine ingredients in the order listed into a shaker. Fill half full with ice and shake well. Strain into glass with ice and garnish with a cherry and orange wedge. Use 1 shot Vodka, 1 Tbsp Grenadine, fill with Orange juice.',
    ingredient: 'Vodka, Grenadine, Orange juice',
    image:
      'https://www.thecocktaildb.com/images/media/drink/4vo5651493068493.jpg',
    user_id: 7,
  },
  {
    drink_name: 'After sex',
    drink_type: 'Vodka',
    instruction:
      'Pour the vodka and creme over some ice cubes in a tall glass and fill up with juice. To make it beautiful make the top of the glass with a grenadine and sugar. Use 20 ml vodka, 10 ml Creme de Banana, fill with juice.',
    ingredient: 'Vodka, Creme de Banana, Orange juice',
    image:
      'https://www.thecocktaildb.com/images/media/drink/xrl66i1493068702.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Apricot punch',
    drink_type: 'Vodka',
    instruction:
      'Pour all ingrediants into a large punch bowl. Add ice and 4 oranges that are peeled and divided. Use 1 quart Apricot Brandy, 4/5 Champagne, 1/5 Vodka, 4 Liters 7-Up, and 1/2 gallon Orange juice.',
    ingredient: 'Apricot Brandy, Champagne, Vodka, 7-Up, and Orange juice.',
    image:
      'https://www.thecocktaildb.com/images/media/drink/tuxxtp1472668667.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Arctic Fish',
    drink_type: 'Vodka',
    instruction:
      'Fill glass with ice and fish, add vodka, grape soda and orange juice. DO NOT STIR!!!!! Serve well chilled. Use 1/3 part Vodka, 1/3 part Grape soda, 1/3 part Orange juice, lots of Ice, 1 piece candy.',
    ingredient: 'Vodka, Grape soda, Orange juice, Ice, Candy',
    image:
      'https://www.thecocktaildb.com/images/media/drink/ttsvwy1472668781.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Arizona Antifreeze',
    drink_type: 'Vodka',
    instruction:
      'Pour all ingredients into shot glass and slam !!!! Use 1/3 oz Vodka, 1/3 oz Midori melon liqueur, 1/3 oz Sweet and Sour.',
    ingredient: 'Vodka, Midori melon liqueur, Sweet and Sour',
    image:
      'https://www.thecocktaildb.com/images/media/drink/dbtylp1493067262.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Arizona Twister',
    drink_type: 'Vodka',
    instruction:
      'Mix in the shots of rum, vodka, and tequila. Add splashes of the three juices, heavy on the pineapple. Top off with grenadine. Crushed ice should already be in glass. Top off the glass with a pineapple wedge. Use 1 shot Vodka, 1 shot Malibu rum, 1 shot Gold tequila, 1 splash Orange juice, 1 splash Pineapple juice, 1 splash Cream of coconut, 1 dash Grenadine, crushed Ice, 1 wedege Pineapple.',
    ingredient:
      'Vodka, Malibu rum, Gold tequila, Orange juice, Pineapple juice, Cream of coconut, Grenadine, Ice, Pineapple',
    image:
      'https://www.thecocktaildb.com/images/media/drink/ido1j01493068134.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Army special',
    drink_type: 'Vodka',
    instruction:
      'Pour Vodka, Gin and lime cordial into glass, and top up with crushed ice. Wait for ice to melt slightly and sip without a straw. Use 30 ml Vodka, 30 ml Gin, 45 ml Lime juice cordial, 1/2 glass crushed ice.',
    ingredient: 'Vodka, Gin, Lime juice cordial, Ice',
    image:
      'https://www.thecocktaildb.com/images/media/drink/55muhh1493068062.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Atlantic Sun',
    drink_type: 'Vodka',
    instruction:
      'Shake all the ingredients, top the drink with soda. Garnish with a slice of orange. Use 20 ml Vodka, 20 ml Southern Comfort, 20 ml Passion fruit syrup, 60 ml Sweet and sour, a dash of Club soda.',
    ingredient:
      'Vodka, Southern Comfort, Passion fruit syrup, Sweet and sour, Club soda',
    image:
      'https://www.thecocktaildb.com/images/media/drink/doyxqb1493067556.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Atomic Lokade',
    drink_type: 'Vodka',
    instruction:
      'In a shaker, place lemonade, vodka, blue Curacao, and triple sec together. Shake with ice and strain into glass. Add sugar to taste. Use 5 oz Lemonade, 1 oz Vodka, 1/2 oz Blue Curacao, 1/2 oz Triple sec, sugar to taste, fill with ice.',
    ingredient: 'Lemonade, Vodka, Blue Curacao, Triple sec, Sugar, Ice',
    image:
      'https://www.thecocktaildb.com/images/media/drink/n3zfrh1493067412.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Autodafé',
    drink_type: 'Vodka',
    instruction:
      'Mix and fill up with soda water. Drunk by finns on a sunny day any time of the year and day. Use 40ml Vodka, 1 dash Lime juice, fill with Soda water.',
    ingredient: 'Vodka, Lime juice, Soda water',
    image:
      'https://www.thecocktaildb.com/images/media/drink/7dkf0i1487602928.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Avalon',
    drink_type: 'Vodka',
    instruction:
      'Fill a tall glass with ice. Layer the Finlandia Vodka, lemon and apple juices, Pisang Ambon, and top up with lemonade. Stir slightly and garnish with a spiralled cucumber skin and a red cherry. The cucumber provides zest and looks attractive. This drink, created by Timo Haimi, took first prize in the 1991 Finlandia Vodka Long Drink Competition. Use 3 parts Vodka, 1 part Pisang Ambon, 6 parts Apple juice, 1.5 part lemon juice and top with lemonade.',
    ingredient: 'Vodka, Pisang Ambon, Apple juice, Lemon juice, Lemonade',
    image:
      'https://www.thecocktaildb.com/images/media/drink/3k9qic1493068931.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Black Russian',
    drink_type: 'Vodka',
    instruction:
      'Pour the ingredients into an old fashioned glass filled with ice cubes. Stir gently. Use 3/4 oz Coffee Liqueur, 1.5 oz Vodka.',
    ingredient: 'Coffee Liqueur, Vodka',
    image:
      'https://www.thecocktaildb.com/images/media/drink/8oxlqf1606772765.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Bloody Mary',
    drink_type: 'Vodka',
    instruction:
      'Stirring gently, pour all ingredients into highball glass. Garnish. Use 1.5 oz Vodka, 3 oz Tomato juice, 1 dash Lemon juice, 1/2 tsp Worcestershire sauce, 2-3 drops Tabasco sauce, 1 Lime wedge. Add other ingredients as desired; cheese, smoked meat, pickles, celery, celery salt are all popular choices.',
    ingredient:
      'Vodka, Tomato juice, Lemon juice, Worcestershire sauce, Tabasco sauce, Lime',
    image:
      'https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Bloody Punch',
    drink_type: 'Vodka',
    instruction:
      'Step 1 - Place the thawed strawberries in a large bowl. Mash them with a fork to ensure no large chunks. Step 2 - In a punch bowl or pitcher, combine mashed strawberries, lime pulp and soda. Mix well. Step 3 - Add blueberries and raisins. They will float and look like bugs in the punch. Use 10 shots Vodka, 3 cups Strawberries, 1/2 cup Lime juice, 12 oz Lemon-lime soda, 1 cup raisins, 1 cups blueberries.',
    ingredient:
      'Vodka, Strawberries, Lime juice, Lemon-lime soda, raisins, blueberries',
    image:
      'https://www.thecocktaildb.com/images/media/drink/5yhd3n1571687385.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Blue Lagoon',
    drink_type: 'Vodka',
    instruction:
      'Pour vodka and curacao over ice in a highball glass. Fill with lemonade, top with the cherry, and serve. Use 1 oz Vodka, 1 oz Blue Curacao, Lemonade, Cherry.',
    ingredient: 'Vodka, Blue Curacao, Lemonadade, Cherry',
    image:
      'https://www.thecocktaildb.com/images/media/drink/5wm4zo1582579154.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Brain Fart',
    drink_type: 'Vodka',
    instruction:
      'Mix all ingredients together. Slowly and gently. Works best if ice is added to punch bowl and sodas are very cold. Use 1/5 Everclear, 1/5 Vodka, 2 liters Mountain Dew, 2 liters Surge, 1 small bottle Lemon juice, 1 pint Rum.',
    ingredient: 'Everclear, Vodka, Mountain Dew, Surge, Lemon juice, Rum',
    image:
      'https://www.thecocktaildb.com/images/media/drink/rz5aun1504389701.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Bruised Heart',
    drink_type: 'Vodka',
    instruction:
      'Pour all ingredients in a mixing tin over ice, stir, and strain into shot glass. Use 1/2 oz Vodka, 1/2 oz Shambord raspberry liqueur, 1/2 oz Peachtree Schnapps, 1/2 oz Cranberry juice.',
    ingredient:
      'Vodka, Shambord raspberry liqueur, Peachtree Schnapps, Cranberry juice',
    image:
      'https://www.thecocktaildb.com/images/media/drink/7if5kq1503564209.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Bubble Gum',
    drink_type: 'Vodka',
    instruction:
      'Layer in order into a shot glass. Use 1 part Vodka, 1 part Banana Liqueur, 1 part Orange juice, 1 part Peach Schnapps. ',
    ingredient: 'Vodka, Banana Liqueur, Orange juice, Peach Schnapps',
    image:
      'https://www.thecocktaildb.com/images/media/drink/spuurv1468878783.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Caribbean Orange Liqueur',
    drink_type: 'Vodka',
    instruction:
      'Pare very thinly the bright-colored rind from the oranges (no white). Blot the peel on paper towels to remove any excess oil. Put peel in a 4 cup screw-top jar. Add 2 cups vodka. Close jar. Store in a cool, dark place for 2 days or until the vodka has absorbed the flavor. Remove peel and add remaining vodka. Close jar and add remaining cup of vodka. Close the jar and store in a cool dark place at least 1 month to age.',
    ingredient: 'Orange, Vodka, Sugar',
    image:
      'https://www.thecocktaildb.com/images/media/drink/qwxuwy1472667570.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Cosmopolitan Martini',
    drink_type: 'Vodka',
    instruction:
      'Pour all ingredients in mixing glass half filled with ice, shake and strain into chilled Martini glass. Use 1/2 oz Cointreau, 1 oz Vodka, juice of half a Lime, 1 splash Cranberry juice.',
    ingredient: 'Cointreau, Vodka, Lime, Cranberry juice',
    image:
      'https://www.thecocktaildb.com/images/media/drink/upxxpq1439907580.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Dirty Martini',
    drink_type: 'Vodka',
    instruction:
      'Pour the vodka, dry vermouth and olive brine into a cocktail shaker with a handful of ice and shake well.\r\nRub the rim of a martini glass with the wedge of lemon.\r\nStrain the contents of the cocktail shaker into the glass and add the olive.\r\nA dirty Martini contains a splash of olive brine or olive juice and is typically garnished with an olive. Use 70 ml Vodka, 1 Tbsp Dry Vermouth, 1 Tbsp Olive Brine, 1 Lemon wedge, 1 Olive.',
    ingredient: 'Vodka, Dry Vermouth, Olive Brine, Lemon, Olive',
    image:
      'https://www.thecocktaildb.com/images/media/drink/vcyvpq1485083300.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Espresso Martini',
    drink_type: 'Vodka',
    instruction:
      'Pour ingredients into shaker filled with ice, shake vigorously, and strain into chilled martini glass. Use 50 ml Vodka, 10 ml Kahlua, 1 dash sugar syrup.',
    ingredient: 'Vodka, Kahlua, Sugar syrup',
    image:
      'https://www.thecocktaildb.com/images/media/drink/n0sx531504372951.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Figgy Thyme',
    drink_type: 'Vodka',
    instruction:
      'In a loose bag, crush up some ice. Pour your precious ice into a collins glass. In a cocktail shaker, muddle the figs and thyme together. Add honey vodka, lemon juice, and a large ice cube. Shake until well chilled, and strain into glass. Add tonic water and finally 2 dashes of angostura bitters. Garnish with sliced figs and thyme. Use 2oz Vodka, 1 tsp Honey, 3 Figs, 1 sprig Thyme, 2 dashes Angostura Bitters, top with Tonic Water.',
    ingredient: 'Vodka, Honey, Figs, Thyme, Agostura Bitters, Tonic Water',
    image:
      'https://www.thecocktaildb.com/images/media/drink/pbw4e51606766578.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Flaming Dr. Pepper',
    drink_type: 'Vodka',
    instruction:
      'Add Amaretto, Bacardi, and vodka. Mix in the Dr. Pepper and beer. Use 1 oz Amaretto, 1 oz Vodka, 1 oz Bacardi 151 proof Rum, 1 oz Dr. Pepper, 1 oz beer.',
    ingredient: 'Amaretto, Vodka, Rum, Dr. Pepper, Beer',
    image:
      'https://www.thecocktaildb.com/images/media/drink/d30z931503565384.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Freddy Kruger',
    drink_type: 'Vodka',
    instruction:
      'Make it an ample size shot. Use 1/2 oz Jägermeister, 1/2 oz Sambuca, 1/2 oz Vodka.',
    ingredient: 'Jägermeister, Sambuca, Vodka',
    image:
      'https://www.thecocktaildb.com/images/media/drink/tuppuq1461866798.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Damned if you do',
    drink_type: 'Whiskey',
    instruction:
      'Pour into shot glass of 0.75 oz of whiskey and 0.25 oz of hot damn. Put in mouth. Repeat as deemed necessary.',
    ingredient: 'Whiskey, Hot Damn',
    image:
      'https://www.thecocktaildb.com/images/media/drink/ql7bmx1503565106.jpg',
    user_id: 7,
  },
  {
    drink_name: 'Hot Toddy',
    drink_type: 'Whiskey',
    instruction:
      'STEP 1: Whisk 50 ml of whisky and 15 ml of honey together and split between 2 heatproof glasses. Add half of the one cinnamon stick to each, then top up with 200ml boiling water. STEP 2: Add a splash of lemon juice to each, then taste and add more to your preference. Finish each with a slice of lemon, studded with a clove, and serve immediately.',
    ingredient: 'Whiskey, Honey, Cinnamon, Lemon, Cloves',
    image:
      'https://www.thecocktaildb.com/images/media/drink/ggx0lv1613942306.jpg',
    user_id: 7,
  },
];

const seedDrinksData = () => Drink.bulkCreate(drinksData);

module.exports = seedDrinksData;