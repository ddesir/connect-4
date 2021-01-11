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
let isGameRunning = true;
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
	document.getElementById("reset").innerHTML = "Play Again";
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

//section to be called to isBoardFull
//////////////////////////////////////////////////////////////////////////
function horiCheck(){
    for (let row = 0; row < board.length; row++){
        for (let col = 0; col < 4; col++){
			if((board[col][row] == "X") && (board[col+1][row] == "X") && (board[col+2][row] == "X") && (board[col+3][row] == "X")){
				return true;
			}
		}
	}
}

function vertiCheck(){
    for (let col = 0; col < 7; col++){
        for (let row = 0; row < 3; row++){
			if((board[col][row] == "X") && (board[col][row+1] == "X") && (board[col][row+2] == "X") && (board[col][row+3] == "X")){
				return true;
			}
		}
	}
}
function diagCheck1(){
    for(let col = 0; col < 4; col++){
        for (let row = 0; row < 3; row++){
			if((board[col][row] == "X") && (board[col+1][row+1] == "X") && (board[col+2][row+2] == "X") && (board[col+3][row+3] == "X")){
				return true;
			}
		}
	}
}
function diagCheck2(){
	for(let col = 0; col < 4; col++){
        for (let row = 5; row > 2; row--){
			if((board[col][row] == "X") && (board[col-1][row-1] == "X") && (board[col-2][row-2] == "X") && (board[col-3][row-3] == "X")){
				return true;
			}
		}
	}
}
//UserChecks
function horiCheck1(){
    for (let row = 0; row < board.length; row++){
        for (let col = 0; col < 4; col++){
			if((board[col][row] == "O") && (board[col+1][row] == "O") && (board[col+2][row] == "O") && (board[col+3][row] == "O")){
				return true;
			}
		}
	}
}

function vertiCheck1(){
    for (let col = 0; col < 7; col++){
        for (let row = 0; row < 3; row++){
			if((board[col][row] == "O") && (board[col][row+1] == "O") && (board[col][row+2] == "O") && (board[col][row+3] == "O")){
				return true;
			}
		}
	}
}
function diagCheck3(){
    for(let col = 0; col < 4; col++){
        for (let row = 0; row < 3; row++){
			if((board[col][row] == "O") && (board[col+1][row+1] == "O") && (board[col+2][row+2] == "O") && (board[col+3][row+3] == "O")){
				return true;
			}
		}
	}
}
function diagCheck4(){
	for(let col = 0; col < 4; col++){
        for (let row = 5; row > 2; row--){
			if((board[col][row] == "O") && (board[col-1][row-1] == "O") && (board[col-2][row-2] == "O") && (board[col-3][row-3] == "X")){
				return true;
			}
		}
	}
}

////////////////////////////////////////////////////////////////////////////

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
	if(horiCheck1() || vertiCheck1() || diagCheck3() || diagCheck4()){
		return true;
	}
}
function hasFourInARowAI(){
	if(horiCheck() || vertiCheck() || diagCheck1() || diagCheck2()){
		return true;
	}
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
	if (hasFourInARowAI()) {
		losses++;
		isGameRunning = false;
		wlt();
	} else if (isBoardFull()) {
		ties++;
		isGameRunning = false;
		wlt();
	}
}

// pushes player's piece to bottom of column
function choose(r, c) {
	// verifies user click
	if (board[c][r] !== "O" && board[c][r] !== "X" && isGameRunning) {
		board[c].push("O");
		drawBoard();
		// checks for user win and ties
		if (hasFourInARow()) {
			wins++;
			isGameRunning = false;
			wlt();
			return;
		} else if (isBoardFull()) {
			ties++;
			isGameRunning = false;
			wlt();
		} 
		aiMove();

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
	isGameRunning = true;
	document.getElementById("reset").innerHTML = "Reset Board";
}

// starts the game
reset();