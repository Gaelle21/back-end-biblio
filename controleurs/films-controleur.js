const {v4: uuidv4} = require('uuid');

let films = [
    {
        id: "1",
        auteur: "Tomonori Sudō",
        studio : "ufotable",
        genre : "Action, Dark Fantasy, Drame, ...",
        annee: 2017,
        titre: "Heaven's feel I",
        imageUrl: "http://image.tmdb.org/t/p/original/r9NfiffSIX6AyEJySxoCUKGBtTa.jpg"
    },
    {
        id : "2",
        auteur: "Tomonori Sudō",
        studio : "ufotable",
        genre : "Action, Dark Fantasy, Drame, ...",
        annee: 2019,
        titre: "Heaven's feel II",
        imageUrl: "https://www.manga-news.com/public/2019/news_08/fate-stay-knight-heaven-feel-lost-butterfly-anime-wakanim.jpg"
    },
    {
        id : "3",
        auteur: "Tomonori Sudō",
        studio : "ufotable",
        genre : "Action, Dark Fantasy, Drame, ...",
        annee: 2020,
        titre: "Heaven's feel III",
        imageUrl: "https://media.senscritique.com/media/000019579098/source_big/Fate_stay_night_Movie_Heaven_s_Feel_III_Spring_Song.jpg"
    }
    
];

const getFilms = (req, res, next) => {
    console.log('Is OK ! Script films running...');
    res.json(films);
};

const getFilmsById =(req, res, next) => {
    const movieId = req.params.filmId;
    const film = films.find( f => {
        return f.id === movieId;
    });

    if(!film){
        return res.status(404).json({message: 'Not found'});
    };

    res.json(film);
};

const postFilm =  (req, res, next) => {
    const {auteur, studio, genre, annee, titre, imageUrl}  = req.body;
    const createdFilm = {
        id: uuidv4(),
        auteur: auteur,
        studio,
        genre,
        annee,
        titre,
        imageUrl
    };
    films.push(createdFilm);
    res.status(201).json({film: createdFilm});
};

const patchFilm =   (req, res, next) => {
    const {id, auteur, studio, genre, annee, titre, imageUrl} = req.body;
    const filmId = req.params.filmId;
  
    const updatedFilm = {...films.find((f)  => {
      return f.id === filmId;
    })
    };
  
    const filmIndex = films.findIndex(f => f.id === filmId);
    updatedFilm.auteur = auteur;
    updatedFilm.studio = studio;
    updatedFilm.genre = genre;
    updatedFilm.annee = annee;
    updatedFilm.titre = titre;
    updatedFilm.imageUrl = imageUrl;
  
    films[filmIndex] = updatedFilm;
  
    res.status(200).json({film:updatedFilm});
  };

  const deleteFilm = (req, res, next) =>{
    const filmId = req.params.filmId;
    films = films.filter(f => f.id !== filmId);
    res.status(200).json({message: "Film supprimé"});
  };

exports.getFilms = getFilms;
exports.getFilmsById = getFilmsById;
exports.postFilm = postFilm;
exports.patchFilm = patchFilm;
exports.deleteFilm = deleteFilm;