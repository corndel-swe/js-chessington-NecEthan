import Square from '../square.js'
import Piece from './piece.js'
import King from './king.js'

class Bishop extends Piece {
  constructor(player) {
    super(player)
  }

  getAvailableMoves(board) {
    const loc = board.findPiece(this)
    const moves = []

    const dirs = [
      { dr: 1, dc: 1 },
      { dr: 1, dc: -1 },
      { dr: -1, dc: 1 },
      { dr: -1, dc: -1 }
    ]

    for (let { dr, dc } of dirs) {
      let candidate = new Square(loc.row + dr, loc.col + dc)
      while (board.contains(candidate)) {
        // Check if there is a piece in the way
        const capturable = board.getPiece(candidate)

        if (capturable) {
          if (
            capturable.player !== this.player &&
            !(capturable instanceof King)
          ) {
            moves.push(candidate)
          }
          break
        }

        moves.push(candidate)

        candidate = new Square(candidate.row + dr, candidate.col + dc)
      }
    }

    return moves
  }
}

export default Bishop
