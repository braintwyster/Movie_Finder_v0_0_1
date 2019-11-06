/////MOVIES REDUCERS////
import ReducerMovies from './reducers/reducer_movies'

////MOVIES MIDDLEWARE////
import {
    GetPopularMovies_Mid,
    SearchByTitle_Mid
} from './middlewares/middleware_movies'

////REDUCERS////
export const MoviesReducers = {
    Movies: ReducerMovies,
}

////_MIDDLEWARES////
export const MoviesMiddleware = [
    GetPopularMovies_Mid,
    SearchByTitle_Mid
]
