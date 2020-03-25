import React, { Component } from 'react'
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native'

import store from './store'

const colors = ['white', 'orange', 'blue']

export default class Tile extends Component {
	componentWillMount() {
		const { x, y } = this.props

		const initialIndex = store.getState().tiles[y][x]
		this.setState({ colorIndex: initialIndex })

    this.unsubscribe = store.subscribe(() => {
      const newIndex = store.getState().tiles[y][x]
      this.setState({ colorIndex: newIndex })
    })
  }

	nextColor = () => {
		const { x, y } = this.props
		const { colorIndex } = this.state

		const nextIndex = (colorIndex + 1) % colors.length

		store.dispatch({x: x, y: y, type: 'tileUpdate', payload: nextIndex})
	}

	render() {
		const { colorIndex } = this.state

		return (
			<TouchableWithoutFeedback
				onPress={this.nextColor}
			>
				<View 
					style={[styles.tile, { backgroundColor: colors[colorIndex] }]} 
				/>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = StyleSheet.create({
  tile: {
    margin: 1,
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid'
  }
});