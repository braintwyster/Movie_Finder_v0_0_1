///Packages
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form } from 'react-bootstrap'

///Components

///Actions
import { searchByTitle } from '../redux/actions/action_movies'

///Styles
import "./SearchBar-style.css"

class SearchBar extends Component {
    state = {
        search: ''
    }

    handleChange = (e) => {
        const value = e.target.value
        this.props.searchByTitle(value)

        this.setState({
            search: value
        })
    }

    render() {
        const { handleChange } = this
        const { search } = this.state
        console.log('[SEARCH]', search);

        return (
            <div className="SearchBar">
                <input
                    type="text"
                    className={`SearchInput form-control`}
                    placeholder={`Search By Title`}
                    value={ search }
                    onChange={ handleChange }
                />
            </div>
        );
    }
}

SearchBar = connect(null, { searchByTitle })(SearchBar)
export default SearchBar
