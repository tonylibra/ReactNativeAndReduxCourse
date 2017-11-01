import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../Actions'
import { connect } from 'react-redux'

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onButtonPressed() {
    const { email, password } = this.props
    this.props.loginUser(email, password)
  }

  renderButton() {
    if(this.props.loading) {
      return <Spinner size='large' />
    }
    return (
      <Button onPress={this.onButtonPressed.bind(this)}>
        Login
      </Button>
    )
  }

  renderLoginFailMessage() {
    if(this.props.error) {
      return (
        <Text style={{fontSize: 20, alignSelf: 'center', color: 'red'}}>Login Fail!!!</Text>
      )
    }
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input
            placeholder='user@gmail.com'
            label='E-mail'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder='password'
            label='Password'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        {this.renderLoginFailMessage()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    emailChanged: (text) => dispatch(emailChanged(text)),
    passwordChanged: (text) => dispatch(passwordChanged(text)),
    loginUser: (email, password) => dispatch(loginUser({email, password}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
