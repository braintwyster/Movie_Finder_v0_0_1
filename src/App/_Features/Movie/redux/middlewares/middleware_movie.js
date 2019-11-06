///Packages
import axios    from 'axios'

///Actions
import {
    GET_MOVIE_BY_ID,
    GOT_MOVIE
} from '../actions/action_movie'

export const GetMovieById_Mid = ({ getState, dispatch }) => next => action =>{
    next(action)
    if(action.type === GET_MOVIE_BY_ID){
        const id = action.payload.id
        axios.get(`http://localhost:3001/api/movie/${id}`)
        .then(res => {
            const movie = res.data

            ///Check if movie reducer state -> ID is undefined
            if(getState().Movie.movie.id === undefined){
                ////Set backdrop for new moive if true
                action.payload.setBG(movie.backdrop_path)
            }
            
            dispatch({
                type: GOT_MOVIE,
                payload: { movie }
            })
        })
    }
}
