
let genres = [
    {id:1, name: 'Horror', rating: 4, movies: 10},
    {id:2, name: 'Comedy', rating: 5, movies: 5},
    {id:3, name: 'Action', rating: 4, movies: 18},
    {id:4, name: 'Romance', rating: 2, movies: 7},
]
function getAll(req, res){
    res.status(200).send(genres);
}

function getById(req, res){
    const id = req.params.id;
    const result = genres.find( genre => genre.id == id);

    if(result){
        res.status(200).send(result);
    }else{
        res.status(404).send('Genre not found');
    }
}
function createGenre(req, res){
    const name = req.body.name;
    if(!name) res.status(400).send('Invalid name');
    const newGenre = {
        id: genres.length +1,
        name: name,
        rating: 0,
        movies: 0
    };
    genres.push(newGenre);
    res.status(201).send(newGenre);
}

function updateGenre(req, res){
    const {name, rating, movies} = req.body;
    const id = req.params.id;
    const genreToUpdateIndex = genres.findIndex(genre => genre.id == id);
    let genreToUpdate = genres[genreToUpdateIndex];

    if(name){
        genreToUpdate.name = name;
    }
    if(rating){
        genreToUpdate.rating = rating;
    }
    if(movies){
        genreToUpdate.movies = movies;
    }
    
    genres[genreToUpdateIndex] = genreToUpdate;
    res.status(200).send(genreToUpdate);
}
function deleteGenre(req, res){
    const id = req.params.id;
    const deleted = genres.find(genre => genre.id == id);
    const newGenres = genres.filter(genre => genre.id !== id);
    genres = newGenres;
    res.status(200).send(deleted);
}


module.exports = {getAll, getById, createGenre, deleteGenre, updateGenre};