const app = require('./app');

//Configuração para o arquivo .env
require('dotenv').config();


const PORT = process.env.PORT || 3302;

app.listen(PORT, () => console.log('Server running or port 3302'));

