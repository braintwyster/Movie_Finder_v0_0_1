export const GET_POPULAR_MOVIES = "[MOVIES] Get Popular Movies"
export const GOT_MOVIES         = "[MOVIES] Got Movies"
export const SEARCH_BY_TITLE    = "[MOVIES] Searching By Title"

export const getPopularMovies = () => ({
    type: GET_POPULAR_MOVIES
})

export const searchByTitle = title => ({
    type: SEARCH_BY_TITLE,
    payload: title
})
