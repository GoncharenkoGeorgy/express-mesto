const router = require('express').Router();
const { getCards, createCard, deleteCard } = require('../controllers/cards')

router.get('/cards', getCards);
router.post('/cards', createCard);
router.delete('/:id', deleteCard);

module.exports = router;
