const { Drink } = require('../models');

const ginDrinksData = [

    {
        name: '3-Mile Long Island Iced Tea',
        instruction: 'Fill 14oz glass with ice and alcohol. Fill 2/3 glass with cola and remainder with sweet & sour. Top with dash of bitters and lemon wedge. Use 1/2 oz Gin, 1/2 oz Light rum, 1/2 oz Tequila, 1/2 oz Triple Sec, 1/2 oz Vodka, 1/2 oz Coca-Cola, 1-2 dashes Sweet and Sour, garnish with Bitters, 1 lemon wedge.',
        ingredient: 'Gin, Light rum, Tequila, Triple Sec, Vodka, Coca-Cola, Sweet and Sour, Bitters, Lemon wedge',
        image: 'https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg'
    },
    {
        name: '69 Special',
        instruction: 'Pour 2 oz. gin. Add 4 oz. 7-up. Add Lemon Juice for flavor. If you are weak, top up glass with more 7-Up. Use 2oz dry Gin, 4 oz 7-Up, 0.75 oz lemon juice.',
        ingredient: 'Gin, 7-Up, Lemon juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg'
    },
    {
        name: 'A1',
        instruction: 'Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass. Use 1.75 shot Gin, 1 shot Grand Marnier, 1/4 shot Lemon juice, 1/8 shot Grenadine',
        ingredient: 'Gin, Grand Marnier, Lemon juice, Grenadine',
        image: 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg'
    },
    {
        name: 'Abbey Cocktail',
        instruction: 'Shake all ingredients (except for the cherry) with ice and strain into a cocktail glass. Top with the cherry and serve. Use 1.5 oz Gin, 1 dash orange bitters, juice of 1/4 orange, 1 cherry.',
        ingredient: 'Gin, Orange bitters, Orange, Cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/mr30ob1582479875.jpg'
    },
    {
        name: 'Abbey Martini',
        instruction: 'Put all ingredients into a shaker and mix, then strain contents into a chilled cocktail glass. Use 2 shots Gin, 1 shot Sweet Vermouth, 1 shot orange juice, 3 dashes Angostura Bitters',
        ingredient: 'Gin, Sweet Vermouth, Orange juice, Angostura Bitters.',
        image: 'https://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg'
    },
    {
        name: 'Ace',
        instruction: 'Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass. Use 2 shots Gin, 1/2 shot Grenadine, 1/2 shot heavy cream, 1/2 shot milk, 1/2 fresh egg white.',
        ingredient: 'Gin, Grenadine, Heavy cream, Milk, Egg White',
        image: 'https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg'
    },
    {
        name: 'Adam & Eve',
        instruction: 'Shake together all the ingredients and strain into a cold glass. Use 1 shot Gin, 1 shot Cognac, 1 shot Creme de Cassis, 1/8 shot fresh lemon juice.',
        ingredient: 'Gin, Cognac, Creme de Cassis, lemon juice',
        image: 'https://www.thecocktaildb.com/images/media/drink/vfeumw1504819077.jpg'
    },
    {
        name: 'Addison',
        instruction: 'Shake together all the ingredients and strain into a cold glass. Use 1.5 shot Gin, 1.5 shot Vermouth.',
        ingredient: 'Gin, Vermouth',
        image: 'https://www.thecocktaildb.com/images/media/drink/yzva7x1504820300.jpg'
    },
    {
        name: 'Alaska Cocktail',
        instruction: 'Stir all ingredients with ice, strain contents into a cocktail glass. Drop in a twist of lemon and serve. Use 2 dashes orange bitters, 1.5 oz Gin, 0.75 oz Yellow Chartreuse, twist of lemon peel',
        ingredient: 'Orange bitters, Gin, Yellow Chartreuse, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/wsyryt1483387720.jpg'
    },
    {
        name: 'Alexander',
        instruction: 'Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve. Use 1/2 oz Gin, 1/2 oz white Creme de Cacao, 2 oz light cream.',
        ingredient: 'Gin, Creme de Cacao, light cream',
        image: 'https://www.thecocktaildb.com/images/media/drink/0clus51606772388.jpg'
    },
    {
        name: 'Allies Cocktail',
        instruction: 'Stir all ingredients with ice, strain contents into a cocktail glass, and serve. Use 1 oz Dry Vermouth, 1 oz Gin, and 1/2 tsp Kummel.',
        ingredient: 'Dry Vermouth, Gin, Kummel.',
        image: 'https://www.thecocktaildb.com/images/media/drink/qvprvp1483388104.jpg'
    },
    {
        name: 'Angel Face',
        instruction: 'Shake all ingredients with ice and strain contents into a cocktail glass. Use 1/5 oz Apricot brandy, 1/5 oz Apple brandy, 1 oz Gin.',
        ingredient: 'Apricot brandy, Apple brandy, Gin',
        image: 'https://www.thecocktaildb.com/images/media/drink/vaukir1606772580.jpg'
    },
    {
        name: 'Archbishop',
        instruction: 'In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well. Use 2 oz Gin, 1 oz Green Ginger Wine, 1 tsp Benedictine, 1 Lime',
        ingredient: 'Gin, Wine, Benedictine, Lime',
        image: 'https://www.thecocktaildb.com/images/media/drink/4g6xds1582579703.jpg'
    },
    {
        name: 'Army special',
        instruction: 'Pour Vodka, Gin and lime cordial into glass, and top up with crushed ice. Wait for ice to melt slightly and sip without a straw. Use 30 ml Vodka, 30 ml Gin, 45 ml Lime juice cordial, 1/2 glass crushed ice.',
        ingredient: 'Vodka, Gin, Lime juice cordial, ice',
        image: 'https://www.thecocktaildb.com/images/media/drink/55muhh1493068062.jpg'
    },
    {
        name: 'Arthur Tompkins',
        instruction: 'In a shaker half-filled with ice cubes, combine the gin, Grand Marnier, and lemon juice. Shake well. Strain into a sour glass and garnish with the lemon twist. Use 2 oz Gin, 1/2 oz Grand Marnier, 2 tsp Lemon juice, 1 twist of Lemon peel.',
        ingredient: 'Gin, Grand Marnier, Lemon juice, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/7onfhz1493067921.jpg'
    },
    {
        name: 'Artillery',
        instruction: 'Stir all ingredients with ice, strain into a cocktail glass, and serve. Use 1.5 tsp Sweet Vermouth, 1.5 oz Gin, 2 dashes of Bitters.',
        ingredient: 'Sweet Vermouth, Gin, Bitters',
        image: 'https://www.thecocktaildb.com/images/media/drink/g1vnbe1493067747.jpg'
    },
    {
        name: 'AT&T',
        instruction: 'Pour Vodka and Gin over ice, add Tonic and Stir. Use 1 oz Absolut Vodka, 1 oz Gin, 4 oz Tonic water',
        ingredient: 'Absolut Vodka, Gin, Tonic water',
        image: 'https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg'
    },
    {
        name: 'Aviation',
        instruction: 'Add all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass. Garnish with a cherry. Use 45 ml Gin, 15 ml lemon juice, 15 ml maraschino liqueur.',
        ingredient: 'Gin, lemon juice, maraschino liqueur',
        image: 'https://www.thecocktaildb.com/images/media/drink/trbplb1606855233.jpg'
    },
    {
        name: 'Bermuda Highball',
        instruction: 'Pour brandy, gin, and dry vermouth into a highball glass over ice cubes. Fill with carbonated water and stir. Add the twist of lemon and serve. (Ginger ale may be substituted for carbonated water, if preferred.) Use 0.75 oz Brandy, 0.75 oz Gin, 0.75 oz Dry Vermouth, carbonated water, one twist of lemon peel.',
        ingredient: 'Brandy, Gin, Dry Vermouth, Carbonated water, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/qrvtww1441206528.jpg'
    },
    {
        name: 'Bijou',
        instruction: 'Stir in mixing glass with ice and strain. Use 1 dash orange bitters, 1 oz Green Chartreuse, 1 oz Gin, 1 oz Sweet Vermouth.',
        ingredient: 'Orange bitters, Green Chartreuse, Gin, Sweet Vermouth',
        image: 'https://www.thecocktaildb.com/images/media/drink/rysb3r1513706985.jpg'
    },
    {
        name: 'Bluebird',
        instruction: 'In a mixing glass half-filled with crushed ice, combine the gin, triple sec, Curacao, and bitters. Stir well. Strain into a cocktail glass and garnish with the lemon twist and the cherry. Use 1.5 oz Gin, 0.5 oz Triple sec, 0.5 oz Blue Curacao, 2 dashes of bitters, 1 Maraschino cherry, one twist of Lemon peel.',
        ingredient: 'Gin, Triple sec, Blue Curacao, Bitters, Maraschino cherry, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/5jhyd01582579843.jpg'
    },
    {
        name: 'Bombay Cassis',
        instruction: 'Add the Bombay Sapphire, Crème de Cassis and lime juice to a balloon glass and swirl well to mix. Fill the glass with good quality cubed ice. Top up with chilled and freshly opened Fever-Tree Ginger Beer. Gently stir to combine, top with a gently squeezed lime wedge and finish with a fresh ginger slice. Use 50 ml Gin, 20 ml Creme de Cassis, 15 ml Fresh Lime Juice, 75 ml Ginger beer, 1 Lime, 1 long strip of ginger.',
        ingredient: 'Gin, Creme de Cassis, Fresh Lime Juice, Ginger beer, Lime, Ginger',
        image: 'https://www.thecocktaildb.com/images/media/drink/h1e0e51510136907.jpg'
    },
    {
        name: 'Boomerang',
        instruction: 'In a mixing glass half-filled with ice cubes, combine the gin, vermouth, bitters, and maraschino liqueur. Stir well. Strain into a cocktail glass and garnish with the cherry. Use 2 oz Gin, 1/2 oz Dry Vermouth, 2 dashes Bitters, 1/2 tsp Marachino liqueur, 1 Maraschino cherry.',
        ingredient: 'Gin, Dry Vermouth, Bitters, Marachino liqueur, Maraschino cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/3m6yz81504389551.jpg'
    },
    {
        name: 'Boxcar',
        instruction: 'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass. 1.5 oz Gin, 1 oz Triple sec, 1 tsp Lemon juice, 1/2 tsp Grenadine, 1 egg white.',
        ingredient: 'Gin, Triple sec, Lemon juice, Grenadine, Egg white',
        image: 'https://www.thecocktaildb.com/images/media/drink/pwgtpa1504366376.jpg'
    },
    {
        name: 'Bramble',
        instruction: 'Fill glass with crushed ice. Build gin, lemon juice and simple syrup over. Stir, and then pour blackberry liqueur over in a circular fashion to create marbling effect. Garnish with two blackberries and lemon slice. Use 40 ml Gin, 15 ml lemon juice, 10 ml Sugar syrup, 15 ml Creme de Mure.',
        ingredient: 'Gin, lemon juice, Sugar syrup, Creme de Mure',
        image: 'https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg'
    },
    {
        name: 'Casino',
        instruction: 'Pour all ingredients into shaker with ice cubes. Shake well. Strain into chilled cocktail glass. Garnish with a lemon twist and a maraschino cherry. Serve without a straw. Use 2 oz Gin, 1/4 tsp Maraschino liqueur, 1/4 tsp Lemon juice, 2 dashes orange bitters, 1 cherry.',
        ingredient: 'Gin, Maraschino liqueur, Lemon juice, Orange bitters, Cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/1mvjxg1504348579.jpg'
    },
    {
        name: 'Casino Royale',
        instruction: 'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass. Use 2 oz Gin, 1/2 oz Lemon juice, 1 tsp Maraschino liqueur, 1 dash orange bitters, 1 egg yolk.',
        ingredient: 'Gin, Lemon juice, Maraschino liqueur, Orange bitters, Egg yolk',
        image: 'https://www.thecocktaildb.com/images/media/drink/3qpv121504366699.jpg'
    },
    {
        name: 'Cherry Electric Lemonade',
        instruction: 'Stir vigorously and then pour over a large cup of ice. Drink with a straw and stir occasionally. Use 1 oz Gin, 1 oz Tequila, 1 oz Vodka, 1 oz White rum, 1 oz Triple Sec, 1 oz Cherry Grenadine, 1 oz Sweet and sour, 3 oz Club soda.',
        ingredient: 'Gin, Tequila, Vodka, White rum, Triple Sec, Cherry Grenadine, Sweet and sour, Club soda',
        image: 'https://www.thecocktaildb.com/images/media/drink/tquyyt1451299548.jpg'
    },
    {
        name: 'Clover Club',
        instruction: 'Dry shake ingredients to emulsify, add ice, shake and served straight up. Use 1.5 oz Gin, 2 tsp Grenadine, juice of half a Lemon, 1 egg white.',
        ingredient: 'Gin, Grenadine, Lemon, Egg white',
        image: 'https://www.thecocktaildb.com/images/media/drink/t0aja61504348715.jpg'
    },
    {
        name: 'Corpse Reviver',
        instruction: 'Shake, strain, straight up, cocktail glass rinsed with absinthe. Use 3/4 oz Gin, 3/4 oz Triple sec, 3/4 oz Lillet Blanc, 3/4 oz Lemon juice, 1 dash Absinthe.',
        ingredient: 'Gin, Triple sec, Lillet Blanc, Lemon juice, Absinthe',
        image: 'https://www.thecocktaildb.com/images/media/drink/gifgao1513704334.jpg'
    },
    {
        name: 'Derby',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/52weey1606772672.jpg'
    },
    {
        name: 'Dragonfly',
        instruction: 'In a highball glass almost filled with ice cubes, combine the gin and ginger ale. Stir well. Garnish with the lime wedge. Use 1.5 oz in, 4 oz Ginger ale, 1 Lime wedge.',
        ingredient: 'Gin, Ginger ale, Lime',
        image: 'https://www.thecocktaildb.com/images/media/drink/uc63bh1582483589.jpg'
    },
    {
        name: 'Dry Martini',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg'
    },
    {
        name: 'Dubonnet Cocktail',
        instruction: 'Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with a sprig of fresh mint in the drink. Use 60 ml Gin, 2 dashes of Peach Bitters, 2 fresh mint leaves.',
        ingredient: 'Gin, Peach Bitters, Mint',
        image: 'https://www.thecocktaildb.com/images/media/drink/pfz3hz1582483111.jpg'
    },
    {
        name: 'English Highball',
        instruction: 'Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive. Use 1 2/3 oz Gin, 1/3 oz Dry Vermouth, 1 olive.',
        ingredient: 'Gin, Dry Vermouth, Olive',
        image: 'https://www.thecocktaildb.com/images/media/drink/dhvr7d1504519752.jpg'
    },
    {
        name: 'English Rose Cocktail',
        instruction: 'Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve. Use 1.5 oz Dubonnet Rouge, 3/4 oz Gin, 1 dash Bitters, 1 twist of Lemon peel.',
        ingredient: 'Dubonnet Rouge, Gin, Bitters, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/yxwrpp1441208697.jpg'
    },
    {
        name: 'Flying Dutchman',
        instruction: 'Pour brandy, gin, and sweet vermouth into a highball glass over ice cubes. Fill with carbonated water. Add the twist of lemon peel, stir, and serve. (Ginger ale may be substituted for carbonated water, if preferred.) Use 3/4 oz Brandy, 3/4 oz Gin, 3/4 oz Sweet Vermouth, Carbonated water, Lemon peel',
        ingredient: 'Brandy, Gin, Sweet Vermouth, Carbonated water, Lemon peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/mwko4q1582482903.jpg'
    },
    {
        name: 'French 75',
        instruction: 'Rub rim of cocktail glass with lemon juice and dip rim of glass in powdered sugar. Shake all ingredients (except cherry) with ice and strain into sugar-rimmed glass. Top with the cherry and serve. Use 3/4 oz Apricot brandy, 1/5 oz Gin, 3/4 oz Dry Vermouth, 1 tsp Grenadine, 1/4 tsp Lemon juice, 1 cherry.',
        ingredient: 'Apricot brandy, Gin, Dry Vermouth, Grenadine, Lemon juice, Cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/hrxfbl1606773109.jpg'
    },
    {
        name: 'French Negroni',
        instruction: 'Add ice to a shaker and pour in all ingredients. Using a bar spoon, stir 40 to 45 revolutions or until thoroughly chilled. Strain into a martini glass or over ice into a rocks glass. Garnish with orange twist. Use 1 oz Gin, 1 oz Lillet, 1 oz  Sweet Vermouth, 1 Orange Peel.',
        ingredient: 'Gin, Lillet, Sweet Vermouth, Orange Peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/x8lhp41513703167.jpg'
    },
    {
        name: 'Garibaldi Negroni',
        instruction: 'Mix together in a shaker and garnish with a simple orange slice. Fill your vitamin C and cocktail fix at the same time! Use 30 ml Gin, 30 ml Campari, 90 ml Orange Juice, garnish with Orange Peel.',
        ingredient: 'Gin, Campari, Orange Juice, Orange Peel',
        image: 'https://www.thecocktaildb.com/images/media/drink/kb4bjg1604179771.jpg'
    },
    {
        name: 'Gentlemans Club',
        instruction: 'In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well. Use 1/5 oz Gin, 1 oz Brandy, 1 oz Sweet Vermouth, 1 oz Club soda',
        ingredient: 'Gin, Brandy, Sweet Vermouth, Club soda',
        image: 'https://www.thecocktaildb.com/images/media/drink/k2r7wv1582481454.jpg'
    },
    {
        name: 'Gimlet',
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
        name: 'Gin Basil Smash',
        instruction: 'Muddle Basil leaves (~ 10) with Suggar Syrup in a shaker. Add Gin an Lemon Juice. Filter and serve in a tumbler with ice. Use  60 ml Gin, 20 ml Lemon Juice, 20 ml Sugar Syrup, whole Basil leaf.',
        ingredient: 'Gin, Lemon Juice, Sugar Syrup, Basil',
        image: 'https://www.thecocktaildb.com/images/media/drink/jqh2141572807327.jpg'
    },
    {
        name: 'Gin Cooler',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/678xt11582481163.jpg'
    },
    {
        name: 'Gin Daisy',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/z6e22f1582581155.jpg'
    },
    {
        name: 'Gin Fizz',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg'
    },
    {
        name: 'Gin Lemon',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/yhzvk91643821739.jpg'
    },
    {
        name: 'Gin Rickey',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/s00d6f1504883945.jpg'
    },
    {
        name: 'Gin Sling',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/8cl9sm1582581761.jpg'
    },
    {
        name: 'Gin Smash',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/iprva61606768774.jpg'
    },
    {
        name: 'Gin Sour',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/noxp7e1606769224.jpg'
    },
    {
        name: 'Gin Squirt',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/xrbhz61504883702.jpg'
    },
    {
        name: 'Gin Swizzle',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/sybce31504884026.jpg'
    },
    {
        name: 'Gin Toddy',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/jxstwf1582582101.jpg'
    },
    {
        name: 'Gin Tonic',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/qcgz0t1643821443.jpg'
    },
    {
        name: 'Grass Skirt',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/qyvprp1473891585.jpg'
    },
    {
        name: 'Hawaiian Cocktail',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/ujoh9x1504882987.jpg'
    },
    {
        name: 'Imperial Cocktail',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/bcsj2e1487603625.jpg'
    },
    {
        name: 'Jewel Of The Nile',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/hx4nrb1504884947.jpg'
    },
    {
        name: 'Jitterbug',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/wwqvrq1441245318.jpg'
    },
    {
        name: 'Lady Love Fizz',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/20d63k1504885263.jpg'
    },
    {
        name: 'London Town',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/rpsrqv1468923507.jpg'
    },
    {
        name: 'Lone Tree Cocktail',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/tsxpty1468923417.jpg'
    },
    {
        name: 'Lone Tree Cooler',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/wsyqry1479298485.jpg'
    },
    {
        name: 'Long Island Tea',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg'
    },
    {
        name: 'Martinez 2',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/fs6kiq1513708455.jpg'
    },
    {
        name: 'Martinez Cocktail',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/wwxwvr1439906452.jpg'
    },
    {
        name: 'Martini',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg'
    },
    {
        name: 'Monkey Gland',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/94psp81504350690.jpg'
    },
    {
        name: 'Mountain Bramble',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/stwiva1619704025.jpg'
    },
    {
        name: 'Munich Mule',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/rj55pl1582476101.jpg'
    },
    {
        name: 'National Aquarium',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/dlw0om1503565021.jpg'
    },
    {
        name: 'Negroni',
        instruction: '',
        ingredient: '',
        image: 'https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg'
    },
    {
        name: 'Orange Oasis',
        instruction: '',
        ingredient: '',
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