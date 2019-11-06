///Packages
import React from 'react';

///Components
import MovieItem    from './MovieItem/MovieItem'

///Styles
import "./MovieList-style.css"

const MovieList = props => {
    const movies = props.movies
    const List = movies.map( (m,i) => <MovieItem key={i} movie={m} /> )

    return (
        <div className="MovieList">
            { List }
        </div>
    )

}

export default MovieList
