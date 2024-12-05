import Player from '../player.js';
import Square from '../square.js'
import Piece from './piece.js'

export default class Pawn extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const loc = board.findPiece(this);
    const moves = [];
    let dirs = [];

    if (this.player === Player.WHITE) {
      if (loc.row === 1) { 
        dirs.push(
          { dr: 1, dc: 0 }, 
          { dr: 2, dc: 0 }, 
        )
      } else {
        dirs.push({ dr: 1, dc: 0 })  
      }
    }
    if (this.player === Player.BLACK) {
      if (loc.row === 6) { 
        dirs.push(
          { dr: -1, dc: 0 },  
          { dr: -2, dc: 0 },
        )
      } else {
        dirs.push({ dr: -1, dc: 0 })  
      }
    }

    for (let dir of dirs) {

      let candidate = new Square(loc.row + dir.dr, loc.col + dir.dc); 
      let capturableRightSquare = new Square(candidate.row, candidate.col + 1);
      let capturableLeftSquare = new Square(candidate.row, candidate.col - 1);

      if (board.contains(candidate)) {
        const capturable = board.getPiece(candidate);
        const capturableLeft = board.getPiece(capturableLeftSquare);
        const capturableRight = board.getPiece(capturableRightSquare);


        if (capturableRight && capturableRight.player !== this.player) {
          moves.push(capturableRightSquare);
        }

        if (capturableLeft && capturableLeft.player !== this.player) {
          moves.push(capturableLeftSquare);
        }

        if (!capturable) {
          moves.push(candidate);
        }
      }
    }

    return moves;
  }
}
