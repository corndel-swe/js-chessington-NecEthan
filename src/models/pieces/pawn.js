import Square from '../square.js'
import Player from '../player.js'
import Piece from './piece.js'

export default class Pawn {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)

    // the list of valid moves
    let moves = []

    if (this.player === Player.WHITE) {

      if (location.row === 1) {
        moves.push(new Square(location.row + 2, location.col))
        moves.push(new Square(location.row + 1, location.col))
      } else {
        moves.push(new Square(location.row + 1, location.col))
      }

    } 
    
    if (this.player === Player.BLACK) {
      if (location.row === 6) {
        moves.push(new Square(location.row - 1, location.col))
        moves.push(new Square(location.row - 2, location.col))
      } else {
        moves.push(new Square(location.row - 1, location.col))
      } 
    }

    return moves
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}
