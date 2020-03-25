import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Tile from './Tile'

export default class Row extends Component {
	render() {
		return (
			<View style={styles.row}>
        <Tile x={0} y={this.props.y}/>
        <Tile x={1} y={this.props.y}/>
        <Tile x={2} y={this.props.y}/>
        <Tile x={3} y={this.props.y}/>
        <Tile x={4} y={this.props.y}/>
        <Tile x={5} y={this.props.y}/>
        <Tile x={6} y={this.props.y}/>
        <Tile x={7} y={this.props.y}/>
        <Tile x={8} y={this.props.y}/>
        <Tile x={9} y={this.props.y}/>
      </View>
		)
	}
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  }
});