const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Remark extends Model {}

Remark.init({
    id: {
        type: DataTypes.STRING,
        defaultValue: uuidv4(),
        allowNull: false
    }
}, {
    sequelize, 
    underscored: true,
    modelName: 'conversation'
});