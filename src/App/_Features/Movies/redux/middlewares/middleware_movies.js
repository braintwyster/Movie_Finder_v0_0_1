///Packages
import axios    from 'axios'

///Actions
import {
    GET_POPULAR_MOVIES,
    GOT_MOVIES,
    SEARCH_BY_TITLE
} from '../actions/action_movies'

export const GetPopularMovies_Mid = ({ getState, dispatch }) => next => action =>{
    next(action)
    if(action.type === GET_POPULAR_MOVIES){
        // console.log('GETTING MOVIES');
        axios.get('http://localhost:3001/api')
            .then(res => {
                const movies = res.data
                dispatch({
                    type: GOT_MOVIES,
                    payload: { movies: movies }
                })
            })
    }
}

export const SearchByTitle_Mid = ({ getState, dispatch }) => next => action =>{
    next(action)
    if(action.type === SEARCH_BY_TITLE){
        if(!action.payload){
            dispatch({ type: GET_POPULAR_MOVIES })
        }else{
            axios.post('http://localhost:3001/api/search', {
                title: action.payload
            }).then(res => {
                const movies = res.data
                dispatch({
                    type: GOT_MOVIES,
                    payload: { movies: movies }
                })
            })
        }
    }
}
