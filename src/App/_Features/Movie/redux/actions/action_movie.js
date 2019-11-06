export const GET_MOVIE_BY_ID    = "[MOVIE] Get Popular Movies"
export const GOT_MOVIE          = "[MOVIE] Got Movie"
export const REMOVE_LOADED_MOVIE= "[MOVIE] Removing Loaded Movie"

export const getMovieById = (id, setBG) => ({
    type: GET_MOVIE_BY_ID,
    payload: { id, setBG }
})

export const removeLoadedMovie = () => ({
    type: REMOVE_LOADED_MOVIE
})
