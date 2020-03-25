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

        <Row y={0}/>
        <Row y={1}/>
        <Row y={2}/>
        <Row y={3}/>
        <Row y={4}/>
        <Row y={5}/>
        <Row y={6}/>
        <Row y={7}/>
        <Row y={8}/>
        <Row y={9}/>
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
