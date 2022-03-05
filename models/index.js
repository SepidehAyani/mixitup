const User = require('./Users');
const Drink = require('./Drinks');
const Ingredient = require('./Ingredient');
const Instruction = require('./Instruction')

// User has one:many relationship to Drink
User.hasMany(Drink, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});
// Drink has many:one relationship to User
Drink.belongsTo(User, {
    foreignKey: 'user_id'
});
// User has one:many relationship to ingredient
User.hasMany(Ingredient, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
// Ingredient has many:one relationship to user
Ingredient.belongsTo(User, {
    foreignKey: 'user_id',
});
// Drink has many:one relationship to ingredient
Drink.hasMany(Ingredient, {
    foreignKey: 'drink_id',
    onDelete: 'CASCADE',
})
// Ingredient has many:one relationship to drink
Ingredient.belongsTo(Drink, {
    foreignKey: 'drink_id',
});
// Instruction belongs to one drink
Instruction.belongsTo(Drink, {
    foreignKey: 'drink_id',
});

module.exports = { User, Drink, Ingredient, Instruction };