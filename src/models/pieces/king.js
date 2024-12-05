import Square from '../square.js'
import Piece from './piece.js'
import Player from '../player.js'

export default class King extends Piece{
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
      let candidate = new Square(loc.row + dr, loc.col + dc) 
      if (board.contains(candidate)) {
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
