const Conversation = require('./Conversation');
const Comment = require('./Comment');
const Remark = require('./Remark');

Conversation.hasMany(Remark);
Remark.belongsTo(Conversation);

Remark.hasMany(Comment);
Comment.belongsTo(Remark);

module.exports = { Conversation, Comment, Remark }