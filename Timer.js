import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

export default class Timer extends Component {
	state = {
		time: 0
	}

	componentDidMount() {
    setInterval(() => {
      this.setState({time: this.state.time + 1})
    }, 1000)
  }

	render() {
		const { time } = this.state

		return (
			<Text style={styles.timer}>
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
