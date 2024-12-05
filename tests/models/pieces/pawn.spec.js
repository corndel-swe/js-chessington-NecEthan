import { strict as assert } from 'assert'
import Pawn from '../../../src/models/pieces/pawn.js'
import Board from '../../../src/models/board.js'
import Player from '../../../src/models/player.js'
import Square from '../../../src/models/square.js'
import King from '../../../src/models/pieces/king.js'
import Rook from '../../../src/models/pieces/rook.js'

describe('Pawn', () => {
  let board
  beforeEach(() => {
    board = new Board()
  })

  describe('white pawns', () => {
    it('can move one square up', () => {
      const pawn = new Pawn(Player.WHITE)
      board.setPiece(new Square(0, 0), pawn)

      const moves = pawn.getAvailableMoves(board)

      assert(moves.some(square => square.equals(new Square(1, 0))))
    })

    it('can move one or two squares up on their first move', () => {
      const pawn = new Pawn(Player.WHITE)
      board.setPiece(new Square(1, 7), pawn)

      const moves = pawn.getAvailableMoves(board)

      assert.equal(moves.length, 2)
      assert(moves.some(square => square.equals(new Square(2, 7))))
      assert(moves.some(square => square.equals(new Square(3, 7))))
    })

    it('cannot move at the top of the board', () => {
      const pawn = new Pawn(Player.WHITE)
      board.setPiece(new Square(7, 3), pawn)

      const moves = pawn.getAvailableMoves(board)

      assert.equal(moves.length, 0)
    })

    it('cannot move if there is a piece in front', () => {
      const pawn = new Pawn(Player.WHITE)
      const blockingPiece = new Rook(Player.BLACK)
      board.setPiece(new Square(5, 3), pawn)
      board.setPiece(new Square(6, 3), blockingPiece)

      const moves = pawn.getAvailableMoves(board)

      assert.equal(moves.length, 0)
    })

    it('cannot move two squares if there is a piece two sqaures in front', () => {
      const pawn = new Pawn(Player.WHITE)
      const blockingPiece = new Rook(Player.BLACK)
      board.setPiece(new Square(1, 3), pawn)
      board.setPiece(new Square(3, 3), blockingPiece)

      const moves = pawn.getAvailableMoves(board)

      assert(!moves.some(square => square.equals(new Square(3, 3))))
    })

    it('can move diagonally if there is a piece to take', () => {
      const pawn = new Pawn(Player.WHITE)
      const opposingPiece = new Rook(Player.BLACK)
      board.setPiece(new Square(4, 4), pawn)
      board.setPiece(new Square(5, 3), opposingPiece)

      const moves = pawn.getAvailableMoves(board)

      assert(moves.some(square => square.equals(new Square(5, 3))))
    })

    it('cannot move diagonally if there is no piece to take', () => {
      const pawn = new Pawn(Player.WHITE)
      board.setPiece(new Square(4, 4), pawn)

      const moves = pawn.getAvailableMoves(board)

      assert(!moves.some(square => square.equals(new Square(5, 3))))
    })

    it('cannot take a friendly piece', () => {
      const pawn = new Pawn(Player.WHITE)
      const friendlyPiece = new Rook(Player.WHITE)
      board.setPiece(new Square(4, 4), pawn)
      board.setPiece(new Square(5, 3), friendlyPiece)

      const moves = pawn.getAvailableMoves(board)

      assert(!moves.some(square => square.equals(new Square(5, 3))))
    })

    xit('cannot take the opposing king', () => {
      const pawn = new Pawn(Player.WHITE)
      const opposingKing = new King(Player.BLACK)
      board.setPiece(new Square(4, 4), pawn)
      board.setPiece(new Square(5, 3), opposingKing)

      const moves = pawn.getAvailableMoves(board)

      assert(!moves.some(square => square.equals(new Square(5, 3))))
    })
  })

  describe('black pawns', () => {
    it('can move one square down', () => {
      const pawn = new Pawn(Player.BLACK)
      board.setPiece(new Square(6, 0), pawn)

      const moves = pawn.getAvailableMoves(board)

      assert(moves.some(square => square.equals(new Square(5, 0))))
    })

    it('can move one or two squares down on their first move', () => {
      const pawn = new Pawn(Player.BLACK)
      board.setPiece(new Square(6, 7), pawn)

      const moves = pawn.getAvailableMoves(board)

      assert.equal(moves.length, 2)
      assert(moves.some(square => square.equals(new Square(4, 7))))
      assert(moves.some(square => square.equals(new Square(5, 7))))
    })

    it('cannot move at the bottom of the board', () => {
      const pawn = new Pawn(Player.BLACK)
      board.setPiece(new Square(0, 3), pawn)

      const moves = pawn.getAvailableMoves(board)

      assert.equal(moves.length, 0)
    })

    it('cannot move if there is a piece in front', () => {
      const pawn = new Pawn(Player.BLACK)
      const blockingPiece = new Rook(Player.WHITE)
      board.setPiece(new Square(6, 3), pawn)
      board.setPiece(new Square(5, 3), blockingPiece)

      const moves = pawn.getAvailableMoves(board)
      console.log(moves)
      assert.equal(moves.length, 0)
    })

    it('cannot move two squares if there is a piece two sqaures in front', () => {
      const pawn = new Pawn(Player.BLACK)
      const blockingPiece = new Rook(Player.WHITE)
      board.setPiece(new Square(6, 3), pawn)
      board.setPiece(new Square(4, 3), blockingPiece)

      const moves = pawn.getAvailableMoves(board)

      assert(!moves.some(square => square.equals(new Square(4, 3))))
    })

    it('can move diagonally if there is a piece to take', () => {
      const pawn = new Pawn(Player.BLACK)
      const opposingPiece = new Rook(Player.WHITE)
      board.setPiece(new Square(4, 4), pawn)
      board.setPiece(new Square(3, 3), opposingPiece)

      const moves = pawn.getAvailableMoves(board)

      assert(moves.some(square => square.equals(new Square(3, 3))))
    })

    it('cannot move diagonally if there is no piece to take', () => {
      const pawn = new Pawn(Player.BLACK)
      board.setPiece(new Square(4, 4), pawn)

      const moves = pawn.getAvailableMoves(board)

      assert(!moves.some(square => square.equals(new Square(3, 3))))
    })

    it('cannot take a friendly piece', () => {
      const pawn = new Pawn(Player.BLACK)
      const friendlyPiece = new Rook(Player.BLACK)
      board.setPiece(new Square(4, 4), pawn)
      board.setPiece(new Square(3, 3), friendlyPiece)

      const moves = pawn.getAvailableMoves(board)

      assert(!moves.some(square => square.equals(new Square(3, 3))))
    })

    xit('cannot take the opposing king', () => {
      const pawn = new Pawn(Player.BLACK)
      const opposingKing = new King(Player.WHITE)
      board.setPiece(new Square(4, 4), pawn)
      board.setPiece(new Square(3, 3), opposingKing)

      const moves = pawn.getAvailableMoves(board)

      assert(!moves.some(square => square.equals(new Square(3, 3))))
    })
  })
})
