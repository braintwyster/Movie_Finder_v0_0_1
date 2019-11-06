///Packages
import React, { Component } from 'react';
import { Route, Switch }    from 'react-router-dom'

///Components
import Header               from './_Common/Header/Header'

///Features
import Movies   from './_Features/Movies/Movies'
import Movie    from './_Features/Movie/Movie'

///Styles
import './App.css';

class App extends Component {
    state = {
        backdrop: 'none'
    }

    setBackdrop = (backdrop) => {
        this.setState({ backdrop: `url(https://image.tmdb.org/t/p/original/${backdrop})` })
    }

    clearBackdrop = () => {
        this.setState({ backdrop: 'none' })
    }

    render(){

        return (

            <div className="App" style={{ backgroundImage: this.state.backdrop }} >
                <Header />
                <div className="Main container">
                    <Switch>
                        <Route path="/" exact component={ Movies } />
                        <Route
                            path="/movie/:id"
                            component={ props => (
                                <Movie
                                    { ...props }
                                    setBackdrop={ this.setBackdrop }
                                    clearBackdrop={ this.clearBackdrop }
                                />
                            )}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
