import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from './LoginForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  }
})

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  )
}

LoginScreen.navigationOptions = {
  title: 'Log In',
}

export default LoginScreen
