const {v4: uuidv4} = require('uuid');
const { deleteFilm } = require('./films-controleur');

let jeux = [
    {
        id: "1",
        auteur: "Capcom",
        annee: 2018,
        titre: "Monster Hunter World",
        imageUrl: "https://s2.gaming-cdn.com/images/products/2155/orig/jeu-steam-monster-hunter-world-cover.jpg"
    },
    {
        id : "2",
        auteur: "Edmund McMillen",
        annee: 2014,
        titre: "The binding of Isaac - Rebirth",
        imageUrl: "https://store-images.s-microsoft.com/image/apps.58856.69039762475408619.1f9f3938-799b-4ad8-a607-676e85baba27.95ed1dc8-4ddf-43fb-8a87-f54c81f96879?w=180&h=270&q=60"
    },
    {
        id : "3",
        auteur: "TYPE-MOON",
        annee: 2004,
        titre: "Fate/Stay Night",
        imageUrl: "https://www.nautiljon.com/images/jeuxvideo/00/51/mini/fate_stay_night_asie_215.jpg?11595619566"
    }
    
];

const getJeux = (req, res, next) => {
    console.log('Is OK ! Script jeux vidéos running...');
    res.json(jeux);
};

const getJeuxById =  (req, res, next) => {
    const jvId = req.params.jeuVideoId;
    const jeuVideo = jeux.find( j => {
        return j.id === jvId;
    });

    if(!jeuVideo){
        return res.status(404).json({message: 'Not found'});
    };

    res.json(jeuVideo);
};

const postJeu =  (req, res, next) => {
    const {auteur, annee, titre, imageUrl}  = req.body;
    const createdJeu = {
        id: uuidv4(),
        auteur: auteur,
        annee,
        titre,
        imageUrl
    };
    jeux.push(createdJeu);
    res.status(201).json({jeu: createdJeu});
};

const patchJeu =  (req, res, next) => {
    const {id, auteur, annee, titre, imageUrl} = req.body;
    const jeuVideoId = req.params.jeuVideoId;
  
    const updatedJeu = {...jeux.find((j)  => {
      return j.id === jeuVideoId;
    })
    };
  
    const jeuIndex = jeux.findIndex(j => j.id === jeuVideoId);
    updatedJeu.auteur = auteur;
    updatedJeu.annee = annee;
    updatedJeu.titre = titre;
    updatedJeu.imageUrl = imageUrl;
  
    jeux[jeuIndex] = updatedJeu;
  
    res.status(200).json({jeu:updatedJeu});
  };
  
  const deleteJeu = (req, res, next) =>{
    const jeuVideoId = req.params.jeuVideoId;
    jeux = jeux.filter(j => j.id !== jeuVideoId);
    res.status(200).json({message: "Jeu supprimé"});
  };

exports.getJeux = getJeux;
exports.getJeuxById = getJeuxById;
exports.postJeu = postJeu;
exports.patchJeu = patchJeu;
exports.deleteJeu = deleteJeu;
