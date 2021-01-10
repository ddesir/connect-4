"use strict";

const ROWS = 6;
const COLUMNS = 7;

// this board is rotated 90 degrees clockwise to players
let board = [
	[' ', ' ', ' ', ' ', ' ', ' ', ' '], // column one
	[' ', ' ', ' ', ' ', ' ', ' ', ' '], // column two
	[' ', ' ', ' ', ' ', ' ', ' ', ' '], // column three
	[' ', ' ', ' ', ' ', ' ', ' ', ' '], // column four
	[' ', ' ', ' ', ' ', ' ', ' ', ' '], // column five
	[' ', ' ', ' ', ' ', ' ', ' ', ' '], // column six
	[' ', ' ', ' ', ' ', ' ', ' ', ' '], // column seven
];

let wins = 0;
let losses = 0;
let ties = 0;

// updates the document based on the board
function drawBoard() {
	for (let i = 0; i < COLUMNS; i++) {
		for (let j = 0; j < ROWS; j++) {
			let tile = document.getElementById(`tile-${i}-${j}`);
			let marker = board[i][j];

			if (marker == ' ') {
				tile.classList.remove('clicked');
			}
			else {
				tile.classList.add('clicked');
			}
			tile.innerHTML = marker;
		}
	}
}

// win condition should go here
function fourInRow() {

}

// this function will drop the player's piece to the bottom of each column
function choose(x, y) {
	let tile = board[x][y];
	if (tile != ' ') {
		// do nothing
		// rely on css to provide user visual feedback
	} else {
		// assume the player is always X
		// pop removes the last element in array so array stays at 6
		board[x].pop(" ");
		// unshift adds X to the first element of the array
		board[x].unshift("X");
		// updates the board
		drawBoard();
	}
}

// this should be put under win/loss conditions
function wlt() {
	document.getElementById("win").innerHTML = "Wins: " + wins;
	document.getElementById("loss").innerHTML = "Losses : " + losses;
	document.getElementById("tie").innerHTML = "Ties : " + ties;
}

// returns true if col is full
// NOTE: col is the column index (e.g., column two's index is 1)
function isColFull(col) {
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
		if (!isColFull(i)) {
			return false;
		}
	}
	return true;
}

// processes user move
function userTurn() {
	// if push x or x, change table class to yellow or red
}

// processes AI move
function aiTurn() {
	// if push x or x, change table class to yellow or red
}

// clears the board
function reset() {
	board = [
		[' ', ' ', ' ', ' ', ' ', ' '], // column one
		[' ', ' ', ' ', ' ', ' ', ' '], // column two
		[' ', ' ', ' ', ' ', ' ', ' '], // column three
		[' ', ' ', ' ', ' ', ' ', ' '], // column four
		[' ', ' ', ' ', ' ', ' ', ' '], // column five
		[' ', ' ', ' ', ' ', ' ', ' '], // column six
		[' ', ' ', ' ', ' ', ' ', ' '] // column seven
	];
	drawBoard();
}

// starts the game
reset();