///Packages
import React    from 'react';
import { Link } from 'react-router-dom'

///Components
import Image    from 'App/_Common/Image/Image'

///Styles
import "./MovieItem-style.css"

const MovieItem = props => {
    const movie = props.movie
    return (
        <Link to={`/movie/${movie.id}`}>
            <div className="MovieItem" >
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
            </div>
        </Link>
    )

}

export default MovieItem
