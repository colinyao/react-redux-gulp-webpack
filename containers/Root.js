import React, { Component, PropTypes } from 'react';
import {
	Router,
	Route,
	hashHistory
} from 'react-router';
import routes from '../routes';
import { Provider } from 'react-redux';
import AppleBasket from './AppleBasket';
import { syncHistoryWithStore } from 'react-router-redux'

export default class Root extends Component {
  render() {
    const { store } = this.props;
    const history = syncHistoryWithStore(hashHistory, store)

    return (
      <Provider store={store}>  
           <Router history={history} routes={routes}></Router>      
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
