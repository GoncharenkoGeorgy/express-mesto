const User = require('../models/user')

const getUsers = (req, res) => {
  User.find({})
    .then(users => res.status(200).send(users))
    .catch((err) => {
      console.error('err = ', err);
      res.status(500).send({ message: 'Произошла ошибка на сервере' });
    })
};

const getUser = (req, res) => {
  User.findById (req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send(user);
    })
    .catch((err) => {
      if (err.name = 'CastError') {
        res.status(404).send({ message: 'Id введен неправильно' });
      } else {
        res.status(500).send({ message: 'Произошла ошибка на сервере' });
      }
    });
};

const createUser = (req, res) => {
  const { name, about, avatar} = req.body;
  User.create({ name, about, avatar})
    .then(user => res.send({ data: user }))
    // данные не записались, вернём ошибку
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      } else {
        res.status(500).send({ message: 'Произошла ошибка на сервере' })
      }
    });
}

const updateProfile = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.params.id,
    { name, about },
    // Передадим объект опций:
    {
        new: true, // обработчик then получит на вход обновлённую запись
        runValidators: true, // данные будут валидированы перед изменением
        upsert: true // если пользователь не найден, он будет создан
    }
)
    .then(user => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      } else {
        res.status(500).send({ message: 'Произошла ошибка на сервере' })
      }
    });
}

const updateAvatar = (req, res) => {
  const { avatar} = req.body;
  User.findByIdAndUpdate(
    req.params.id,
    { avatar },
    {
        new: true,
        runValidators: true,
        upsert: true
    }
)
  .then(user => res.send({ data: user }))
  .catch((err) => {
    if (err.name === 'ValidationError') {
      res.status(400).send({ message: 'Переданы некорректные данные' });
    } else {
      res.status(500).send({ message: 'Произошла ошибка на сервере' })
    }
  });
};

module.exports = { getUsers, getUser, createUser, updateProfile, updateAvatar };