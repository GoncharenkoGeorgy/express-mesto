const express = require('express');

const { PORT = 3000 } = process.env;
const path = require('path');

const app = express();
const cards = require('./routes/cards.js');
const users = require('./routes/users.js');
const errors = require('./routes/error.js');

app.use(express.static(path.join(__dirname, 'public'))); // теперь клиент имеет доступ только к публичным файлам
app.use('/', cards);
app.use('/', users);
app.use('/', errors);

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
