const User = require('./Users');
const Drink = require('./Drinks');

// User has one:many relationship to Drink
User.hasMany(Drink, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Drink has many:one relationship to User
Drink.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Drink };