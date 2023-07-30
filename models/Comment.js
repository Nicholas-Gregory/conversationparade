const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

/*
Text content that is posted to and available on Conversation pages, but not directly a part of that Conversation.
*/
class Comment extends Model {}

Comment.init({
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