const express = require('express');
const app = express();
app.use(express.json());

const musiquesRoutes = require('./routes/musiques-routes');
const filmsRoutes = require('./routes/films-routes');
const jvRoutes = require('./routes/jeuxvideos-routes');

app.use('/api/musiques', musiquesRoutes);
app.use('/api/films', filmsRoutes);
app.use('/api/jv', jvRoutes);

app.use((error, req, res, next) => {
    res.status(error.code || 500);
    res.json({message:error.message || 'Une erreur non gérée est surveneue'});
});

app.listen(5000);