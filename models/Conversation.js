const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { v4: uuidv4 } = require('uuid');

class Conversation extends Model {}

Conversation.init({
    id: {
        type: DataTypes.STRING,
        defaultValue: uuidv4(),
        allowNull: false
    },
    title: {
        type: DataTypes.STRING
    }
}, {
    sequelize, 
    underscored: true,
    modelName: 'conversation'
});