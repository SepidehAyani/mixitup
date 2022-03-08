const User = require('../models/User');
const Drink = require('../models/Drink');
const Type = require('../models/Type');

// User has one:many relationship to Drink
User.hasMany(Drink, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Drink has many:one relationship to User
Drink.belongsTo(User, {
    foreignKey: 'user_id'
});

// Drink has one:one relationship to User
Drink.hasOne(Type, {
    foreignKey: 'type_id'
});

module.exports = { User, Drink, Type };