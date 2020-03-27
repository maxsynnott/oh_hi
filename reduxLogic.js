import { generator } from './boardGenerator'
import { check } from './solutionChecker.js'

const random_tiles = []

for (let i = 0; i < 10; i++) {
	const row = []
	for (let j = 0; j < 10; j++) {
		row.push(Math.floor(Math.random() * 3))
	}
	random_tiles.push(row)
}

const initialState = {
	gameOver: false,
	tiles: random_tiles
}

export const reducer = (state = initialState, action) => {
	const { tiles } = state
	const { type, x, y, payload } = action

	const size = 10; // Should be handled elsewhere at a later date

	switch (type) {
		case 'tileUpdate':
			tiles[y][x] = payload
			return state
		case 'gameCheck':
			const valid = check(tiles) 
			
			return {
				...state,
				gameOver: valid
			}
		case 'generator':
			const data = generator()
			return state
	}
	
	return state
}