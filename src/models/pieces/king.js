import Square from '../square.js'
import Piece from './piece.js'
import Player from '../player.js'

export default class King {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this)

    // the list of valid moves
    let moves = []

    if (this.player === Player.WHITE) {
   
      moves.push(new Square(location.row + 1, location.col))
      moves.push(new Square(location.row, location.col + 1))
      moves.push(new Square(location.row, location.col - 1))
      moves.push(new Square(location.row + 1, location.col - 1))
      moves.push(new Square(location.row + 1, location.col + 1))

      if (location.row > 0) {
        moves.push(new Square(location.row - 1, location.col - 1))
        moves.push(new Square(location.row - 1, location.col + 1))
        moves.push(new Square(location.row - 1, location.col))
      }
      
    } 

    if (this.player === Player.BLACK) {
      moves.push(new Square(location.row - 1, location.col))
      moves.push(new Square(location.row, location.col + 1))
      moves.push(new Square(location.row, location.col - 1))
      moves.push(new Square(location.row - 1, location.col + 1))
      moves.push(new Square(location.row - 1, location.col - 1))

      if (location.row < 7) {
        moves.push(new Square(location.row + 1, location.col - 1))
        moves.push(new Square(location.row + 1, location.col + 1))
        moves.push(new Square(location.row + 1, location.col))
      }
    } 
    
    return moves
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}
