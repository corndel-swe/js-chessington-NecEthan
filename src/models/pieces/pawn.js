import Square from '../square.js'
import Player from '../player.js'
import Piece from './piece.js'

export default class Pawn extends Piece{
  constructor(player) {
    super(player);

  }

  getAvailableMoves(board) {
    const loc = board.findPiece(this)
    const moves = []

    const dirs = []

    if (loc.row === 1) {
      this.dirs = [
        { dr: 1, dc: 0 },
        { dr: 2, dc: 0 },
      ]
    } else {
      this.dirs = [
        { dr: 1, dc: 0 },
      ]
    }
    

    for (let { dr, dc } of dirs) {
      
      let candidate = new Square(loc.row + dr, loc.col + dc)
      if (board.contains(candidate)) {
        // Check if there is a piece in the way
        const capturable = board.getPiece(candidate)

        if (capturable) {
          if (
            capturable.player !== this.player)
           {
            moves.push(candidate)
          }
        }
      }
    }

    return moves
  }

}
