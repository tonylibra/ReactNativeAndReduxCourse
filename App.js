/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/Reducers';
import ReduxThnk from 'redux-thunk';
import firebase from 'firebase';
import AppWithNavigationState from './src/AppNavigator'


export default class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCBQ4Zg13YqYKP5hW4SgNqdmz-LMot96GQ",
      authDomain: "reactnative-auth-697e5.firebaseapp.com",
      databaseURL: "https://reactnative-auth-697e5.firebaseio.com",
      projectId: "reactnative-auth-697e5",
      storageBucket: "reactnative-auth-697e5.appspot.com",
      messagingSenderId: "930730295419"
    }
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThnk));
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
