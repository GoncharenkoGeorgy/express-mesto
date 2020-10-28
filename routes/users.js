const router = require('express').Router();
const { getUsers, getUser, createUser, updateProfile, updateAvatar } =require('../controllers/users')

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUser);
router.patch('/:id', updateProfile);
router.patch('/:id/avatar', updateAvatar);

module.exports = router;
