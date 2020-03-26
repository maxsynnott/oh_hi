import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

import store from './store'

export default class Timer extends Component {
	state = {
		time: 0,
		color: 'black'
	}

	componentDidMount() {
    setInterval(() => {
    	if (!store.getState().gameOver) {
    		this.setState({ time: this.state.time + 1, color: 'black' })
    	} else {
    		this.setState({ color: 'red' })
    	}
    }, 1000)
  }

	render() {
		const { time, color } = this.state

		return (
			<Text style={[styles.timer, { color: color }]}>
				{new Date(time * 1000).toISOString().substr(14, 5)}
			</Text>
		)
	}
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 50,
    marginBottom: 20
  },
});
