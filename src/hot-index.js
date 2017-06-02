import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { AppContainer } from 'react-hot-loader';
import cookie from 'react-cookie';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Root from './root';
import Container from './pages/App';
import SignUp from './containers/SignUpFormContainer'
import {AUTH_USER} from './actions/types'

const rootEl = document.getElementById('root');

const token = cookie.load('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(

<AppContainer>
  <Root store = {store}/>
  </AppContainer>,
  rootEl
);


// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./root', () => {
    render(Root)
  });
}
