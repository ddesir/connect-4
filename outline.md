# Purpose
To practice combining all the elements we've learned from previous classes (HTML, CSS, and JS) within the framing of building a web based Connect 4 game.

# Features
- User can choose which column to place pieces.
- User can reset.
- User can view wins/losses/ties.
- User can read rules.

# Implementation
- Cannot place piece on already full column.
- Use push() to add to column while the array.length is < 6.
- Use Math.random() to determine AI move.
- Check for 4 in a row vertically, horizontally, diagonally.
- Reset will clear the board.
- Wins, losses, ties variables.
- Static text for rules.

# Function Stubs
- draw_board()
- isFull()
- userTurn()
- aiTurn()
- reset()

# Reduce Problem Space
- Assume user always goes first.
- User is "O".
- Use "O" and "X" as pieces.