import { strict as assert } from 'assert'
import Bishop from '../../../src/models/pieces/bishop.js'
import Pawn from '../../../src/models/pieces/pawn.js'
import King from '../../../src/models/pieces/king.js'
import Player from '../../../src/models/player.js'
import Square from '../../../src/models/square.js'
import Board from '../../../src/models/board.js'

describe('Bishop', () => {
  let board
  beforeEach(() => (board = new Board()))

  it('can move diagonally', () => {
    const bishop = new Bishop(Player.WHITE)
    board.setPiece(new Square(2, 3), bishop)

    const moves = bishop.getAvailableMoves(board)

    const expectedMoves = [
      // Forwards diagonal
      new Square(0, 1),
      new Square(1, 2),
      new Square(3, 4),
      new Square(4, 5),
      new Square(5, 6),
      new Square(6, 7),
      // Backwards diagonal
      new Square(0, 5),
      new Square(1, 4),
      new Square(3, 2),
      new Square(4, 1),
      new Square(5, 0)
    ]

    assert.deepEqual(new Set(moves), new Set(expectedMoves))
  })

  it('cannot make any other moves', () => {
    const bishop = new Bishop(Player.WHITE)
    board.setPiece(new Square(2, 3), bishop)

    const moves = bishop.getAvailableMoves(board)

    assert.equal(moves.length, 11, '`moves` does not have length 11')
  })

  it('cannot move through friendly pieces', () => {
    const bishop = new Bishop(Player.WHITE)
    const friendlyPiece = new Pawn(Player.WHITE)
    board.setPiece(new Square(4, 4), bishop)
    board.setPiece(new Square(6, 6), friendlyPiece)

    const moves = bishop.getAvailableMoves(board)

    assert(
      !moves.some(square => square.equals(new Square(7, 7))),
      '`moves` contains the square (7, 7)'
    )
  })

  it('cannot move through opposing pieces', () => {
    const bishop = new Bishop(Player.WHITE)
    const opposingPiece = new Pawn(Player.BLACK)
    board.setPiece(new Square(4, 4), bishop)
    board.setPiece(new Square(6, 6), opposingPiece)

    const moves = bishop.getAvailableMoves(board)

    assert(
      !moves.some(square => square.equals(new Square(7, 7))),
      '`moves` contains the square (7, 7)'
    )
  })

  it('can take opposing pieces', () => {
    const bishop = new Bishop(Player.WHITE)
    const opposingPiece = new Pawn(Player.BLACK)
    board.setPiece(new Square(4, 4), bishop)
    board.setPiece(new Square(6, 6), opposingPiece)

    const moves = bishop.getAvailableMoves(board)

    assert(
      moves.some(square => square.equals(new Square(6, 6))),
      '`moves` does not contain the square (6, 6)'
    )
  })

  xit('cannot take the opposing king', () => {
    const bishop = new Bishop(Player.WHITE)
    const opposingKing = new King(Player.BLACK)
    board.setPiece(new Square(4, 4), bishop)
    board.setPiece(new Square(6, 6), opposingKing)

    const moves = bishop.getAvailableMoves(board)

    assert(
      !moves.some(square => square.equals(new Square(6, 6))),
      '`moves` contains the square (6, 6)'
    )
  })

  it('cannot take friendly pieces', () => {
    const bishop = new Bishop(Player.WHITE)
    const friendlyPiece = new Pawn(Player.WHITE)
    board.setPiece(new Square(4, 4), bishop)
    board.setPiece(new Square(6, 6), friendlyPiece)

    const moves = bishop.getAvailableMoves(board)

    assert(
      !moves.some(square => square.equals(new Square(6, 6))),
      '`moves` contains the square (6, 6)'
    )
  })
})
