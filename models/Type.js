// Claire: 3/8 Brought back Type. Would like to talk to group about this.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Type extends Model { }

Type.init(
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

module.exports = Type;