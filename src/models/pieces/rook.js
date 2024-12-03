import Square from '../square.js'
import Piece from './piece.js'

export default class Rook {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this)

    let moves = []

    // if (this.player === Player.WHITE) {
    //   for (let i=1; i <)

    //   moves.push(new Square(location.row ))
    // }
     
    return []
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}
