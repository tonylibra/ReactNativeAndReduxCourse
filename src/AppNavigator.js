// @flow

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import LoginScreen from './components/LoginScreen'
import EmployeeListScreen from './components/EmployeeListScreen'

export const AppNavigator = StackNavigator({
  Login: {screen: LoginScreen},
  Employee: {screen: EmployeeListScreen }
})

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

AppWithNavigationState.protoTypes = {
  dispatch: PropTypes.object.isRequired,
  nav: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState)
