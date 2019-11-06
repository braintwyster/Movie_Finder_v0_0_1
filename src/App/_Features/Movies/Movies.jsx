///Packages
import React, { Component } from 'react';
import { connect }          from 'react-redux'

///Components
import MovieList            from 'App/_Components/MovieList/MovieList'
import SearchBar            from 'App/_Features/Movies/Search/SearchBar'

///Actions
import { getPopularMovies } from './redux/actions/action_movies'

import "./Movies-style.css"
class Movies extends Component {

    componentDidMount(){
        this.props.getPopularMovies()
    }

    render() {
        const { Movies } = this.props

        return (
            <div className="Movies">
                <SearchBar />

                <MovieList movies={ Movies }/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        Movies: state.Movies.movies
    }
}

Movies = connect(mapStateToProps, { getPopularMovies })(Movies)
export default Movies
