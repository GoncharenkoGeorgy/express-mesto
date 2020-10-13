const router = require('express').Router();
const path = require('path');
const readFile = require('../utils/read-file');

const jsonDataPath = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/cards', (req, res) => {
  readFile(jsonDataPath)
    .then((data) => res.send(data))
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err));
});

module.exports = router;
