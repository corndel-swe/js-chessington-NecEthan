import { strict as assert } from 'assert'
import Rook from '../../../src/models/pieces/rook.js'
import Pawn from '../../../src/models/pieces/pawn.js'
import King from '../../../src/models/pieces/king.js'
import Board from '../../../src/models/board.js'
import Player from '../../../src/models/player.js'
import Square from '../../../src/models/square.js'
import Queen from '../../../src/models/pieces/queen.js'

describe('Queen', () => {
  let board
  beforeEach(() => (board = new Board()))

  it('can move any direction', () => {
    const queen = new Queen(Player.WHITE)
    board.setPiece(new Square(3, 3), queen)

    const moves = queen.getAvailableMoves(board)

    const expectedMoves = [
      // Horizontal
      new Square(3, 0),
      new Square(3, 1),
      new Square(3, 2),
      new Square(3, 4),
      new Square(3, 5),
      new Square(3, 6),
      new Square(3, 7),
     // vertical
     new Square(0, 3),
     new Square(1, 3),
     new Square(2, 3),
     new Square(4, 3),
     new Square(5, 3),
     new Square(6, 3),
     new Square(7, 3),
     //diagonal forwards
     new Square(4, 2),
     new Square(5, 1),
     new Square(4, 4),
     new Square(5, 5),
     new Square(6, 6),
     new Square(7, 7),
     new Square(6, 0),

     // diagonal backwards
     new Square(2, 2),
     new Square(2, 4),
     new Square(1, 5),
     new Square(0, 6),
     new Square(1, 1),
     new Square(0, 0),
    ]

    assert.deepEqual(new Set(moves), new Set(expectedMoves))
  })

  it('cannot make any other moves', () => {
    const queen = new Queen(Player.WHITE)
    board.setPiece(new Square(3, 3), queen)

    const moves = queen.getAvailableMoves(board)

    assert.equal(moves.length, 27, '`moves` does not have length 27')
  })

  it('cannot move through friendly pieces', () => {
    const queen = new Queen(Player.WHITE)
    const friendlyPiece = new Pawn(Player.WHITE)
    board.setPiece(new Square(4, 4), queen)
    board.setPiece(new Square(4, 6), friendlyPiece)

    const moves = queen.getAvailableMoves(board)

    assert(
      !moves.some(square => square.equals(new Square(4, 7))),
      '`moves` contains the square (4, 7)'
    )
  })

  it('cannot move through opposing pieces', () => {
    const queen = new Queen(Player.WHITE)
    const opposingPiece = new Pawn(Player.BLACK)
    board.setPiece(new Square(4, 4), queen)
    board.setPiece(new Square(4, 6), opposingPiece)

    const moves = queen.getAvailableMoves(board)

    assert(
      !moves.some(square => square.equals(new Square(4, 7))),
      '`moves` contains the square (4, 7)'
    )
  })

  it('can take opposing pieces', () => {
    const queen = new Queen(Player.WHITE)
    const opposingPiece = new Pawn(Player.BLACK)
    board.setPiece(new Square(4, 4), queen)
    board.setPiece(new Square(4, 6), opposingPiece)

    const moves = queen.getAvailableMoves(board)

    assert(
      moves.some(square => square.equals(new Square(4, 6))),
      '`moves` does not contain the square (4, 6)'
    )
  })

  xit('cannot take the opposing king', () => {
    const rook = new Rook(Player.WHITE)
    const opposingKing = new King(Player.BLACK)
    board.setPiece(new Square(4, 4), rook)
    board.setPiece(new Square(4, 6), opposingKing)

    const moves = rook.getAvailableMoves(board)

    assert(
      !moves.some(square => square.equals(new Square(4, 6))),
      '`moves` contains the square (4, 6)'
    )
  })

  it('cannot take friendly pieces', () => {
    const queen = new Queen(Player.WHITE)
    const friendlyPiece = new Pawn(Player.WHITE)
    board.setPiece(new Square(4, 4), queen)
    board.setPiece(new Square(4, 6), friendlyPiece)

    const moves = queen.getAvailableMoves(board)

    assert(
      !moves.some(square => square.equals(new Square(4, 6))),
      '`moves` contains the square (4, 6)'
    )
  })
})
