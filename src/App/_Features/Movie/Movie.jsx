///Packages
import React, { Component } from 'react';
import { connect }          from 'react-redux'
import { Link }             from 'react-router-dom'

///Components
import Image    from 'App/_Common/Image/Image'

///Actions
import { getMovieById, removeLoadedMovie } from './redux/actions/action_movie'

///Styles
import "./Movie-style.css"

class Movie extends Component {
    state = {
        id: null
    }

    componentDidMount(){
        const { id } = this.props.match.params
        this.props.getMovieById(id, this.props.setBackdrop )
        this.setState({ id })
    }

    clearMovie = () => {
        this.props.removeLoadedMovie()
        this.props.clearBackdrop()
        this.setState({ id: null })
    }

    render() {
        const { Movie } = this.props
        const withCommas = (x) => {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        ///Render Nothing if Movie Object is not populated.
        ///This can be changed out for a placeholder if needed.
        if(Movie.id === undefined) return null

        return (
            <div className="Movie">
                <Link to="/" className="BackBtn">
                    <button
                        className="btn btn-primary"
                        onClick={ () => this.clearMovie() }
                    >Back</button>
                </Link>
                <div className="card">
                    <div className="m-data">
                        <div className="m-title">
                            {Movie.title}
                        </div>
                        <div className="m-poster">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`}
                            />
                        </div>
                        <div className="m-details">
                            <div className="m-synopsis card">
                                <h3>Synopsis</h3>
                                {Movie.overview}
                            </div>
                            <div className="m-deets card">
                                <ul>
                                    <li className="deets-list-item">
                                        <span className="list-bold ls-half">Runtime: </span>
                                        <span className="list-step ls-half">{Movie.runtime}mins</span>
                                    </li>
                                    <li className="deets-list-item">
                                        <span className="list-bold ls-half">Status: </span>
                                        <span className="list-step ls-half">{Movie.status}</span>
                                    </li>
                                    <li className="deets-list-item">
                                        <span className="list-bold ls-half">Released: </span>
                                        <span className="list-step ls-half">{Movie.release_date}</span>
                                    </li>
                                    <li className="deets-list-item">
                                        <span className="list-bold ls-half">Budget: </span>
                                        <span className="list-step ls-half">${withCommas(Movie.budget)}</span>
                                    </li>
                                    <li className="deets-list-item">
                                        <span className="list-bold ls-half">Popularity: </span>
                                        <span className="list-step ls-half">{Movie.popularity}</span>
                                    </li>
                                    <hr/>
                                    <li className="deets-list-item column-list">
                                        <span className="list-bold">Production Countries: </span>
                                        <span className="list-step">{Movie.production_countries.map(pc => pc.iso_3166_1)}</span>
                                    </li>
                                    <li className="deets-list-item column-list">
                                        <p className="list-bold">Production Companies: </p>
                                        {Movie.production_companies.map(pc => (
                                            <p className="list-step">{pc.name}</p>
                                        ))}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        Movie: state.Movie.movie
    }
}

Movie = connect(mapStateToProps, { getMovieById, removeLoadedMovie })(Movie)
export default Movie
