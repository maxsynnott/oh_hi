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
			tiles.forEach((row) => {
				row.forEach((tile) => {
					if (tile == 0) {
						tilesFilled = false;
					}
				})
			})

			// Check if all rows are even
			let rowsEven = true;
			if (tilesFilled) {
				tiles.forEach((row) => {
					if (row.filter(tile => tile == 1).length != row.filter(tile => tile == 2)) {
						columnsEven = false;
					}
				})
			}

			// Check if all columns are even
			let columnsEven = true;
			if (tilesFilled && rowsEven) {
				for (let x = 0; x < size; x++) {
					if (tiles.filter(row => row[x] == 1).length != tiles.filter(row => row[x] == 2).length) {
						columnsEven = false;
					}
				}
			}

			let noRowThrees = true;
			if (tilesFilled && rowsEven && columnsEven) {
				tiles.forEach((row) => {
					for (let x = 0; x < size - 2; x++) {
						if (row[x] == row[x + 1] && row[x + 1] == row[x + 2]) {
							noRowThrees = false;
						}
					}
				})
			}

			let noColumnThrees = true;
			if (tilesFilled && rowsEven && columnsEven && noRowThrees) {
				for (let x = 0; x < size; x++) {
					for (let y = 0; y < size - 2; y++) {
						if (tiles[y][x] == tiles[y + 1][x] && tiles[y + 1][x] == tiles[y + 2][x]) {
							noColumnThrees = false;
						}
					}
				}
			}
			

			gameOver = (tilesFilled && rowsEven && columnsEven && noRowThrees && noColumnThrees)
			
			return {
				...state,
				gameOver: gameOver
			}
	}
	
	return state
}