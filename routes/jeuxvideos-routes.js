const express = require("express");
const router = express.Router();
const jvControlleurs = require('../controleurs/jv-controleur');



//Tableau de valeurs, contient une liste de jeux vidéos

//Chemin de la racine : /api/jv
router.get('/', jvControlleurs.getJeux);
router.get('/:jeuVideoId', jvControlleurs.getJeuxById);
router.post("/", jvControlleurs.postJeu);
router.patch("/:jeuVideoId", jvControlleurs.patchJeu);
router.delete("/:jeuVideoId", jvControlleurs.deleteJeu);

module.exports = router