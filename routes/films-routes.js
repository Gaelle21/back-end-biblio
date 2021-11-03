const express = require("express");
const router = express.Router();
const filmsControlleurs = require('../controleurs/films-controleur');
const {v4: uuidv4} = require('uuid');


//Chemin de la racine : /api/films
router.get('/', filmsControlleurs.getFilms);
router.get('/:filmId', filmsControlleurs.getFilmsById);
router.post("/", filmsControlleurs.postFilm);
router.patch("/:filmId", filmsControlleurs.patchFilm);
router.delete("/:filmId", filmsControlleurs.deleteFilm);

module.exports = router
