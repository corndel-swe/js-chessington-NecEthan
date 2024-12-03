import Square from '../square.js'
import Piece from './piece.js'
import Player from '../player.js'

export default class Bishop {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    console.log(board)
    let row1 = board[0]
    console.log(row1.length)
    console.log('-----------------------------')
  

    // the list of valid moves
    let moves = []

    if (this.player === Player.WHITE) {
      if (location.row > 0) {
        moves.push(new Square(location.row - 1, location.col + 1));
        moves.push(new Square(location.row - 1, location.col - 1));
      }
   
      moves.push(new Square(location.row + 1, location.col + 1));
     
    } 

    return moves
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}
