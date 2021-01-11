"use strict";

const ROWS = 6;
const COLUMNS = 7;

// bottom of board  top of board
// <<<<<<<<<<<<<<<  >>>>>>>>>>>>
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

// updates the DOM's board based on the board array
function drawBoard() {
	// column-by-column
	for (let c = 0; c < COLUMNS; c++) {
		// row-by-row
		for (let r = 0; r < ROWS; r++) {
			let tile = document.getElementById(`tile-${r}-${c}`);
			let marker = board[c][r];

			// updates cell based on the marker
			if (marker === "O" || marker === "X") {
				tile.classList.add('clicked');
				tile.innerHTML = marker;
			} else {
				tile.classList.remove('clicked');
				tile.innerHTML = "";
			}
		}
	}
}

// updates the DOM's W/L/T based on wins, losses, and ties
function wlt() {
	document.getElementById("win").innerHTML = "Wins: " + wins;
	document.getElementById("loss").innerHTML = "Losses : " + losses;
	document.getElementById("tie").innerHTML = "Ties : " + ties;
}

// returns true if col is full
// NOTE: col is the column index (e.g., column two's index is 1)
function isColFull(col) {
	// determines fullness
	if (board[col].length >= ROWS) {
		return true;
	} else {
		return false;
	}
}

// returns false if the board has at least one non-full column
function isBoardFull() {
	// scans the board column by column
	for (let i = 0; i < COLUMNS; i++) {
		// finds non-full column
		if (!isColFull(i)) {
			return false;
		}
	}
	return true;
}

// returns true if the board has four-in-a-row
function hasFourInARow() {
	//placeholder to prevent errors
	return false;
}

// determines AI move using Math.random()
function aiMove() {
	let stopper = 0;
	// repeats until AI finds a non-full column
	while (stopper !== 1) {
		const colo = Math.floor(Math.random() * COLUMNS);
		if (!isColFull(colo)) {
			board[colo].push("X");
			drawBoard();
			stopper = 1;
		}
	}
	if(hasFourInARow()){
		losses++;
		wlt();
	} else if(isBoardFull()){
		ties++;
		wlt();
	}
}

// pushes player's piece to bottom of column
function choose(r, c) {
	// verifies user click
	if (board[c][r] !== "O" && board[c][r] !== "X") {
		board[c].push("O");
		drawBoard();
		// checks for user win and ties
		if (hasFourInARow()) {
			wins++;
			wlt();
		} else if (isBoardFull()) {
			ties++;
			wlt();
		} else {
			aiMove();
		}
	}
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
	drawBoard();
}

// starts the game
reset();