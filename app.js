const express = require('express');

const { PORT = 3000 } = process.env;
const path = require('path');

const app = express();
const routes = require('./routes/index.js');

app.use(express.static(path.join(__dirname, 'public'))); // теперь клиент имеет доступ только к публичным файлам
app.use('/', routes);

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
