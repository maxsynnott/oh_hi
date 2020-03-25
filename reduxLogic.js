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
			const size = 10;

			// Check if any tiles are empty
			let tilesFilled = true;
			for (let y = 0; y < size; y++) {
				for (let x = 0; x < size; x++) {
					if (tiles[y][x] === 0) {
						tilesFilled = false;
					}
				}
			}

			// Check if all rows are even
			let rowsEven = true;
			if (tilesFilled) {
				for (let y = 0; y < size; y++) {
					const row = Object.values(tiles[y])

					if (row.filter(i => i == 1).length != row.filter(i => i == 2).length) {
						rowsEven = false
					}
				}
			}

			// Check if all columns are even
			let columnsEven = true;
			if (tilesFilled && rowsEven) {
				const rows = Object.values(tiles)

				for (let x = 0; x < size; x++) {
					if (rows.filter(row => row[x] == 1).length != rows.filter(row => row[x] == 2).length) {
						columnsEven = false;
					}
				}
			}

			let noThrees = true;
			if (tilesFilled && rowsEven && columnsEven) {
				for (let y = 0; y < size; y++) {
					for (let x = 0; x < size; x++) {
						const target = tiles[y][x]

						if (y > 1) {
							if (tiles[y - 2][x] == target && tiles[y - 1][x] == target) {
								noThrees = false;
							}
						}

						if (y > 0 && y < size - 1) {
							if (tiles[y - 1][x] == target && tiles[y + 1][x] == target) {
								noThrees = false;
							}
						}

						if (y < size - 2) {
							if (tiles[y + 1][x] == target && tiles[y + 2][x] == target) {
								noThrees = false;
							}
						}
						
						if (x > 1) {
							if (tiles[y][x - 2] == target && tiles[y][x - 1] == target) {
								noThrees = false;
							}
						}

						if (x > 0 && x < size - 1) {
							if (tiles[y][x - 1] == target && tiles[y][x + 1] == target) {
								noThrees = false;
							}
						}

						if (x < size - 2) {
							if (tiles[y][x + 1] == target && tiles[y][x + 2] == target) {
								noThrees = false;
							}
						}
					}
				}
			}

			gameOver = (tilesFilled && rowsEven && columnsEven && noThrees)
			
			return {
				...state,
				gameOver: gameOver
			}
	}
	
	return state
}