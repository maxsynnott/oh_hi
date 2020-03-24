import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Row from './Row'
import Timer from './Timer'

import store from './store'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer/>

        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
      </View>
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
