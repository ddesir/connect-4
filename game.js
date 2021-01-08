let board = [
    [" ", " ", " "," "," "," "],
    [" ", " ", " "," "," "," "],
    [" ", " ", " "," "," "," "],
    [" ", " ", " "," "," "," "],
    [" ", " ", " "," "," "," "],
    [" ", " ", " "," "," "," "],
    [" ", " ", " "," "," "," "]
];

let wins = 0;
let losses = 0;
let ties = 0;


function draw_board(){
    for(let i = 0; i < 6; i++){
	for(let j = 0; j < 7; j++){
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



function isFull() {

}

function userTurn() {

}
function aiTurn() {

}
function reset(){
    board = [
            [' ', ' ', ' ',' ',' ',' '],
            [' ', ' ', ' ',' ',' ',' '],
            [' ', ' ', ' ',' ',' ',' '],
            [' ', ' ', ' ',' ',' ',' '],
            [' ', ' ', ' ',' ',' ',' '],
            [' ', ' ', ' ',' ',' ',' '],
            [' ', ' ', ' ',' ',' ',' ']
        ];
    draw_board();
}

// run these functions for the first time to set up the game
draw_board();
update_record();
