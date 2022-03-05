const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Types extends Model { }

Types.init(
    {
        type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        type_name: {
            type: DataTypes.STRING,
            allowNull: false,
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

module.exports = Types;