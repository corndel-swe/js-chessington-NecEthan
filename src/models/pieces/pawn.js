import Square from '../square.js'
import Player from '../player.js'
import Piece from './piece.js'

export default class Pawn extends Piece{
  constructor(player) {
    super(player);

  }

  getAvailableMoves(board) {
    let location = board.findPiece(this)

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

}
