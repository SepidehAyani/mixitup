const { Drink } = require('../models');

const drinkData = [
  {
    name: 'Amaretto Shake',
    type: 'Brandy',
    instruction: 'Combine all ingredients in a blender and blend at high speed until smooth. Serve in chilled glass garnished with bittersweet chocolate shavings. Use two scoops of Chocolate ice-cream, 2 oz of Brandy, and 2 oz Amaretto.',
    ingredient: 'Chocolate ice-cream, Brandy, Amaretto',
    created_at: new Date()
  },
  {
    name: 'Boston Sidecar',
    type: 'Brandy',
    instruction: 'Shake all ingredients with ice, strain into a cocktail glass, and serve. Use: 1 oz Brandy, 1 oz Light rum, 1 oz Triple sec, 1 oz Lemon juice',
    ingredient: 'Brandy, Light rum, Triple sec, Lemon juice',
    created_at: new Date()
  },
  {
    name: 'Brandy Alexander',
    type: 'Brandy',
    instruction: 'Shake all ingredients (except nutmeg) with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve. Use 1 oz Brandy, 1 oz white Creme de Cacao, 1 oz light cream, sprinkle of nutmeg.',
    ingredient: 'Brandy, Creme de Cacao, Light cream, Nutmeg',
    created_at: new Date()
  },
  {
    name: 'Brandy Sour',
    type: 'Brandy',
    instruction: 'Shake brandy, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with the lemon slice, top with the cherry, and serve. Use 2 oz Brandy, juice of half a lemon, 1/2 tsp powdered sugar, 1/2 lemon slice, 1 cherry.',
    ingredient: 'Brandy, Lemon, Powdered sugar, Lemon, Cherry.',
    created_at: new Date()
  },
  {
    name: 'City Slicker',
    type: 'Brandy',
    instruction: 'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass. Use 2 oz Brandy, 1/2 oz Triple sec, 1 Tbsp Lemon juice.',
    ingredient: 'Brandy, Triple sec, Lemon juice',
    created_at: new Date()
  },
  {
    name: 'Scooter',
    type: 'Brandy',
    instruction: 'Shake all ingredients well with cracked ice, strain into a cocktail glass, and serve. Use 1 oz Brandy, 1 oz Amaretto, 1 oz Light cream',
    ingredient: 'Brandy, Amaretto, Light cream',
    created_at: new Date()
  },
  {
    name: 'Scotch Cobbler',
    type: 'Brandy',
    created_at: new Date()
  },
  {
    name: 'Sidecar Cocktail',
    type: 'Brandy',
    instruction: 'Pour scotch, brandy, and curacao over ice in an old-fashioned glass. Add the orange slice, top with the mint sprig, and serve. Use 2 oz Scotch, 4 dashes Brandy, 4 dashes Curacao, 1 slice Orange, 1 Mint leaf',
    ingredient: 'Scotch, Brandy, Curacao, Orange, Mint',
    created_at: new Date()
  },
  {
    name: 'Sol Y Sombra',
    type: 'Brandy',
    instruction: 'hake ingredients with ice, strain into a brandy snifter, and serve. (The English translation of the name of this drink is \"Sun and Shade\", and after sampling this drink, you will understand why. Thanks, Kirby.) Use 1.5 oz Brandy, 1.5 oz Anisette.',
    ingredient: 'Brandy, Anisette',
    created_at: new Date()
  },
  {
    name: 'Stinger',
    type: 'Brandy',
    instruction: 'Pour in a mixing glass with ice, stir and strain into a cocktail glass. May also be served on rocks in a rocks glass. Use 1.5 oz Brandy, 1/2 oz Creme de Menthe',
    ingredient: 'Brandy, Creme de Menthe',
    created_at: new Date()
  },
  {
    name: '69 Special',
    type: 'Gin',
    instruction: 'Pour 2 oz. gin. Add 4 oz. 7-up. Add Lemon Juice for flavor. If you are weak, top up glass with more 7-Up. Use 2oz dry Gin, 4 oz 7-Up, 0.75 oz lemon juice.',
    ingredient: 'Gin, 7-Up, Lemon juice',
    created_at: new Date()
  },
  {
    name: 'A1',
    type: 'Gin',
    instruction: 'Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass. Use 1.75 shot Gin, 1 shot Grand Marnier, 1/4 shot Lemon juice, 1/8 shot Grenadine',
    ingredient: 'Gin, Grand Marnier, Lemon juice, Grenadine',
    created_at: new Date()
  },
  {
    name: 'Abbey Cocktail',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Abbey Martini',
    type: 'Gin',
    instruction: 'Shake all ingredients (except for the cherry) with ice and strain into a cocktail glass. Top with the cherry and serve. Use 1.5 oz Gin, 1 dash orange bitters, juice of 1/4 orange, 1 cherry.',
    ingredient: 'Gin, Orange bitters, Orange, Cherry',
    created_at: new Date()
  },
  {
    name: 'Ace',
    type: 'Gin',
    instruction: 'Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass. Use 2 shots Gin, 1/2 shot Grenadine, 1/2 shot heavy cream, 1/2 shot milk, 1/2 fresh egg white.',
    ingredient: 'Gin, Grenadine, Heavy cream, Milk, Egg White',
    created_at: new Date()
  },
  {
    name: 'Alexander',
    type: 'Gin',
    instruction: 'Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve. Use 1/2 oz Gin, 1/2 oz white Creme de Cacao, 2 oz light cream.',
    ingredient: 'Gin, Creme de Cacao, light cream',
    created_at: new Date()
  },
  {
    name: 'Archbishop',
    type: 'Gin',
    instruction: 'In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well. Use 2 oz Gin, 1 oz Green Ginger Wine, 1 tsp Benedictine, 1 Lime',
    ingredient: 'Gin, Wine, Benedictine, Lime',
    created_at: new Date()
  },
  {
    name: 'Aviation',
    type: 'Gin',
    created_at: new Date()
  },
  {
    name: 'Bluebird',
    type: 'Gin',
    instruction: 'Add all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass. Garnish with a cherry. Use 45 ml Gin, 15 ml lemon juice, 15 ml maraschino liqueur.',
    ingredient: 'Gin, lemon juice, maraschino liqueur',
    created_at: new Date()
  },
  {
    name: 'Bombay Cassis',
    type: 'Gin',
    instruction: 'Add the Bombay Sapphire, Crème de Cassis and lime juice to a balloon glass and swirl well to mix. Fill the glass with good quality cubed ice. Top up with chilled and freshly opened Fever-Tree Ginger Beer. Gently stir to combine, top with a gently squeezed lime wedge and finish with a fresh ginger slice. Use 50 ml Gin, 20 ml Creme de Cassis, 15 ml Fresh Lime Juice, 75 ml Ginger beer, 1 Lime, 1 long strip of ginger.',
    ingredient: 'Gin, Creme de Cassis, Fresh Lime Juice, Ginger beer, Lime, Ginger',
    created_at: new Date()
  },
  {
    name: 'Boomerang',
    type: 'Gin',
    instruction: 'In a mixing glass half-filled with ice cubes, combine the gin, vermouth, bitters, and maraschino liqueur. Stir well. Strain into a cocktail glass and garnish with the cherry. Use 2 oz Gin, 1/2 oz Dry Vermouth, 2 dashes Bitters, 1/2 tsp Marachino liqueur, 1 Maraschino cherry.',
    ingredient: 'Gin, Dry Vermouth, Bitters, Marachino liqueur, Maraschino cherry',
    created_at: new Date()
  },
  {
    name: 'Boxcar',
    type: 'Gin',
    instruction: 'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass. 1.5 oz Gin, 1 oz Triple sec, 1 tsp Lemon juice, 1/2 tsp Grenadine, 1 egg white.',
    ingredient: 'Gin, Triple sec, Lemon juice, Grenadine, Egg white',
    created_at: new Date()
  },
  {
    name: 'Bramble',
    type: 'Gin',
    instruction: 'Fill glass with crushed ice. Build gin, lemon juice and simple syrup over. Stir, and then pour blackberry liqueur over in a circular fashion to create marbling effect. Garnish with two blackberries and lemon slice. Use 40 ml Gin, 15 ml lemon juice, 10 ml Sugar syrup, 15 ml Creme de Mure.',
    ingredient: 'Gin, lemon juice, Sugar syrup, Creme de Mure',
    created_at: new Date()
  },
  {
    name: 'Casino',
    type: 'Gin',
    instruction: 'Pour all ingredients into shaker with ice cubes. Shake well. Strain into chilled cocktail glass. Garnish with a lemon twist and a maraschino cherry. Serve without a straw. Use 2 oz Gin, 1/4 tsp Maraschino liqueur, 1/4 tsp Lemon juice, 2 dashes orange bitters, 1 cherry.',
    ingredient: 'Gin, Maraschino liqueur, Lemon juice, Orange bitters, Cherry',
    created_at: new Date()
  },
  {
    name: 'Casino Royale',
    type: 'Gin',
    instruction: 'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass. Use 2 oz Gin, 1/2 oz Lemon juice, 1 tsp Maraschino liqueur, 1 dash orange bitters, 1 egg yolk.',
    ingredient: 'Gin, Lemon juice, Maraschino liqueur, Orange bitters, Egg yolk',
    created_at: new Date()
  },
  {
    name: 'Flying Dutchman',
    type: 'Gin',
    instruction: 'Pour brandy, gin, and sweet vermouth into a highball glass over ice cubes. Fill with carbonated water. Add the twist of lemon peel, stir, and serve. (Ginger ale may be substituted for carbonated water, if preferred.) Use 3/4 oz Brandy, 3/4 oz Gin, 3/4 oz Sweet Vermouth, Carbonated water, Lemon peel',
    ingredient: 'Brandy, Gin, Sweet Vermouth, Carbonated water, Lemon peel',
    created_at: new Date()
  },
  {
    name: 'Gimlet',
    type: 'Gin',
    instruction: 'Add all the ingredients to a shaker and fill with ice. Shake, and strain into a chilled cocktail glass or an Old Fashioned glass filled with fresh ice. Garnish with a lime wheel. Use 2.5 oz Gin, 0.5 oz Lime Juice, 0.5 oz Sugar Syrup, 1 Lime wheel.',
    ingredient: 'Gin, Lime Juice, Sugar Syrup, Lime',
    created_at: new Date()
  },
  {
    name: 'Gin Fizz',
    type: 'Gin',
    instruction: 'Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water. Use 2 oz Gin, juice of half a lemon, 1 tsp powdered sugar, Carbonated water.',
    ingredient: 'Gin, Lemon, Powdered sugar, Carbonated water',
    created_at: new Date()
  },
  {
    name: 'Gin Lemon',
    type: 'Gin',
    instruction: 'For the preparation of the gin lemon you will not need the shaker. Fill the tumbler with ice, pour the gin and lemonade over it. Gently mix and decorate with a slice of lemon. Those who prefer can also add a few mint leaves. Your gin lemon is ready to be served. Use  60 ml Gin, 80 ml Lemon Juice, 1 slice Lemon Peel, ice cubes.',
    ingredient: 'Gin, Lemon Juice, Lemon Peel, Ice',
    created_at: new Date()
  },
  {
    name: 'Gin Sling',
    type: 'Gin',
    instruction: 'Dissolve powdered sugar in mixture of water and juice of lemon. Add gin. Pour into an old-fashioned glass over ice cubes and stir. Add the twist of orange peel and serve. Use 2 oz Gin, juice of 1/2 Lemon, 1 tsp powdered sugar, 1 tsp water, twist of orange peel.',
    ingredient: 'Gin, Lemon, Powdered sugar, Water, orange peel',
    created_at: new Date()
  },
  {
    name: 'Afterglow',
    type: 'Non-Alcoholic',
    instruction: 'Use 1 part grenadine, 4 parts orange juice, 4 parts pineapple juice. Mix. Serve over ice. ',
    ingredient: 'Grenadine, Orange juice, Pineapple juice',
    created_at: new Date()
  },
  {
    name: 'Aloha Fruit punch',
    type: 'Non-Alcoholic',
    instruction: 'Good for a group! Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly. Use: 3/4 cup Water, 2 tsp Ginger, 2 cups Guava juice, 1.5 Tbsp Lemon juice, 1.5 cup Pineapple, 1 cup Sugar, 3-4 cups Pineapple juice',
    ingredient: 'Water, Ginger, Guava juice, Lemon juice, Pineapple, Sugar, Pineapple juice',
    created_at: new Date()
  },
  {
    name: 'Apple Berry Smoothie',
    type: 'Non-Alcoholic',
    instruction: 'Throw everything into a blender and liquify. Use 1 cup berries, 2 apples, cored.',
    ingredient: 'Berries, Apple',
    created_at: new Date()
  },
  {
    name: 'Banana Milk Shake',
    type: 'Non-Alcoholic',
    instruction: 'Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana. Use: 100 ml Milk, 40 ml Orange juice, 2 tsp Sugar syrup, 1/2 Banana.',
    ingredient: 'Milk, Orange juice, Sugar syrup, Banana',
    created_at: new Date()
  },
  {
    name: 'Bora Bora',
    type: 'Non-Alcoholic',
    instruction: 'Prepare in a blender or shaker, serve in a highball glass on the rocks. Garnish with 1 slice of pineapple and one cherry. Use: 100 ml Pineapple juice, 60 ml Passion fruit juice, 10 ml Lemon juice, 10 ml Grenadine.',
    ingredient: 'Pineapple juice, Passion fruit juice, Lemon juice, Grenadine',
    created_at: new Date()
  },
  {
    name: 'Just a Moonmint',
    type: 'Non-Alcoholic',
    instruction: 'Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up. Use 2 cups Milk, Chocolate syrup and Mint syrup to taste.',
    ingredient: ' Milk, Chocolate syrup, Mint syrup',
    created_at: new Date()
  },
  {
    name: 'Lassi Plain',
    type: 'Non-Alcoholic',
    instruction: 'Blend in a blender for 3 seconds. Lassi is one of the easiest things to make, and there are many ways of making it. Basically, it is buttermilk (yogurt whisked with water), and you can choose almost any consistency that you like, from the thinnest to the thickest. Serve cold. Use 1/5 cup Yogurt, 1.25 cup cold Water, 1/2 tsp ground roasted Cumin seed, 1/4 tsp Salt, 1/4 tsp dried Mint.',
    ingredient: 'Yogurt, Water, Cumin seed, Salt, Mint',
    created_at: new Date()
  },
  {
    name: 'Lassi Mango',
    type: 'Non-Alcoholic',
    instruction: 'Put it all in a blender and pour over crushed ice. You can also use other fruits like strawberries and bananas. Use 2 Mangoes, 2 cups Yogurt, 1/2 cup Sugar, 1 cup ice Water.',
    ingredient: 'Mango, Yogurt, Sugar, Water',
    created_at: new Date()
  },
  {
    name: 'Adam Bomb',
    type: 'Rum',
    instruction: 'Add ice to blender then fruit, and 1 - 3 oz fruit juice then add the 1 oz Rum, 1 oz Vodka, 1 oz Tequila, and 1/2 oz triple sec. blend till smooth, rim glass with sugar or salt and pour mixture in. garnish with lemon or lime slice.',
    ingredient: 'Rum, Vodka, Tequila, triple sec, Fruit, Fruit juice',
    created_at: new Date()
  },
  {
    name: 'Adios Amigos Cocktail',
    type: 'Rum',
    instruction: 'Shake together 1 shot Rum, 1/2 shot Dry Vermouth, 1/2 shot Cognac, 1/2 shot Gin, 1/4 shot Lime juice, 1/4 shot Sugar syrup, 1/2 Water and strain into a cold glass.',
    ingredient: '1 shot Rum, 1/2 shot Dry Vermouth, 1/2 shot Cognac, 1/2 shot Gin, 1/4 shot Lime juice, 1/4 shot Sugar syrup, 1/2 Water',
    created_at: new Date()
  },
  {
    name: 'Aztec Punch',
    type: 'Rum',
    instruction: 'Mix 1 can Lemonade, 5 oz Vodka, 7 oz Rum, 2 liter bottle Ginger ale in a pitcher, and serve!',
    ingredient: 'Lemonade, Vodka, Rum, Ginger ale',
    created_at: new Date()
  },
  {
    name: 'Bahama Mama',
    type: 'Rum',
    instruction: 'Add 2 parts club soda. Mix it all together and pour over a bunch of ice. Drink with a straw.',
    ingredient: 'Rum, Dark rum, Banana liqueur, Grenadine, Pineapple juice, Orange juice, Sweet and Sour',
    created_at: new Date()
  },
  {
    name: 'Barracuda',
    type: 'Rum',
    instruction: 'Shake pour ingredients with ice. Strain into glass, top with Sparkling wine.',
    ingredient: 'Rum, Galliano, Pineapple juice, Lime juice, Prosecco',
    created_at: new Date()
  },
  {
    name: 'Blue Hurricane',
    type: 'Rum',
    instruction: 'If each part is 1/2 oz then use about 2.5 cups of ice. Blend it all together.',
    ingredient: 'Rum, Dark rum, Passoa, Blue Curacao, Sweet and sour',
    created_at: new Date()
  },
  {
    name: 'Bounty Hunter',
    type: 'Rum',
    instruction: 'Add the 1 shot Rum, 1 Shot Liqueur into a shaker as well as the pineapple juice, strain into a Margarita glass. Top with Prosecco and garnish with Blueberries.',
    ingredient: 'Rum, Coconut liqueur, Blueberries, Pineapple juice, Prosecco',
    created_at: new Date()
  },
  {
    name: 'Captain Kidds Punch',
    type: 'Rum',
    instruction: 'Mix 2 shot Rum, 1 shot Lime juice, 1 shot Egg White, a dash bitters, and sugar together in a shaker and strain into a collins glass. Use Caribbean dark Rum for a sweeter taste.',
    ingredient: 'Rum, Lime juice, Egg White, bitters, Sugar, Nutmeg ',
    created_at: new Date()
  },
  {
    name: 'Rum Punch',
    type: 'Rum',
    instruction: 'Mix all ingredients in a punch bowl and serve.',
    ingredient: 'Rum, Ginger ale, Fruit punch, Orange juice, ice',
    created_at: new Date()
  },
  {
    name: 'Rum Toddy',
    type: 'Rum',
    instruction: '"Dissolve powdered sugar in water in an old-fashioned glass. Add rum and one ice cube and stir. Add the twist of lemon peel and serve.',
    ingredient: 'Rum, Powdered sugar, Lemon peel, Water',
    created_at: new Date()
  },
  {
    name: 'Highland Fling Cocktail',
    type: 'Scotch',
    instruction:'Stir 1.5 oz Scotch, 3/4 oz Sweet Vermouth, 2 dashes Orange bitters (except olive) with ice and strain into a cocktail glass. Add the olive and serve.',
    ingredient:'Scotch, Sweet Vermouth, Orange bitters, Olive',
    created_at: new Date()
  },
  {
    name: 'Irish Cream',
    type: 'Scotch',
    instruction:'Mix 1 cup scotch with 1 can sweetened condensed milk 3 drops of coconut syrup, 1 tblsp Chocolate syrup . Add 1.25 cup half-and-half. Add rest.',
    ingredient:'Scotch, Half-and-half, Condensed milk, Coconut syrup, Chocolate Syrup',
    created_at: new Date()
  },
  {
    name: 'Loch Lomond',
    type: 'Scotch',
    instruction:'In a mixing glass half-filled with ice cubes, combine 2 oz Scotch, 1/2 oz Drambuie, and 1/2 Vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.',
    ingredient:'Scotch, Drambulie, Dry Vermouth, Lemon peel',
    created_at: new Date()
  },
  {
    name: 'Rusty Nail',
    type: 'Scotch',
    instruction:'Pour 1.5 oz Scotch and 1/2 oz Drambuie into an old-fashioned glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.',
    ingredient:'Scotch, Drambuie, Lemon peel',
    created_at: new Date()
  },
  {
    name: 'Scotch Sour',
    type: 'Scotch',
    instruction:'Shake 1.5 oz scotch, juice of 1/2 lime, and 1/2 powdered sugar with ice and strain into a whiskey sour glass. Decorate with 1/2 slice lemon, top with the cherry, and serve.',
    ingredient:'Scotch, Lime, Powdered sugar, Lemon, Cherry',
    created_at: new Date()
  },
  {
    name: 'Thriller',
    type: 'Scotch',
    instruction:'In a shaker half-filled with ice cubes, combine 1.5 oz Scotch, 1 oz Wine, 1 oz Orange juice. Shake well. Strain into a cocktail glass.',
    ingredient:'Scotch, Wine, Orange juice',
    created_at: new Date()
  },
  {
    name: 'Whisky Mac',
    type: 'Scotch',
    instruction:'Pour both 1.5 oz scotch and 1 oz wine into a wine goblet with no ice.',
    ingredient:'Scotch, Wine',
    created_at: new Date()
  },
  {
    name: 'Bloody Maria',
    type: 'Tequila',
    instruction: 'Shake all ingredients (except lemon slice) with cracked ice and strain into an old-fashioned glass over ice cubes. Add the slice of lemon and serve. Use 1 oz Tequila, 2 oz Tomato juice, 1 dash Lemon juice, 1 dash Tabasco sauce, 1 dash Celery salt, 1 slice of Lemon.',
    ingredient: 'Tequila, Tomato juice, Lemon juice, Tabasco sauce, Celery salt, Lemon',
    created_at: new Date()
  },
  {
    name: 'Blue Margarita',
    type: 'Tequila',
    instruction: 'Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve. Use 1.5 oz Tequila, 1 oz Blue Cruacao, 1 oz Lime juice, coarse salt.',
    ingredient: 'Tequila, Blue Cruacao, Lime juice, coarse salt',
    created_at: new Date()
  },
  {
    name: 'Brave Bull Shooter',
    type: 'Tequila',
    instruction: 'Pour Tabasco into bottom of shot glass and fill with tequila. Use 1/2 oz Tequila, 1/2 oz Tabasco sauce.',
    ingredient: 'Tequila, Tabasco sauce',
    created_at: new Date()
  },
  {
    name: 'Cherry Electric Lemonade',
    type: 'Tequila',
    instruction: 'Now stir vigorously and then pour over a large cup of ice. Now drink it with a straw and stir occasionally. Use 1 oz Gin,  1 oz Tequila, 1 oz Vodka, 1 oz White rum, 1 oz Triple Sec, 1 oz Cherry Grenadine, 1 oz Sweet and sour, 3 oz Club soda.',
    ingredient: 'Gin, Tequila, Vodka, White rum, Triple Sec, Cherry Grenadine, Sweet and sour, Club soda',
    created_at: new Date()
  },
  {
    name: 'Downshift',
    type: 'Tequila',
    instruction: 'Start with the Sprite. Next comes the tequila. After that, add the Minute Maid Fruit Punch, then float the 151. Rocks optional. Use 2 parts Fruit punch, 1 part Sprite, 2 shots Tequila, Rum.',
    ingredient: 'Fruit punch, Sprite, Tequila, Rum',
    created_at: new Date()
  },
  {
    name: 'Long Island Iced Tea',
    type: 'Tequila',
    instruction: 'Mix all contents in a highball glass and sitr gently. Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist. 1/2 oz Vodka, 1/2 oz Tequila, 1/2 oz Light rum, 1/2 oz Gin, 1/2 oz Coca-Cola, twist of Lemon peel.',
    ingredient: 'Vodka, Tequila, Light rum, Gin, Coca-Cola, Lemon peel',
    created_at: new Date()
  },
  {
    name: 'Margarita',
    type: 'Tequila',
    instruction: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass. Use 1.5 oz Tequila, 0.5 oz of Triple sec and 1 oz of lime juice',
    ingredient: 'Tequila, Triple sec, Lime juice, Salt',
    created_at: new Date()
  },

];

const seedDrink = () => Drink.bulkCreate(drinkData);

module.exports = seedDrink;