const express = require('express');
const mongoose = require('mongoose');
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

const uri = "mongodb+srv://biblioUser:4sOwO3zZpEfUI2YE@cluster0.6jesk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const options = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(uri, options)
.then(() =>{
    app.listen(5000, console.log('Serveur running...'));
})
.catch(err =>{
    console.log(err);
})