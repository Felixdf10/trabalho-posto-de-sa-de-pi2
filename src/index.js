import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import apiRoutes from './routes.js';

// Define __dirname manualmente (porque estamos usando ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.static('public'));

// Rota para a raiz '/', serve o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Usa todas as rotas definidas no arquivo apiRoutes.js
app.use('/api', apiRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
