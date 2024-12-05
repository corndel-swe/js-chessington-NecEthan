import Square from '../square.js'
import Piece from './piece.js'

export default class Queen extends Piece{
  constructor(player) {
    super(player);

  }

  getAvailableMoves(board) {
    const loc = board.findPiece(this)
    const moves = []

    const dirs = [
      { dr: 1, dc: 1 },
      { dr: 1, dc: 0 },
      { dr: 1, dc: -1 },
      { dr: -1, dc: 1 },
      { dr: -1, dc: 0 },
      { dr: -1, dc: -1 },
      { dr: 0, dc: -1 },
      { dr: 0, dc: 1 },
    ]

    for (let { dr, dc } of dirs) {
      // 0, 3
      let candidate = new Square(loc.row + dr, loc.col + dc) // 1,4 // 1,3

      while (board.contains(candidate)) {
        // Check if there is a piece in the way
        const capturable = board.getPiece(candidate)

        if (capturable) {
          if (
            capturable.player !== this.player) {
            moves.push(candidate)
          }
          break
        }

        moves.push(candidate)

        candidate = new Square(candidate.row + dr, candidate.col + dc) //2,5 //2,3
      }
    }

    return moves
  }

}
