
// Se requiere la base de datos
let movies = require('./movies');

    /* 1. Funcionalidad de retornar el listado de todas las películas
    existentes. */
    
let moviesDH = {
    listMovies: () => {
        movies.forEach((e) => {
            console.log(`${e.id}. ${e.title} - ${e.genero}`)
        });
    },
        /* Funcionalidad que muestra el detalle de alguna de las películas registradas en nuestro módulo movies, si la película no es encontrada entonces la función debe devolver null. */
    searchMovie: (Pelicula) => {
         let searchResult = movies.find((movie) => movie.title === Pelicula); 
            if ( searchResult === undefined){
            return null;
        } else {
            let movieDetail = `
            Pelicula: ${searchResult.title}
            rating: ${searchResult.rating}
            awards: ${searchResult.awards} 
            length: ${searchResult.length}
            genero: ${searchResult.genero}
            price: ${searchResult.price}
            `;
            console.log(movieDetail);
            return searchResult;
        } 
    },
     /* Crear la funcionalidad searchMoviesByGenre  la misma debe recibir
    por parámetro algunos de los géneros asignados a las películas y la
    responsabilidad de esta función será la de devolver una lista (array)
    de todas aquellas películas que posean el género indicado, de no
    existir ninguna de ese género de retornar null. */
    searchMoviesByGenre: (genero) => {
        let searchByGenre = movies.filter((movie) => movie.genero === genero);
        if ( searchByGenre === undefined){
            return null;
        }
        return searchByGenre; 
    },
    /* El metodo reduce para hacer la sumatorio del precio de todas las peliculas*/
    totalPrice: () => {
        let precioTotal = movies.reduce((acumulador, movie) => acumulador + movie.price, 0);
        return precioTotal;
    },
    /* 5. Funcionalidad changeMovieGenre que reciba el id de una
    película y el nuevo género a cambiar. */
    changeMovieGenre: (Pelicula, b) => {
        let movie = moviesDH.searchMovie(Pelicula);
        movie.genero = b;
        return movie
    }
}


//Llamar de Función de listar
moviesDH.listMovies()

// Llamar de Función de busqueda por nombre o Id
console.log(moviesDH.searchMovie('Que paso ayer'));
console.log(moviesDH.searchMovie(7));

//Llamado de Función busqueda por genero
console.log(moviesDH.searchMoviesByGenre('Comedia'));

//Llamado de Función pasa sumar 
console.log(moviesDH.totalPrice());

//Llamado de Función para modificar genero 
moviesDH.changeMovieGenre('Que paso ayer', 'Accion');


-

