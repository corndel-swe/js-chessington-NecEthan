import Square from '../square.js'
import Piece from './piece.js'

export default class Knight extends Piece{
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const loc = board.findPiece(this)
    const moves = []

    const dirs = [
      { dr: 2, dc: 1 },
      { dr: 2, dc: -1 },

      { dr: -2, dc: 1 },
      { dr: -2, dc: -1 },

      { dr: 1, dc: -2 },
      { dr: -1, dc: -2 },

      { dr: 1, dc: 2 },
      { dr: -1, dc: 2 },

    ]

    for (let { dr, dc } of dirs) {
      // 0, 1 = location initially
      let candidate = new Square(loc.row + dr, loc.col + dc) // 2,2 // 2,0 // -2,1 // etc
      if (board.contains(candidate)) {
        // Check if there is a piece in the way
        const capturable = board.getPiece(candidate)

        if (!capturable) {
          moves.push(candidate)
        } else if (capturable.player !== this.player) {
          moves.push(candidate)
        }

      }
    }

    return moves
  }

}
