const router = require('express').Router();

const cardsRouter = require('./cards.js');
const usersRouter = require('./users.js');
const errorRouter = require('./error.js');

router.use('/', cardsRouter);
router.use('/', usersRouter);
router.use('/', errorRouter);

module.exports = router;
