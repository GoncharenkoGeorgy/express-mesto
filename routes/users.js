const router = require('express').Router();
const path = require('path');
const readFile = require('../utils/read-file');

const jsonDataPath = path.join(__dirname, '..', 'data', 'users.json');

router.get('/users', (req, res) => {
  readFile(jsonDataPath)
    .then((data) => res.send(data))
    .catch((err) => {
      console.error('err = ', err);
      res.status(500).send({ message: 'Ошибка на сервере' });
    });
});

router.get('/users/:_id', (req, res) => {
  const { _id } = req.params;
  readFile(jsonDataPath)
    .then((data) => {
      const usetToFind = data.find((user) => user._id === _id);
      return usetToFind;
    })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send(user);
    })
    .catch((err) => {
      console.log('err = ', err.message);
      res.status(500).send({ message: 'Ошибка на сервере' });
    });
});

module.exports = router;
