const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rating extends Model {}

Rating.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				max: 5,
				min: 1
			}
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "user",
				key: "id"
			}
		},
		drink_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "drink",
				key: "id"
			}
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "rating"
	}
);

module.exports = Rating;