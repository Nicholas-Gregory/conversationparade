const router = require('express').Router();

const conversation = require('./conversation');
const comment = require('./comment');
const remark = require('./remark');

router.use('/comments', comment);
router.use('./conversations', conversation);
router.use('/remarks', remark);

module.exports = router;