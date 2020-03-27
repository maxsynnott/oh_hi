export const check = (board) => {
	// This whole function is very inefficient. Not concerned as just learning/practicing with react-native.
	const size = board.length

	// Check if any tiles are empty
	let boardFilled = true;
	board.forEach((row) => {
		row.forEach((tile) => {
			if (tile == 0) {
				boardFilled = false;
			}
		})
	})

	// Check if all rows are even
	let rowsEven = true;
	if (boardFilled) {
		board.forEach((row) => {
			if (row.filter(tile => tile == 1).length != row.filter(tile => tile == 2)) {
				columnsEven = false;
			}
		})
	}

	// Check if all columns are even
	let columnsEven = true;
	if (boardFilled && rowsEven) {
		for (let x = 0; x < size; x++) {
			if (board.filter(row => row[x] == 1).length != board.filter(row => row[x] == 2).length) {
				columnsEven = false;
			}
		}
	}

	// Check there are no threes in rows
	let noRowThrees = true;
	if (boardFilled && rowsEven && columnsEven) {
		board.forEach((row) => {
			for (let x = 0; x < size - 2; x++) {
				if (row[x] == row[x + 1] && row[x + 1] == row[x + 2]) {
					noRowThrees = false;
				}
			}
		})
	}

	// Check there are no threes in columns
	let noColumnThrees = true;
	if (boardFilled && rowsEven && columnsEven && noRowThrees) {
		for (let x = 0; x < size; x++) {
			for (let y = 0; y < size - 2; y++) {
				if (board[y][x] == board[y + 1][x] && board[y + 1][x] == board[y + 2][x]) {
					noColumnThrees = false;
				}
			}
		}
	}

	// Check there are no duplicate rows
	let noDuplicateRows = true;
	if (boardFilled && rowsEven && columnsEven && noRowThrees && noColumnThrees) {
		console.log('===')
		for (let y = 0; y < size; y++) {
			const boardClone = board.slice().map(row => JSON.stringify(row))
			const row = boardClone.splice(y, 1)[0]

			if (boardClone.includes(row)) {
				noDuplicateRows = false;
			}
		}
	}

	// Check there are no duplicate columns
	let noDuplicateColumns = true;
	if (boardFilled && rowsEven && columnsEven && noRowThrees && noColumnThrees && noDuplicateRows) {
		const columns = []

		for (let x = 0; x < size; x++) {
			const column = []
			board.forEach((row) => {
				column.push(row[x])
			})
			columns.push(column)
		}

		for (let x = 0; x < size; x++) {
			const columnsClone = columns.slice().map(column => JSON.stringify(column))
			const column = columnsClone.splice(x, 1)

			if (columnsClone.includes(column)) {
				noDuplicateColumns = false;
			}
		}
	}

	return (boardFilled && rowsEven && columnsEven && noRowThrees && noColumnThrees && noDuplicateRows && noDuplicateColumns)
}