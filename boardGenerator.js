export const generator = (size = 4, num_tiles = 8) => {
	const data = []

	// Fill data with rows of zeros
	for (let y = 0; y < size; y++) {
		const row = []
		for (let x = 0; x < size; x++) {
			row.push(0)
		}
		data.push(row)
	}

	// Fill with n amount of random tiles
	for (let i = 0; i < num_tiles; i++) {
		data[Math.floor(Math.random() * size)][Math.floor(Math.random() * size)] = (Math.floor(Math.random() * 2) + 1)
	}

	// Clone board and check if solvable
	const clone = data.slice()

	// Count number of empty tiles and run player simulator n many times (little overkill)
	let num_empty = 0
	clone.forEach(row => num_empty += row.filter(tile => tile == 0).length)

	for (let n = 0; n < num_empty; n++) {
		// Check for pairs in rows
		clone.forEach((row) => {
			for (let x = 0; x < size - 1; x++) {
				if (row[x] == row[x + 1] && [1, 2].includes(row[x])) {
					if (row[x - 1] == 0) {
						row[x - 1] = 3 - row[x]
					}

					if (row[x + 2] == 0) {
						row[x + 2] = 3 - row[x]
					}
				}
			}
		})

		// Check for pairs in columns
		for (let x = 0; x < size; x++) {
			for (let y = 0; y < size - 1; y++) {
				if (clone[y][x] == clone[y + 1][x] && [1, 2].includes(clone[y][x])) {
					if (clone[y - 1] && clone[y - 1][x] == 0) {
						clone[y - 1][x] = 3 - clone[y][x]
					}

					if (clone[y + 2] && clone[y + 2][x] == 0) {
						clone[y + 2][x] = 3 - clone[y][x]
					}
				}
			}
		}

		// Check for complete colors in rows
		clone.forEach((row) => {
			if (row.filter(tile => tile == 1).length == size / 2) {
				for (let x = 0; x < size; x++) {
					if (row[x] == 0) {
						row[x] = 2
					}
				}
			}

			if (row.filter(tile => tile == 2).length == size / 2) {
				for (let x = 0; x < size; x++) {
					if (row[x] == 0) {
						row[x] = 1
					}
				}
			}
		})

		// Check for complete colors in columns
		for (let x = 0; x < size; x++) {
			if (clone.filter(row => row[x] == 1).length == size / 2) {
				clone.forEach((row) => {
					if (row[x] == 0) {
						row[x] = 2
					}
				})
			}

			if (clone.filter(row => row[x] == 2).length == size / 2) {
				clone.forEach((row) => {
					if (row[x] == 0) {
						row[x] = 1
					}
				})
			}
		}
	}

	return clone
}