const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { truncate } = require('./User');

// Post model
class Drink extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      drink_id: body.drink_id
    }).then(() => {
      return Drink.findOne({
        where: {
          id: body.drink_id
        },
        attributes: [
          'id',
          'name',
          'instruction',
          'ingredient',
          [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE drink.id = vote.drink_id)'), 'vote_count']
        ]
      });
    });
  }
}

Drink.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instruction: {
      type: DataTypes.TEXT,
      allowNull: truncate
    },
    ingredient: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'drink'
  }
);

module.exports = Drink;