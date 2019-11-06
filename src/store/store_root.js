import { combineReducers } from 'redux'

import { MoviesReducers, MoviesMiddleware } from 'App/_Features/Movies/redux/movies_store'
import { MovieReducers, MovieMiddleware } from 'App/_Features/Movie/redux/movie_store'

////////EXPORT REDUCERS//////////
export const Reducers = combineReducers({
    ...MoviesReducers,
    ...MovieReducers
})

///////EXPORT MIDDLEWARES///////
export const Middlewares = [
    ...MoviesMiddleware,
    ...MovieMiddleware
]
