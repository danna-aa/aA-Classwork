let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  const grid = [];

  for (let i = 0; i < 8; i++) {
    let row = new Array(8);
    grid.push(row);
  }

  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (!this.isValidPos(pos)) {
    throw new Error("not valid position!");
  } else {
    return this.grid[pos[0]][pos[1]];
  }
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  return this.validMoves(color).length !== 0;
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  return (this.grid[pos[0]][pos[1]].getPiece().color === color);
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  return (this.grid[pos[0]][pos[1]] === ".");
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  return (pos[0] >= 0 && pos[0] < 8) && (pos[1] >= 0 && pos[1] < 8)
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  if (!piecesToFlip) {
    piecesToFlip = [];
  } else {
    piecesToFlip.push(pos);
  }

  let nextPos = [pos[0] + dir[0], pos[1] + dir[1]];

  if (!board.isOccupied(nextPos)) {
    return null;
  } else if (board.isMine(nextPos, board.getPiece(pos).color)) {
    return piecesToFlip.length == 0 ? null : piecesToFlip;
  } else if (!board.isValidPos(nextPos)) {
    return null;
  } else {
    return _positionsToFlip(board, nextPos, color, dir, piecesToFlip);
  }
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  let first = "a", last = "h";
  let alphabet = "";

  for (i = 97, a = ''; i < 105;) {
    alphabet += String.fromCharCode(i++);
  };

  console.log("  " + "  " + alphabet);

  for (let index = 0; index < 8; index++) {

     let rowString = " " + (index + 1) + " |";

    for (let jindex = 0; jindex < 8; jindex++) {
      let pos = [index, jindex];

      rowString += (this.getPiece(pos) ? this.getPiece(pos).tostring() : ". ");
    };
    console.log(rowString + "| " + index);
  };
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
 /** helperMethod
  *  check horizontal [*, +-1]
  *  check vertical   [+-1, *]
  *  
  */
 const validMove = [];

  return validMove;
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  const validMovesList = [];
  
  for (let index = 0; index < 8; index++) {
    for (let jindex = 0; jindex < 8; jindex++) {
      if (this.validMove([i, j], color)) {
        validMovesList.push([i, j]);
      }
    }
  }
};

module.exports = Board;