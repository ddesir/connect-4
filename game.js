"use strict";

const ROWS = 6;
const COLUMNS = 7;

let board = [
	[], // column one
	[], // column two
	[], // column three
	[], // column four
	[], // column five
	[], // column six
	[]  // column seven
];

let wins = 0;
let losses = 0;
let ties = 0;

// updates the DOM based on the board array
function draw_board() {
	// for (let i = 0; i < 6; i++) {
	// 	for (let j = 0; j < 7; j++) {
	// 		let tile = document.getElementById(`tile-${i}-${j}`);
	// 		let marker = board[i][j];

	// 		// not optimized
	// 		// unnecessarily modifying classes at every render
	// 		// but ok for now
	// 		if (marker == ' ') {
	// 			tile.classList.remove('clicked');
	// 		} else {
	// 			tile.classList.add('clicked');
	// 		}
	// 		tile.innerHTML = marker;
	// 	}
	// }
}

// returns true if col is full, or returns false otherwise
// NOTE: col is the column index (e.g., column two has a column index of 1)
function isColFull(col) {
	if (board[col].length >= ROWS) {
		return true;
	} else {
		return false;
	}
}

// returns false if board has a non-full column, or returns true otherwise
function isBoardFull() {
	// scans board column by column
	for (let i = 0; i < COLUMNS; i++) {
		if (!isColFull(i)) {
			return false;
		}
	}
	return true;
}

// processes user move
function userTurn() {

}

// processes AI move
function aiTurn() {

}

// clears the board
function reset() {
	board = [
		[], // column one
		[], // column two
		[], // column three
		[], // column four
		[], // column five
		[], // column six
		[]  // column seven
	];
	draw_board();
}

// starts the game
reset();