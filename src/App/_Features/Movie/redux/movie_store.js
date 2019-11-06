/////MOVIE REDUCERS////
import ReducerMovie from './reducers/reducer_movie'

////MOVIE MIDDLEWARE////
import {
    GetMovieById_Mid
} from './middlewares/middleware_movie'

////REDUCERS////
export const MovieReducers = {
    Movie: ReducerMovie,
}

////_MIDDLEWARES////
export const MovieMiddleware = [
    GetMovieById_Mid
]
