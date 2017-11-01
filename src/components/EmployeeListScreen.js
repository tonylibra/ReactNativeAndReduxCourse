import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  }
})

const EmployeeListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  )
}

EmployeeListScreen.navigationOptions = {
  title: 'Employee',
}

export default EmployeeListScreen
