///Packages
import React                        from 'react';
import ReactDOM                     from 'react-dom';
import { BrowserRouter as Router }  from 'react-router-dom'
import { Provider }                 from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';

///Redux
import { Reducers, Middlewares }    from './store/store_root'

///ServiceWorker
import * as serviceWorker           from './serviceWorker';

///Components
import App                          from './App/App';

///Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnhancers(applyMiddleware(...Middlewares)))

ReactDOM.render(

    <Provider store={ store }>
        <Router>
            <App />
        </Router>
    </Provider>

, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
