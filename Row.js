import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Tile from './Tile'

export default class Row extends Component {
	render() {
		return (
			<View style={styles.row}>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
      </View>
		)
	}
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  }
});