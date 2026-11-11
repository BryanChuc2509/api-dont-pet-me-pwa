const express = require('express');
const morgan = require('morgan');
const path = require('path');
const historiaRouter = require('./routes/historia');
const personajesRouter = require('./routes/personajes');
const nivelesRouter = require('./routes/niveles');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/imagenes', express.static(path.join(__dirname, '..', 'imagenes')));

app.use('/api/historia', historiaRouter);
app.use('/api/personajes', personajesRouter);
app.use('/api/niveles', nivelesRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint no encontrado' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`API ejecutándose en http://localhost:${port}`);
  });
}

module.exports = app;
