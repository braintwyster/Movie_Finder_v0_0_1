import React from "react";

class Image extends React.Component {

    state = { loaded: false };

    handleImageLoaded() {
        this.setState({ loaded: true });
    }

    componentDidMount() {
        this.setState({ loadede: false })
    }

    render() {
        const { loaded } = this.state

        return (
            <div>
                <img
                    style={ loaded ? {} : {display: 'none'}}
                    src={ this.props.src }
                    onLoad={ () => this.handleImageLoaded() }
                    className="img-fluid"
                />
            </div>
        );
    }
}

export default Image;
