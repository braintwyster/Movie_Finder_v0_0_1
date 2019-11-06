import {
    GOT_MOVIES
} from '../actions/action_movies'

export default (state = { movies: [] }, action) => {
    switch (action.type) {
        case GOT_MOVIES:
            return {...state, ...action.payload }

        default:
            return state
    }
}
