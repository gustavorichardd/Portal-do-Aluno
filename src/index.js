const express = require('express');
const routes = require('./routes')

const app = express();

app.use(express.json());
app.use(routes);

// process.env.PORT é para quando formos subir o backend para o heroku.
// Funciona assim: Se for testar o banco local, você executa o npm start e ele vai rodar na porta 3333
// Se você quiser rodar pelo heroku, ele vai pegar o valor de porta que o heroku der.
app.listen(process.env.PORT || 3333);

