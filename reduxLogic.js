const random_tiles = {}

for (let i = 0; i < 10; i++) {
	random_tiles[i] = {}
	for (let j = 0; j < 10; j++) {
		random_tiles[i][j] = Math.floor(Math.random() * 3)
	}
}

const initialState = {
	gameOver: false,
	tiles: random_tiles
}

export const reducer = (state = initialState, action) => {
	const { tiles } = state
	const { type, x, y, payload } = action

	switch (type) {
		case 'tileUpdate':
			console.log(`Updating tile at { y: ${y}, x: ${x} } to value: ${payload}`)
			tiles[y][x] = payload
			return state
		case 'gameCheck':
			let gameOver = true;

			// Check if any tiles are empty
			Object.keys(tiles).forEach((y) => {
				Object.keys(tiles[y]).forEach((x) => {
					console.log(tiles[y][x] == 0)
					if (tiles[y][x] === 0) {
						gameOver = false;
					}
				})
			})

			console.log(gameOver)
			
			return {
				...state,
				gameOver: gameOver
			}
	}
	
	return state
}