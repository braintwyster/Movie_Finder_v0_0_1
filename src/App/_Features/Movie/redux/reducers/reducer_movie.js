import {
    GOT_MOVIE,
    REMOVE_LOADED_MOVIE
} from '../actions/action_movie'

export default (state = { movie: {} }, action) => {
    switch (action.type) {
        case GOT_MOVIE:
            return { ...state, ...action.payload }

        case REMOVE_LOADED_MOVIE:
            return { movie: {} }
        default:
            return state
    }
}
