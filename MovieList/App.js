import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppDia1 from './dia1/App';
export default class App extends React.Component {
  render() {
    return (
      <AppDia1/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
