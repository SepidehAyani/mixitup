const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Drink extends Model { }

Drink.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        drink_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        drink_type: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        ingredient: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        instruction: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // recently added, not sure if it is needed but wanted to try to see if that would resolve seeds issue.
        image: {
            type: DataTypes.BLOB,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'drink',
    }
);

module.exports = Drink;