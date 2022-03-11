const User = require('./User');
const Drink = require('./Drink');
const Comment = require('./Comment');
const Vote = require('./Vote');

User.hasMany(Drink, {
    foreignKey: 'user_id'
});

Drink.belongsTo(User, {
    foreignKey: 'user_id',
});

User.belongsToMany(Drink, {
    through: Vote,
    as: 'voted_drink',
    foreignKey: 'user_id'
});

Drink.belongsToMany(User, {
    through: Vote,
    as: 'voted_drink',
    foreignKey: 'drink_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Drink, {
    foreignKey: 'drink_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Drink.hasMany(Vote, {
    foreignKey: 'drink_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Drink, {
    foreignKey: 'drink_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Drink.hasMany(Comment, {
    foreignKey: 'drink_id'
});

module.exports = { User, Drink, Vote, Comment };