import { strict as assert } from 'assert'
import Rook from '../../../src/models/pieces/rook.js'
import Pawn from '../../../src/models/pieces/pawn.js'
import King from '../../../src/models/pieces/king.js'
import Board from '../../../src/models/board.js'
import Player from '../../../src/models/player.js'
import Square from '../../../src/models/square.js'

describe('Rook', () => {
  let board
  beforeEach(() => (board = new Board()))

  it('can move laterally', () => {
    const rook = new Rook(Player.WHITE)
    board.setPiece(new Square(1, 2), rook)

    const moves = rook.getAvailableMoves(board)

    const expectedMoves = [
      // Horizontal
      new Square(1, 0),
      new Square(1, 1),
      new Square(1, 3),
      new Square(1, 4),
      new Square(1, 5),
      new Square(1, 6),
      new Square(1, 7),
      // Vertical
      new Square(0, 2),
      new Square(2, 2),
      new Square(3, 2),
      new Square(4, 2),
      new Square(5, 2),
      new Square(6, 2),
      new Square(7, 2)
    ]

    assert.deepEqual(new Set(moves), new Set(expectedMoves))
  })

  it('cannot make any other moves', () => {
    const rook = new Rook(Player.WHITE)
    board.setPiece(new Square(1, 2), rook)

    const moves = rook.getAvailableMoves(board)

    assert.equal(moves.length, 14, '`moves` does not have length 14')
  })

  it('cannot move through friendly pieces', () => {
    const rook = new Rook(Player.WHITE)
    const friendlyPiece = new Pawn(Player.WHITE)
    board.setPiece(new Square(4, 4), rook)
    board.setPiece(new Square(4, 6), friendlyPiece)

    const moves = rook.getAvailableMoves(board)

    assert(
      !moves.some(square => square.equals(new Square(4, 7))),
      '`moves` contains the square (4, 7)'
    )
  })

  it('cannot move through opposing pieces', () => {
    const rook = new Rook(Player.WHITE)
    const opposingPiece = new Pawn(Player.BLACK)
    board.setPiece(new Square(4, 4), rook)
    board.setPiece(new Square(4, 6), opposingPiece)

    const moves = rook.getAvailableMoves(board)

    assert(
      !moves.some(square => square.equals(new Square(4, 7))),
      '`moves` contains the square (4, 7)'
    )
  })

  it('can take opposing pieces', () => {
    const rook = new Rook(Player.WHITE)
    const opposingPiece = new Pawn(Player.BLACK)
    board.setPiece(new Square(4, 4), rook)
    board.setPiece(new Square(4, 6), opposingPiece)

    const moves = rook.getAvailableMoves(board)

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
    const rook = new Rook(Player.WHITE)
    const friendlyPiece = new Pawn(Player.WHITE)
    board.setPiece(new Square(4, 4), rook)
    board.setPiece(new Square(4, 6), friendlyPiece)

    const moves = rook.getAvailableMoves(board)

    assert(
      !moves.some(square => square.equals(new Square(4, 6))),
      '`moves` contains the square (4, 6)'
    )
  })
})
