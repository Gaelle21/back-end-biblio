const express = require("express");
const router = express.Router();
const musiquesControlleurs = require('../controleurs/musiques-controleur');


//Chemin de la racine : /api/musiques
router.get("/", musiquesControlleurs.getMusiques);
router.get("/:musiqueId", musiquesControlleurs.getMusiqueById);
router.post("/", musiquesControlleurs.postMusique);
router.patch("/:musiqueId", musiquesControlleurs.patchMusique);
router.delete("/:musiqueId", musiquesControlleurs.deleteMusique);

module.exports = router;
