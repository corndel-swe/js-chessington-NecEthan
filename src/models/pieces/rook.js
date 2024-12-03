import Square from '../square.js'
import Piece from './piece.js'

export default class Rook {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this)

    let moves = []

    if (this.player === Player.WHITE) {
      if (location.row === 0) {
        moves.push(new Square(location.row + 1, location.col))
        moves.push(new Square(location.row, location.col + 1))
      }
     
    }

    return moves
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}
