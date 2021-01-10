"use strict";
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

function draw_board(){
    for(let i = 0; i < 7; i++){
		console.log(i)
	for(let j = 0; j < 6; j++){
		console.log(j)
	    let tile = document.getElementById(`tile-${i}-${j}`);
	    let marker = board[i][j];

	    // not optimized
	    // unnecessarily modifying classes at every render
	    // but ok for now
	    if(marker == ' '){
		tile.classList.remove('clicked');
	    }else{
		tile.classList.add('clicked');
	    }
	    tile.innerHTML = marker;
	}
    }
}

function choose(x, y){
    let tile = board[x][y];
    if(tile != ' '){
	// do nothing
	// rely on css to provide user visual feedback
    }else{
	// assume the player is always X
	board[x].pop(" ")
	board[x].unshift("X");
	draw_board();
    }
}

function wlt() {
	document.getElementById("wins").innerHTML = "Wins: " + wins;
	document.getElementById("losses").innerHTML = "Losses : " + losses;
	document.getElementById("ties").innerHTML = "Ties : " + ties;
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
	//if push x or x, change table class to yellow or red
	wlt();
}

// processes AI move
function aiTurn() {
	//if push x or x, change table class to yellow or red
	wlt();
}

// clears the board
// function reset(){
//     board = [
// 	[' ', ' ', ' '],
// 	[' ', ' ', ' '],
// 	[' ', ' ', ' ']
//     ];
//     draw_board();
// }
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
	draw_board();
}

// starts the game
reset();