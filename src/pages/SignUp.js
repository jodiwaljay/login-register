import React from 'react';
import { Component } from 'react';
import SignUpFormContainer from '../containers/SignUpFormContainer';

export default class App extends Component {
  render() {
    return (
      <div>
      {//<HeaderContainer type="posts_new"/>}
      <SignUpFormContainer />
    </div>
    );
  }
}
