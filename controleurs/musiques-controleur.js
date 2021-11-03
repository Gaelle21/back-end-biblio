const {v4: uuidv4} = require('uuid');
const Musique = require("../models/musique");

let MUSIQUES = [
    {
      id: "1",
      auteur: "Daft Punk",
      annee: 2013,
      titre: "Get lucky",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"
    },
    {
      id: "2",
      auteur: "David Guetta ft Sia",
      annee: 2011,
      titre: "Titanium",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/51cQ8TfyqJL._SX342_QL70_ML2_.jpg"
    },
    {
      id: "3",
      auteur: "Shaka Ponk",
      annee: 2019,
      titre: "Smells like teen spirits",
      imageUrl: "https://i.ytimg.com/vi/MEecsZXQjCs/maxresdefault.jpg"
    },
    {
      id: "4",
      auteur: "Imagine Dragon",
      annee: 2018,
      titre: "Natural",
      imageUrl:
        "https://i.pinimg.com/originals/9f/1e/58/9f1e58187a71ef80a06be9da1261ccfd.jpg"
    },
    {
      id: "5",
      auteur: "Alan Walker",
      annee: 2015,
      titre: "Faded",
      imageUrl:
        "https://img.discogs.com/qGGkesXYWTmP_6rN5z0OJaX0OYM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8029446-1453770376-1679.jpeg.jpg"
    },
    {
      id: "6",
      auteur: "Aimer",
      annee: 2017,
      titre: "I beg you",
      imageUrl:
        "https://static.fnac-static.com/multimedia/Images/FR/NR/5a/bb/a3/10730330/1540-1/tsp20190523163143/I-Beg-You-Inclus-DVD.jpg"
    },
  ];

  const getMusiques = async(req, res, next) =>{
    let musiques
    try{
      musiques = await Musique.find();
    } catch(err){
      console.log(err);
      res.status(404).json({message:"Erreur traitement"});
    }
      res.json({musiques});
  };

  const getMusiqueById = (req, res, next) => {
    const musId = req.params.musiqueId;
    const musique = MUSIQUES.find((m) => {
      return m.id === musId;
    });
  
    if (!musique) {
      return res.status(404).json({ message: "Not found" });
    }
  
    res.json(musique);
  };

  const postMusique =  (req, res, next) => {
    const {auteur, annee, titre, imageUrl}  = req.body;
    const createdMusique = {
        id: uuidv4(),
        auteur: auteur,
        annee,
        titre,
        imageUrl
    };
    MUSIQUES.push(createdMusique);
    res.status(201).json({musique: createdMusique});
};

const patchMusique =  (req, res, next) => {
    const {id, auteur, annee, titre, imageUrl} = req.body;
    const musiqueId = req.params.musiqueId;
  
    const updatedMusique = {...MUSIQUES.find((m)  => {
      return m.id === musiqueId;
    })
    };
  
    const musiqueIndex = MUSIQUES.findIndex(m => m.id === musiqueId);
    updatedMusique.auteur = auteur;
    updatedMusique.annee = annee;
    updatedMusique.titre = titre;
    updatedMusique.imageUrl = imageUrl;
  
    MUSIQUES[musiqueIndex] = updatedMusique;
  
    res.status(200).json({musique:updatedMusique});
  };

  const deleteMusique = (req, res, next) =>{
    const musiqueId = req.params.musiqueId;
    MUSIQUES = MUSIQUES.filter(m => m.id !== musiqueId);
    res.status(200).json({message: "Musique supprimée"});
  };

  exports.getMusiques = getMusiques;
  exports.getMusiqueById = getMusiqueById;
  exports.postMusique = postMusique;
  exports.patchMusique = patchMusique;
  exports.deleteMusique = deleteMusique;