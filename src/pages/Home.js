import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import AppContainer from '../containers/AppContainer';

export default class App extends Component {
  render() {
    return (
      <Link
            to="/signup"
            className="btn btn-error"> Sign Up Page
      </Link>
    );
  }
}
