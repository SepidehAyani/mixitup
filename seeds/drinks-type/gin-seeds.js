const { Drink } = require('../models');

const ginDrinksData = [

    {
        drink_name: '3-Mile Long Island Iced Tea',
        drink_type: 'Gin',
        instruction: 'Fill 14oz glass with ice and alcohol. Fill 2/3 glass with cola and remainder with sweet & sour. Top with dash of bitters and lemon wedge. Use 1/2 oz Gin, 1/2 oz Light rum, 1/2 oz Tequila, 1/2 oz Triple Sec, 1/2 oz Vodka, 1/2 oz Coca-Cola, 1-2 dashes Sweet and Sour, garnish with Bitters, 1 lemon wedge.',
        ingredient: 'Gin, Light rum, Tequila, Triple Sec, Vodka, Coca-Cola, Sweet and Sour, Bitters, Lemon wedge',
        image: 'https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg'
    },
    {
        drink_name: '69 Special',
        drink_type: 'Gin',
        instruction: 'Pour 2 oz. gin. Add 4 oz. 7-up. Add Lemon Juice for flavor. If you are weak, top up glass with more 7-Up. Use 2oz dry Gin, 4 oz 7-Up, 0.75 oz lemon juice.',
        ingredient: 'Gin, 7-Up, Lemon juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg'
    },
    {
        drink_name: 'A1',
        drink_type: 'Gin',
        instruction: 'Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass. Use 1.75 shot Gin, 1 shot Grand Marnier, 1/4 shot Lemon juice, 1/8 shot Grenadine',
        ingredient: 'Gin, Grand Marnier, Lemon juice, Grenadine',
        image: 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg'
    },
    {
        drink_name: 'Abbey Cocktail',
        drink_type: 'Gin',
        instruction: 'Shake all ingredients (except for the cherry) with ice and strain into a cocktail glass. Top with the cherry and serve. Use 1.5 oz Gin, 1 dash orange bitters, juice of 1/4 orange, 1 cherry.',
        ingredient: 'Gin, Orange bitters, Orange, Cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/mr30ob1582479875.jpg'
    },
    {
        drink_name: 'Abbey Martini',
        drink_type: 'Gin',
        instruction: 'Put all ingredients into a shaker and mix, then strain contents into a chilled cocktail glass. Use 2 shots Gin, 1 shot Sweet Vermouth, 1 shot orange juice, 3 dashes Angostura Bitters',
        ingredient: 'Gin, Sweet Vermouth, Orange juice, Angostura Bitters.',
        image: 'https://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg'
    },
    {
        drink_name: 'Ace',
        drink_type: 'Gin',
        instruction: 'Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass. Use 2 shots Gin, 1/2 shot Grenadine, 1/2 shot heavy cream, 1/2 shot milk, 1/2 fresh egg white.',
        ingredient: 'Gin, Grenadine, Heavy cream, Milk, Egg White',
        image: 'https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg'
    },
    {
        drink_name: 'Adam & Eve',
        drink_type: 'Gin',
        instruction: 'Shake together all the ingredients and strain into a cold glass. Use 1 shot Gin, 1 shot Cognac, 1 shot Creme de Cassis, 1/8 shot fresh lemon juice.',
        ingredient: 'Gin, Cognac, Creme de Cassis, lemon juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/vfeumw1504819077.jpg'
    },
    {
        drink_name: 'Addison',
        drink_type: 'Gin',
        instruction: 'Shake together all the ingredients and strain into a cold glass. Use 1.5 shot Gin, 1.5 shot Vermouth.',
        ingredient: 'Gin, Vermouth',
        image: 'https://www.thecocktaildb.com/images/media/drink/yzva7x1504820300.jpg'
    },
    {
        drink_name: 'Alaska Cocktail',
        drink_type: 'Gin',
        instruction: 'Stir all ingredients with ice, strain contents into a cocktail glass. Drop in a twist of lemon and serve. Use 2 dashes orange bitters, 1.5 oz Gin, 0.75 oz Yellow Chartreuse, twist of lemon peel',
        ingredient: 'Orange bitters, Gin, Yellow Chartreuse, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/wsyryt1483387720.jpg'
    },
    {
        drink_name: 'Alexander',
        drink_type: 'Gin',
        instruction: 'Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve. Use 1/2 oz Gin, 1/2 oz white Creme de Cacao, 2 oz light cream.',
        ingredient: 'Gin, Creme de Cacao, light cream',
        image: 'https://www.thecocktaildb.com/images/media/drink/0clus51606772388.jpg'
    },
    {
        drink_name: 'Allies Cocktail',
        drink_type: 'Gin',
        instruction: 'Stir all ingredients with ice, strain contents into a cocktail glass, and serve. Use 1 oz Dry Vermouth, 1 oz Gin, and 1/2 tsp Kummel.',
        ingredient: 'Dry Vermouth, Gin, Kummel.',
        image: 'https://www.thecocktaildb.com/images/media/drink/qvprvp1483388104.jpg'
    },
    {
        drink_name: 'Angel Face',
        drink_type: 'Gin',
        instruction: 'Shake all ingredients with ice and strain contents into a cocktail glass. Use 1/5 oz Apricot brandy, 1/5 oz Apple brandy, 1 oz Gin.',
        ingredient: 'Apricot brandy, Apple brandy, Gin',
        image: 'https://www.thecocktaildb.com/images/media/drink/vaukir1606772580.jpg'
    },
    {
        drink_name: 'Archbishop',
        drink_type: 'Gin',
        instruction: 'In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well. Use 2 oz Gin, 1 oz Green Ginger Wine, 1 tsp Benedictine, 1 Lime',
        ingredient: 'Gin, Wine, Benedictine, Lime',
        image: 'https://www.thecocktaildb.com/images/media/drink/4g6xds1582579703.jpg'
    },
    {
        drink_name: 'Army special',
        drink_type: 'Gin',
        instruction: 'Pour Vodka, Gin and lime cordial into glass, and top up with crushed ice. Wait for ice to melt slightly and sip without a straw. Use 30 ml Vodka, 30 ml Gin, 45 ml Lime juice cordial, 1/2 glass crushed ice.',
        ingredient: 'Vodka, Gin, Lime juice cordial, ice',
        image: 'https://www.thecocktaildb.com/images/media/drink/55muhh1493068062.jpg'
    },
    {
        drink_name: 'Arthur Tompkins',
        drink_type: 'Gin',
        instruction: 'In a shaker half-filled with ice cubes, combine the gin, Grand Marnier, and lemon juice. Shake well. Strain into a sour glass and garnish with the lemon twist. Use 2 oz Gin, 1/2 oz Grand Marnier, 2 tsp Lemon juice, 1 twist of Lemon peel.',
        ingredient: 'Gin, Grand Marnier, Lemon juice, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/7onfhz1493067921.jpg'
    },
    {
        drink_name: 'Artillery',
        drink_type: 'Gin',
        instruction: 'Stir all ingredients with ice, strain into a cocktail glass, and serve. Use 1.5 tsp Sweet Vermouth, 1.5 oz Gin, 2 dashes of Bitters.',
        ingredient: 'Sweet Vermouth, Gin, Bitters',
        image: 'https://www.thecocktaildb.com/images/media/drink/g1vnbe1493067747.jpg'
    },
    {
        drink_name: 'AT&T',
        drink_type: 'Gin',
        instruction: 'Pour Vodka and Gin over ice, add Tonic and Stir. Use 1 oz Absolut Vodka, 1 oz Gin, 4 oz Tonic water',
        ingredient: 'Absolut Vodka, Gin, Tonic water',
        image: 'https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg'
    },
    {
        drink_name: 'Aviation',
        drink_type: 'Gin',
        instruction: 'Add all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass. Garnish with a cherry. Use 45 ml Gin, 15 ml lemon juice, 15 ml maraschino liqueur.',
        ingredient: 'Gin, lemon juice, maraschino liqueur',
        image: 'https://www.thecocktaildb.com/images/media/drink/trbplb1606855233.jpg'
    },
    {
        drink_name: 'Bermuda Highball',
        drink_type: 'Gin',
        instruction: 'Pour brandy, gin, and dry vermouth into a highball glass over ice cubes. Fill with carbonated water and stir. Add the twist of lemon and serve. (Ginger ale may be substituted for carbonated water, if preferred.) Use 0.75 oz Brandy, 0.75 oz Gin, 0.75 oz Dry Vermouth, carbonated water, one twist of lemon peel.',
        ingredient: 'Brandy, Gin, Dry Vermouth, Carbonated water, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/qrvtww1441206528.jpg'
    },
    {
        drink_name: 'Bijou',
        drink_type: 'Gin',
        instruction: 'Stir in mixing glass with ice and strain. Use 1 dash orange bitters, 1 oz Green Chartreuse, 1 oz Gin, 1 oz Sweet Vermouth.',
        ingredient: 'Orange bitters, Green Chartreuse, Gin, Sweet Vermouth',
        image: 'https://www.thecocktaildb.com/images/media/drink/rysb3r1513706985.jpg'
    },
    {
        drink_name: 'Bluebird',
        drink_type: 'Gin',
        instruction: 'In a mixing glass half-filled with crushed ice, combine the gin, triple sec, Curacao, and bitters. Stir well. Strain into a cocktail glass and garnish with the lemon twist and the cherry. Use 1.5 oz Gin, 0.5 oz Triple sec, 0.5 oz Blue Curacao, 2 dashes of bitters, 1 Maraschino cherry, one twist of Lemon peel.',
        ingredient: 'Gin, Triple sec, Blue Curacao, Bitters, Maraschino cherry, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/5jhyd01582579843.jpg'
    },
    {
        drink_name: 'Bombay Cassis',
        drink_type: 'Gin',
        instruction: 'Add the Bombay Sapphire, Crème de Cassis and lime juice to a balloon glass and swirl well to mix. Fill the glass with good quality cubed ice. Top up with chilled and freshly opened Fever-Tree Ginger Beer. Gently stir to combine, top with a gently squeezed lime wedge and finish with a fresh ginger slice. Use 50 ml Gin, 20 ml Creme de Cassis, 15 ml Fresh Lime Juice, 75 ml Ginger beer, 1 Lime, 1 long strip of ginger.',
        ingredient: 'Gin, Creme de Cassis, Fresh Lime Juice, Ginger beer, Lime, Ginger',
        image: 'https://www.thecocktaildb.com/images/media/drink/h1e0e51510136907.jpg'
    },
    {
        drink_name: 'Boomerang',
        drink_type: 'Gin',
        instruction: 'In a mixing glass half-filled with ice cubes, combine the gin, vermouth, bitters, and maraschino liqueur. Stir well. Strain into a cocktail glass and garnish with the cherry. Use 2 oz Gin, 1/2 oz Dry Vermouth, 2 dashes Bitters, 1/2 tsp Marachino liqueur, 1 Maraschino cherry.',
        ingredient: 'Gin, Dry Vermouth, Bitters, Marachino liqueur, Maraschino cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/3m6yz81504389551.jpg'
    },
    {
        drink_name: 'Boxcar',
        drink_type: 'Gin',
        instruction: 'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass. 1.5 oz Gin, 1 oz Triple sec, 1 tsp Lemon juice, 1/2 tsp Grenadine, 1 egg white.',
        ingredient: 'Gin, Triple sec, Lemon juice, Grenadine, Egg white',
        image: 'https://www.thecocktaildb.com/images/media/drink/pwgtpa1504366376.jpg'
    },
    {
        drink_name: 'Bramble',
        drink_type: 'Gin',
        instruction: 'Fill glass with crushed ice. Build gin, lemon juice and simple syrup over. Stir, and then pour blackberry liqueur over in a circular fashion to create marbling effect. Garnish with two blackberries and lemon slice. Use 40 ml Gin, 15 ml lemon juice, 10 ml Sugar syrup, 15 ml Creme de Mure.',
        ingredient: 'Gin, lemon juice, Sugar syrup, Creme de Mure',
        image: 'https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg'
    },
    {
        drink_name: 'Casino',
        drink_type: 'Gin',
        instruction: 'Pour all ingredients into shaker with ice cubes. Shake well. Strain into chilled cocktail glass. Garnish with a lemon twist and a maraschino cherry. Serve without a straw. Use 2 oz Gin, 1/4 tsp Maraschino liqueur, 1/4 tsp Lemon juice, 2 dashes orange bitters, 1 cherry.',
        ingredient: 'Gin, Maraschino liqueur, Lemon juice, Orange bitters, Cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/1mvjxg1504348579.jpg'
    },
    {
        drink_name: 'Casino Royale',
        drink_type: 'Gin',
        instruction: 'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass. Use 2 oz Gin, 1/2 oz Lemon juice, 1 tsp Maraschino liqueur, 1 dash orange bitters, 1 egg yolk.',
        ingredient: 'Gin, Lemon juice, Maraschino liqueur, Orange bitters, Egg yolk',
        image: 'https://www.thecocktaildb.com/images/media/drink/3qpv121504366699.jpg'
    },
    {
        drink_name: 'Cherry Electric Lemonade',
        drink_type: 'Gin',
        instruction: 'Stir vigorously and then pour over a large cup of ice. Drink with a straw and stir occasionally. Use 1 oz Gin, 1 oz Tequila, 1 oz Vodka, 1 oz White rum, 1 oz Triple Sec, 1 oz Cherry Grenadine, 1 oz Sweet and sour, 3 oz Club soda.',
        ingredient: 'Gin, Tequila, Vodka, White rum, Triple Sec, Cherry Grenadine, Sweet and sour, Club soda',
        image: 'https://www.thecocktaildb.com/images/media/drink/tquyyt1451299548.jpg'
    },
    {
        drink_name: 'Clover Club',
        drink_type: 'Gin',
        instruction: 'Dry shake ingredients to emulsify, add ice, shake and served straight up. Use 1.5 oz Gin, 2 tsp Grenadine, juice of half a Lemon, 1 egg white.',
        ingredient: 'Gin, Grenadine, Lemon, Egg white',
        image: 'https://www.thecocktaildb.com/images/media/drink/t0aja61504348715.jpg'
    },
    {
        drink_name: 'Corpse Reviver',
        drink_type: 'Gin',
        instruction: 'Shake, strain, straight up, cocktail glass rinsed with absinthe. Use 3/4 oz Gin, 3/4 oz Triple sec, 3/4 oz Lillet Blanc, 3/4 oz Lemon juice, 1 dash Absinthe.',
        ingredient: 'Gin, Triple sec, Lillet Blanc, Lemon juice, Absinthe',
        image: 'https://www.thecocktaildb.com/images/media/drink/gifgao1513704334.jpg'
    },
    {
        drink_name: 'Dragonfly',
        drink_type: 'Gin',
        instruction: 'In a highball glass almost filled with ice cubes, combine the gin and ginger ale. Stir well. Garnish with the lime wedge. Use 1.5 oz in, 4 oz Ginger ale, 1 Lime wedge.',
        ingredient: 'Gin, Ginger ale, Lime',
        image: 'https://www.thecocktaildb.com/images/media/drink/uc63bh1582483589.jpg'
    },
    {
        drink_name: 'Dubonnet Cocktail',
        drink_type: 'Gin',
        instruction: 'Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with a sprig of fresh mint in the drink. Use 60 ml Gin, 2 dashes of Peach Bitters, 2 fresh mint leaves.',
        ingredient: 'Gin, Peach Bitters, Mint',
        image: 'https://www.thecocktaildb.com/images/media/drink/pfz3hz1582483111.jpg'
    },
    {
        drink_name: 'English Highball',
        drink_type: 'Gin',
        instruction: 'Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive. Use 1 2/3 oz Gin, 1/3 oz Dry Vermouth, 1 olive.',
        ingredient: 'Gin, Dry Vermouth, Olive',
        image: 'https://www.thecocktaildb.com/images/media/drink/dhvr7d1504519752.jpg'
    },
    {
        drink_name: 'English Rose Cocktail',
        drink_type: 'Gin',
        instruction: 'Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve. Use 1.5 oz Dubonnet Rouge, 3/4 oz Gin, 1 dash Bitters, 1 twist of Lemon peel.',
        ingredient: 'Dubonnet Rouge, Gin, Bitters, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/yxwrpp1441208697.jpg'
    },
    {
        drink_name: 'Flying Dutchman',
        drink_type: 'Gin',
        instruction: 'Pour brandy, gin, and sweet vermouth into a highball glass over ice cubes. Fill with carbonated water. Add the twist of lemon peel, stir, and serve. (Ginger ale may be substituted for carbonated water, if preferred.) Use 3/4 oz Brandy, 3/4 oz Gin, 3/4 oz Sweet Vermouth, Carbonated water, Lemon peel',
        ingredient: 'Brandy, Gin, Sweet Vermouth, Carbonated water, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/mwko4q1582482903.jpg'
    },
    {
        drink_name: 'French 75',
        drink_type: 'Gin',
        instruction: 'Rub rim of cocktail glass with lemon juice and dip rim of glass in powdered sugar. Shake all ingredients (except cherry) with ice and strain into sugar-rimmed glass. Top with the cherry and serve. Use 3/4 oz Apricot brandy, 1/5 oz Gin, 3/4 oz Dry Vermouth, 1 tsp Grenadine, 1/4 tsp Lemon juice, 1 cherry.',
        ingredient: 'Apricot brandy, Gin, Dry Vermouth, Grenadine, Lemon juice, Cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/hrxfbl1606773109.jpg'
    },
    {
        drink_name: 'French Negroni',
        drink_type: 'Gin',
        instruction: 'Add ice to a shaker and pour in all ingredients. Using a bar spoon, stir 40 to 45 revolutions or until thoroughly chilled. Strain into a martini glass or over ice into a rocks glass. Garnish with orange twist. Use 1 oz Gin, 1 oz Lillet, 1 oz  Sweet Vermouth, 1 Orange Peel.',
        ingredient: 'Gin, Lillet, Sweet Vermouth, Orange Peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/x8lhp41513703167.jpg'
    },
    {
        drink_name: 'Garibaldi Negroni',
        drink_type: 'Gin',
        instruction: 'Mix together in a shaker and garnish with a simple orange slice. Fill your vitamin C and cocktail fix at the same time! Use 30 ml Gin, 30 ml Campari, 90 ml Orange Juice, garnish with Orange Peel.',
        ingredient: 'Gin, Campari, Orange Juice, Orange Peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/kb4bjg1604179771.jpg'
    },
    {
        drink_name: 'Gentlemans Club',
        drink_type: 'Gin',
        instruction: 'In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well. Use 1/5 oz Gin, 1 oz Brandy, 1 oz Sweet Vermouth, 1 oz Club soda',
        ingredient: 'Gin, Brandy, Sweet Vermouth, Club soda',
        image: 'https://www.thecocktaildb.com/images/media/drink/k2r7wv1582481454.jpg'
    },
    {
        drink_name: 'Gimlet',
        drink_type: 'Gin',
        instruction: 'Add all the ingredients to a shaker and fill with ice. Shake, and strain into a chilled cocktail glass or an Old Fashioned glass filled with fresh ice. Garnish with a lime wheel. Use 2.5 oz Gin, 0.5 oz Lime Juice, 0.5 oz Sugar Syrup, 1 Lime wheel.',
        ingredient: 'Gin, Lime Juice, Sugar Syrup, Lime',
        image: 'https://www.thecocktaildb.com/images/media/drink/3xgldt1513707271.jpg'
    },
    {
        name: 'Gin and Soda',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/nzlyc81605905755.jpg'
    },
    {
        name: 'Gin And Tonic',
        instruction: 'Pour the Gin and Soda water into a highball glass almost filled with ice cubes. Stir well. Garnish with the lime wedge. Use 2 oz Gin, 5 oz Soda Water, 1/4 Lime.',
        ingredient: 'Gin, Soda Water, Lime',
        image: 'https://www.thecocktaildb.com/images/media/drink/z0omyp1582480573.jpg'
    },
    {
        drink_name: 'Gin Basil Smash',
        drink_type: 'Gin',
        instruction: 'Muddle Basil leaves (~ 10) with Suggar Syrup in a shaker. Add Gin an Lemon Juice. Filter and serve in a tumbler with ice. Use  60 ml Gin, 20 ml Lemon Juice, 20 ml Sugar Syrup, whole Basil leaf.',
        ingredient: 'Gin, Lemon Juice, Sugar Syrup, Basil',
        image: 'https://www.thecocktaildb.com/images/media/drink/jqh2141572807327.jpg'
    },
    {
        drink_name: 'Gin Cooler',
        drink_type: 'Gin',
        instruction: 'Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice and add gin. Fill with carbonated water and stir. Add the lemon peel and the orange spiral so that the end of the orange spiral dangles over rim of glass. Use 2 oz Gin, Carbonated water, Powdered sugar, Orange spiral, Lemon peel.',
        ingredient: 'Gin, Carbonated water, Powdered sugar, Orange spiral, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/678xt11582481163.jpg'
    },
    {
        drink_name: 'Gin Daisy',
        drink_type: 'Gin',
        instruction: 'In a shaker half-filled with ice cubes, combine the gin, lemon juice, sugar, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the cherry and the orange slice. Use 2 oz Gin, 1 oz Lemon juice, 1/2 tsp superfine sugar, 1/2 tsp Grenadine, 1 Maraschino cherry, 1 Orange slice.',
        ingredient: 'Gin, Lemon juice, Sugar, Grenadine, Maraschino cherry, Orange',
        image: 'https://www.thecocktaildb.com/images/media/drink/z6e22f1582581155.jpg'
    },
    {
        drink_name: 'Gin Fizz',
        drink_type: 'Gin',
        instruction: 'Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water. Use 2 oz Gin, juice of half a lemon, 1 tsp powdered sugar, Carbonated water.',
        ingredient: 'Gin, Lemon, Powdered sugar, Carbonated water',
        image: 'https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg'
    },
    {
        drink_name: 'Gin Lemon',
        drink_type: 'Gin',
        instruction: 'For the preparation of the gin lemon you will not need the shaker. Fill the tumbler with ice, pour the gin and lemonade over it. Gently mix and decorate with a slice of lemon. Those who prefer can also add a few mint leaves. Your gin lemon is ready to be served. Use  60 ml Gin, 80 ml Lemon Juice, 1 slice Lemon Peel, ice cubes.',
        ingredient: 'Gin, Lemon Juice, Lemon Peel, Ice',
        image: 'https://www.thecocktaildb.com/images/media/drink/yhzvk91643821739.jpg'
    },
    {
        drink_name: 'Gin Rickey',
        drink_type: 'Gin',
        instruction: 'Half-fill a tall glass with ice. Mix the gin and Grenadine together and pour over the ice. Add the lime or lemon juice and top off with soda water. Decorate the glass with lime and/or lemon slices. Use 2 oz Gin, 1 tsp Grenadine, juice of 1/2 lemon, Soda Water, Lime.',
        ingredient: 'Gin, Grenadine, lemon, Soda Water, Lime',
        image: 'https://www.thecocktaildb.com/images/media/drink/s00d6f1504883945.jpg'
    },
    {
        drink_name: 'Gin Sling',
        drink_type: 'Gin',
        instruction: 'Dissolve powdered sugar in mixture of water and juice of lemon. Add gin. Pour into an old-fashioned glass over ice cubes and stir. Add the twist of orange peel and serve. Use 2 oz Gin, juice of 1/2 Lemon, 1 tsp powdered sugar, 1 tsp water, twist of orange peel.',
        ingredient: 'Gin, Lemon, Powdered sugar, Water, orange peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/8cl9sm1582581761.jpg'
    }
];
const seedGinDrinks = () => Drink.bulkCreate(ginDrinksData);

module.exports = seedGinDrinks;