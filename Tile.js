import React, { Component } from 'react'
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native'

const colors = ['white', 'orange', 'blue']

export default class Tile extends Component {
	state = {
		color: colors[0]
	}

	nextColor = () => {
		console.log('Changing color now')
		const { color } = this.state

		const nextIndex = (colors.indexOf(color) + 1) % colors.length

		this.setState({ color: colors[nextIndex] })
	}

	render() {
		const { color } = this.state

		return (
			<TouchableWithoutFeedback
				onPress={this.nextColor}
			>
				<View 
					style={[styles.tile, { backgroundColor: color }]} 
					 onPress={() => {
				    alert('You tapped the button!');
				  }}
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